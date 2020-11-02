/*
* Light implementation of a re-usable Table component powered by react-table
*   https://www.npmjs.com/package/react-table
* Most of this code an amalgamation of example code from the official react-table documentation
*   https://react-table.tanstack.com/docs/overview
* I've customized some of the style and rendering logic to fit the DepartureBoard theme
*
*/

import React from 'react'
import {useTable, usePagination, useSortBy, useFilters} from 'react-table'
import PropTypes from 'prop-types';
import {Icon, Select, Box, Button, Text, Input, FormControl, FormLabel} from "@chakra-ui/core";
import {boardTheme} from "./themes";

const tableCellTheme = {
  margin: 0,
  padding: '0.5rem',
  borderRight: '1px',
  borderBottom: '1px',
  borderColor: 'gold',
  maxWidth: '200px',
};


function Table({columns, data, defaultSortBy, customTableHeader, defaultFilters}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [defaultSortBy],
        filters: [defaultFilters]
      },
      disableSortRemove: true, // makes it so you cannot "unsort" a column if no other column is sorted
    },
    useFilters,
    useSortBy,
    usePagination,
  );
  return (
    <>
      <Box
        d='flex'
        justifyContent='space-between'
      >
        {customTableHeader}
        <Box
          d='flex'
          alignItems='flex-end'
          flexDirection='column'
          w='300px'
        >
          <Box
            d='flex'
            flexDirection='column'
            alignItems='center'
            w='100%'
            {...boardTheme}
          >
            <Text p='2'> Page <strong> {pageIndex + 1} of {pageOptions.length} </strong></Text>
            <FormControl
              d='flex'
              alignItems='center'
              marginBottom='3'
            >
              <FormLabel htmlFor="paginationInput">Go to page:</FormLabel>
              <Input
                id="paginationInput" {...boardTheme}
                type='number'
                w='40px'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}/>
            </FormControl>
          </Box>
          <Select
            {...boardTheme}
            width='100%'
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize} results per page
              </option>
            ))}
          </Select>
        </Box>
      </Box>
      <Box
        as='table'
        {...boardTheme}
        w='100%'
        {...getTableProps()}
      >
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Box as='th' {...tableCellTheme} {...column.getHeaderProps()}>
                <Box
                  d='flex'
                  flexDirection='column'
                  alignItems='center'
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render('Header')}
                  </div>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </Box>
                {column.isSorted
                  ? column.isSortedDesc
                    ? <Icon style={{'float': 'left'}} name='arrow-down'/>
                    : <Icon style={{'float': 'right'}} name='arrow-up'/>
                  : null}
              </Box>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <Box as='td' {...tableCellTheme} {...cell.getCellProps()}>{cell.render('Cell')}</Box>
              })}
            </tr>
          )
        })}
        </tbody>
      </Box>
      <Box
        d='flex'
        w='100%'
        justifyContent='space-between'
      >
        <Button
          {...boardTheme}
          width='200px'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'Previous Page'}
        </Button>
        <Button
          {...boardTheme}
          width='200px'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'Next Page'}
        </Button>
      </Box>
    </>
  )
}

const ReactTable = props => {
  return <Table
    {...props}
  />
};

ReactTable.defaultProps = {
  defaultSortBy: {},
  data: [],
  columns: [],
  customTableHeader: <></>,
};

ReactTable.propTypes = {
  defaultSortBy: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.array,
  customTableHeader: PropTypes.element,
};

export default ReactTable;
