import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react";
import ReactModal from 'react-modal';

function Feedback({ isOpen, onClose }) {
    return (
    <ChakraProvider>
      <ReactModal isOpen={isOpen} onRequestClose={onClose}>
        <Heading>EXEMPLO DE MODAL PARA FEEDBACK</Heading>
      </ReactModal>
    </ChakraProvider>
    );
  }

export default Feedback;