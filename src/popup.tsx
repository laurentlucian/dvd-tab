import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Fonts from './libs/fonts';
import theme from './libs/theme';

const Popup = () => {

return(<Button>hi</Button>)

}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Popup />
    </ChakraProvider>
  </React.StrictMode>,
);
