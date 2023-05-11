import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Heading, Link, Text, Divider, Button } from "@chakra-ui/react";
import { LinkIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faCircleQuestion} from "@fortawesome/free-regular-svg-icons";
import { faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";
import Modal from './Feedback';

function Home() {
  const [isOpenFeedback, setOpenFeedback] = useState(false);

  function handleOpenFeedbackModal() {
    setOpenFeedback(true);
  }

  function handleCloseFeedbackModal() {
    setOpenFeedback(false);
  }

  return (
    <ChakraProvider>
      <Box maxW={200} w={200} h="100%" bg="gray.200" position="fixed">
        <Box m={3}>
          <a href='/Home'>
            <Flex>
              <FontAwesomeIcon icon={faTableTennisPaddleBall} fontSize={40} style={{margin:'2% 3% 0% 3%'}}/>
              <Heading mt="2%" size='md'>PADEL <br/> BEER CUP</Heading>
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

        <Box w="90%" h={9} m={2} mt="15%" bg="teal" borderRadius="md" display="flex" alignItems="center" p="4%" >
          <FontAwesomeIcon icon={faCircleQuestion} style={{margin:'6%'}}/>  
          <button onClick={handleOpenFeedbackModal} display="flex" justifyContent="center">Send Feedback!</button>
          <Modal isOpen={isOpenFeedback} onClose={handleCloseFeedbackModal} />
        </Box>

        <Flex>
          <Link href='https://www.instagram.com/dane_neutzling/' _hover={{textDecoration:"none"}} m={5}>
              <FontAwesomeIcon icon={faInstagram} fontSize={25}/>
          </Link>

          <Link href='https://www.facebook.com/daniela.neutzling/' _hover={{textDecoration:"none"}} m={5} ml={0}>
              <FontAwesomeIcon icon={faFacebook} fontSize={25}/>
          </Link>

          <Link href="whatsapp:+5554981141209" _hover={{textDecoration:"none"}} m={5} ml={0}>
              <FontAwesomeIcon icon={faWhatsapp} fontSize={25}/>
          </Link>
          
          <Link href='https://mail.google.com/mail/u/0/?view=cm&tf=0&to=neutzlingdane@gmail.com' _hover={{textDecoration:"none"}} m={5} ml={0}>
            <FontAwesomeIcon icon={faEnvelopeOpen} fontSize={22}/>
          </Link>
        </Flex>

      </Box>
    </ChakraProvider>
  );
}

export default Home;