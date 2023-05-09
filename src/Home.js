import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Heading, Link, Text, Divider } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon, InfoIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

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
          <Box w="90%" h={9} m={2} mt="15%" bg="teal" borderRadius="md" display="flex" alignItems="center" p="4%" >
            <LinkIcon ml="8%"/>
            <Text display="flex" justifyContent="center" ml="15%">Link Link</Text>
          </Box>
        </Link>

        <Link href='/Home' _hover={{textDecoration:"none"}}>
          <Box w="90%" h={9} m={2} bg="teal" borderRadius="md" display="flex" alignItems="center" p="4%" >
            <LinkIcon ml="8%"/>
            <Text display="flex" justifyContent="center" ml="15%">Link Link</Text>
          </Box>
        </Link>

        <Divider borderColor="gray.400" borderWidth="1px" w="99%"/>

        <Link href='/Home' _hover={{textDecoration:"none"}} mt="10%">
          <Box w="90%" h={9} m={2} mt="15%" bg="teal" borderRadius="md" display="flex" alignItems="center" p="4%" >
            <InfoIcon ml="8%"/>
            <Text display="flex" justifyContent="center" ml="15%">Link Link</Text>
          </Box>
        </Link>

        <Link href='https://www.instagram.com/dane_neutzling/' _hover={{textDecoration:"none"}} m={5}>
            <FontAwesomeIcon icon={faInstagram} fontSize={25}/>
        </Link>

        <Link href='https://www.facebook.com/daniela.neutzling/' _hover={{textDecoration:"none"}} m={5} ml={0}>
            <FontAwesomeIcon icon={faFacebook} fontSize={25}/>
        </Link>

      </Box>
    </ChakraProvider>
  );
}

export default Home;




