/*
* Component to house data structures and options relevant to this DepartureTable only
*
*/
import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {compareAsc, format} from "date-fns";
import ReactTable from "./library/ReactTable";
import {boardTheme} from "./library/themes";
import {Select, Checkbox, Text, Box} from "@chakra-ui/core";

// This is a custom filter UI for selecting a unique option from a list
// Taken from https://react-table.tanstack.com/docs/api/useFilters
function SelectColumnFilter(
  {
    column: {filterValue, setFilter, preFilteredRows, id},
  }) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    });
    return [...options.values()]
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <Select
      {...boardTheme}
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  )
}

function PastDepartureFilter(
  {
    column: {filterValue, setFilter},
  }) {
  return (
    <Checkbox
      onChange={e => setFilter(e.target.checked)}>
      Show past departures
    </Checkbox>
  )
}

const DepartureTable = props => {
  let {
    upcomingDepartures
  } = props;
  const departureColumns = useMemo(() => [ //should memoize column definitions as per react-table's recommendation
    {
      Header: 'Train #',
      accessor: 'trainNumber',
      Filter: SelectColumnFilter,
      filter: 'equals',
    },
    {
      Header: 'Stop',
      accessor: 'stop',
      Filter: SelectColumnFilter,
      filter: 'equals',
    },
    {
      Header: 'Route',
      accessor: 'routeName',
      Filter: SelectColumnFilter,
      filter: 'equals',
    },
    {
      Header: 'Time',
      accessor: 'formattedTime',
      Filter: PastDepartureFilter,
      filter: (rows, columnIds, filterValue) => {
        const now = new Date();
        // filterValue represents if we want to show "past" departures or not
        // by default, this value is false
        return filterValue ? rows :
          rows.filter(item => compareAsc(item.original.time, now) === 1)
      },
      sortType: (rowA, rowB) => {
        return compareAsc(rowA?.original.time, rowB?.original.time);
      }
    },
    {
      Header: 'Status',
      accessor: 'status',
      disableFilters: true,
    },
  ], []);

  const now = new Date();

  return <ReactTable
    customTableHeader={
      <Box w='100%'>
        <Text marginLeft="0" fontSize="3xl">{format(now, "PPPP")}</Text>
        <Text marginLeft="4" fontSize="2xl">{format(now, "p")}</Text>
        <Text textAlign='center' fontSize="4xl">MBTA Commuter Rail Departure Board</Text>
      </Box>
    }
    data={upcomingDepartures}
    defaultSortBy={{
      id: 'formattedTime',
    }}
    defaultFilters={{
      id: 'formattedTime',
      value: false,
    }}

    columns={departureColumns}
  />
};

DepartureTable.defaultProps = {
  upcomingDepartures: [],
};

DepartureTable.propTypes = {
  upcomingDepartures: PropTypes.array,
};

export default DepartureTable;
