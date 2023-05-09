import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react"; 

function Feedback() {
    return (
    <ChakraProvider>
    <Heading>EXEMPLO DE MODAL PARA FEEDBACK</Heading>
    </ChakraProvider>
    );
  }

export default Feedback;