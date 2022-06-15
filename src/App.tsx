import { Flex, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import DVDLogo from './DVDLogo';

const svgWidth = window.innerWidth;
const svgHeight = window.innerHeight;
// window.addEventListener('resize', )



const App = () => {
  return (
    <Flex justify="center" align="center">
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black' }}>
        <DVDLogo width={svgWidth} height={svgHeight} />
      </svg>
    </Flex>
  );
};

export default App;
