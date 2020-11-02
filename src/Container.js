/*
* Container component for departure board webapp
* Contains Chakras-UI provided CSS reset and Chakras theme provider
*
*/
import React from 'react';
import {ThemeProvider, CSSReset, Box} from '@chakra-ui/core'

const Container = props => {
  return <ThemeProvider>
    <CSSReset/>
    <Box
      d='flex'
      alignItems='center'
      justifyContent='center'
      marginTop='20px'
    >
      {props.children}
    </Box>
  </ThemeProvider>
};

export default Container;
