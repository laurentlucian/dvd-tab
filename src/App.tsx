import { Flex, Heading } from '@chakra-ui/react';
import DVDLogo from './DVDLogo';

const svgWidth = 800;
const svgHeight = 600;

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
