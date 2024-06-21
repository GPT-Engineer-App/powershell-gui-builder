import React from 'react';
import { Box, Checkbox, Container } from '@chakra-ui/react';

const PowerShellGUI = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box border="2px" borderColor="gray.200" p={4} borderRadius="md" width="100%">
        <Checkbox>Check me</Checkbox>
      </Box>
    </Container>
  );
};

export default PowerShellGUI;