/*
* Main component for the MBTA Commuter Rail Departure Board
* Contains logic to parse MBTA Rest response and build arrays/objects to be used by the rest of the application
*
*/
import React, {useEffect, useState} from 'react';
import {useFetch} from './library/hooks'
import PropTypes from 'prop-types';
import {format, parseISO, compareAsc, formatDistance} from 'date-fns'
import DepartureTable from "./DepartureTable";
import {Box} from "@chakra-ui/core";

const dateFormatString = 'hh:mm:ss a';

const DepartureBoard = (props) => {
  const {isLoading, error, data} = useFetch(
    `https://api-v3.mbta.com/schedules?filter[route]=${props.routeQueryString}
    &filter[max_time]=24:00
    &include=route,trip,stop,prediction`, {
      method: 'GET',
    });
  const [upcomingDepartures, setUpcomingDepartures] = useState([]);


  const PredictedTime = ({predictedTime, originalTime}) => {
    if (predictedTime === originalTime) {
      return originalTime;
    }
    return <details>
      <summary>{predictedTime}</summary>
      Original {originalTime}
    </details>
  };

  /***
   * getScheduleStatus is a utility function to process the time a scheduled stop will occur and if present,
   * any predictions related to that scheduled stop. It will output 3 variables used to demonstrate to the user
   * the state of their scheduled stop
   *
   * @param time - An arrival/destination time. in MBTA API string format
   * @param predictedTime - If not null, a predicted arrival/destination time change. in MBTA API string format
   * @returns formattedTime - Within this function, `time` will be compared to `predictedTime`. If the
   * predicted time is different than the original time, formattedTime will be set to a <details><summary> element
   * explaining that the scheduled stop will be X minutes early/late. It will also show the originally scheduled time
   * inside of the details element. If the time is the same, then formattedTime will just be a string.
   * All timestamps here will be formatted by dateFNS into the format described by dateFormatString
   * @returns timeISO - the time of the scheduled stop post-processing, in ISO format for quick dateFNS comparison
   * @returns status - A string representing the status of the scheduled stop. If the scheduled stop is X minutes
   * early/late, the string will reflect that
   */
  const getScheduleStatus = (time, predictedTime) => {
    if (time) {
      let status = 'On Time';
      const timeISO = parseISO(time);
      if (predictedTime) {
        const timeCompare = compareAsc(predictedTime, timeISO);
        const timeDelta = formatDistance(predictedTime, timeISO);
        if (timeCompare === 1) {
          status = `Late ${timeDelta}`
        } else if (timeCompare === -1) {
          status = `Early ${timeDelta}`
        }
        return {
          timeISO,
          formattedTime: <PredictedTime
            predictedTime={format(predictedTime, dateFormatString)}
            originalTime={format(timeISO, dateFormatString)}
          />,
          status
        }
      } else {
        return {
          timeISO,
          formattedTime: format(timeISO, dateFormatString),
          status
        }
      }
    } else {
      return {
        timeISO: null,
        formattedTime: null,
        status: null,

      }
    }
  };

  useEffect(() => {
    const processData = ({included, data}) => {
      // first step is to traverse through the 'included' block of JSON from the MBTA API and create some arrays
      // which will contain all of the predictions, routes, stops, and trips referenced within our schedule data
      // this is an optimization step; we could traverse through the 'included' block every time we process a schedule

      // curr.type from the MBTA api is singular here, e.g. 'stop', 'prediction', 'route'
      // in order to reduce and deconstruct here while retaining code readability,
      // we need to give the singular array names plural aliases
      const {prediction: predictions, route: routes, stop: stops, trip: trips} = included.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.type]: [...acc[curr.type] || [], curr],
        }
      }, {});

      // The following 4 functions are helper functions to traverse through the arrays we created containing the
      // related items we have been provide from the 'included' section of the MBTA API response
      const getRoute = (routeID) => routes.find(route => route.id === routeID);
      const getStop = (stopID) => stops.find(route => route.id === stopID);
      const getTrip = (tripID) => trips.find(route => route.id === tripID);
      // the prediction ID can be null, not every schedule has a prediction associated with it
      // we must check that it exists. if it does not, the function will just return undefined
      const getPrediction = (predictionID) => predictionID && predictions.find(prediction => prediction.id === predictionID);


      return data.map(item => {
        // safely retrieve related child objects using focused helper functions
        const prediction = getPrediction(item.relationships.prediction.data?.id);
        const route = getRoute(item.relationships.route.data.id);
        const stop = getStop(item.relationships.stop.data.id);
        const trip = getTrip(item.relationships.trip.data.id);

        const predictedArrival = prediction && parseISO(prediction.attributes?.arrival_time);
        const {
          formattedTime: formattedArrivalTime,
          timeISO: arrivalTime,
          status: arrivalStatus
        } = getScheduleStatus(item.attributes?.arrival_time, predictedArrival);

        const predictedDeparture = prediction && parseISO(prediction.attributes?.departure_time);
        const {
          formattedTime: formattedDepartureTime,
          timeISO: departureTime,
          status: departureStatus
        } = getScheduleStatus(item.attributes?.departure_time, predictedDeparture);

        // if departureTime/departureStatus are undefined, that means it's the last stop for the train/route
        let status = departureStatus || <>Last stop: {arrivalStatus}</>;
        let formattedTime = formattedDepartureTime || <>Last stop: {formattedArrivalTime}</>;
        let time = departureTime || arrivalTime;

        return {
          'trainNumber': trip.attributes.name,
          'stop': stop.attributes.name,
          'routeName': route.id,
          formattedTime,
          status,
          time,
          arrivalTime,
          departureTime,
        };
      });
    };

    if (data) {
      const upcomingDepartures = processData(data);
      setUpcomingDepartures(upcomingDepartures);
    }
  }, [data]);


  return <Box w='80%' color="gold">
    {isLoading && <div>loading...</div>}
    {error && <pre>{error.toString()}</pre>}
    <DepartureTable
      upcomingDepartures={upcomingDepartures}
    />
  </Box>
};

DepartureBoard.defaultProps = {};

DepartureBoard.propTypes = {
  routeQueryString: PropTypes.string.isRequired
};

export default DepartureBoard;
