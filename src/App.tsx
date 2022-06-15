import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DVDLogo from './DVDLogo';

// window.addEventListener('resize', )

const App = () => {
  const [h, setH] = useState(window.innerHeight);
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setH(window.innerHeight);
      setW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Flex justify="center" align="center">
      <svg width={w} height={h} style={{ backgroundColor: 'black' }}>
        <DVDLogo width={w} height={h} />
      </svg>
    </Flex>
  );
};

export default App;
