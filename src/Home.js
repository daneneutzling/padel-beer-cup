import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

function Home() {

  return (
    <ChakraProvider>
      <Box maxW={200} w={200} h="100%" bg="gray.200" position="fixed">
        <Box m={3}>
          <a href='/Home'>
            <Flex>
              <CheckCircleIcon w={8} h={8}/>
              <Heading ml={3} mt={2} size='sm'>Padel Beer Cup</Heading>
            </Flex>
          </a>
        </Box>

        <Link href='/Home' _hover={{textDecoration:"none"}}>
          <Box w="90%" h={9} m={2} bg="teal" borderRadius="md" display="flex" alignItems="center" p="4%" >
            <LinkIcon ml="8%"/>
            <Text display="flex" justifyContent="center" ml="15%">Link Link</Text>
          </Box>
        </Link>

      </Box>
    </ChakraProvider>
  );
}

export default Home;