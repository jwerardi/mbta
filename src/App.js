import React, {useState, useEffect} from 'react';
import './App.css';
import Container from "./Container";
import DepartureBoard from "./DepartureBoard";
import {useFetch} from "./library/hooks";

function App() {
  const {isLoading, error, data} = useFetch('https://api-v3.mbta.com/routes?type=2', { //type 2 is Commuter Rail
    method: 'GET',
  });
  const [routeQueryString, setRouteQueryString] = useState();
  useEffect(() => {
    document.title = 'MBTA Commuter Rail Departure Board';
    // create a string separated by commas containing the ids of all Commuter Rail routes
    // this will be used later on in a second GET call
    const routeQueryString = data && data['data'].map(route => {
      return route['id'];
    }).toString();
    setRouteQueryString(routeQueryString)
  }, [data]);
  return <Container>
    {isLoading && <div>loading...</div>}
    {error && <pre>{error.toString()}</pre>}
    {routeQueryString &&
    <DepartureBoard
      routeQueryString={routeQueryString}
      isLoading={isLoading}
      error={error}
    />
    }
  </Container>;
}

export default App;
