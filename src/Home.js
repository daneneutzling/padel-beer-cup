import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Stack, Flex, Heading } from "@chakra-ui/react";

function Home() {

  return (
    <ChakraProvider>
      <Flex justify="center">
        <Stack w={500} border="1px solid #f5f5f5" p={2} mt="10%">
            <Heading>Welcome to Page Home</Heading>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default Home;