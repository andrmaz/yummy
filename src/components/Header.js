import React from 'react';
import { Button, useColorMode, Icon, Heading } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Heading d='flex' justifyContent='space-between' pt='10px'>
          {/* Switch light and dark mode */}
          <Button data-testid="toggle" onClick={toggleColorMode} >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Icon as={FaUserCircle} />
        </Heading>
    );
};

export default Header;
