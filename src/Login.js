import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Avatar, Button, InputGroup, InputLeftAddon, Heading, Stack, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user || !password) {
      setErrorMessage("Inform User and Password.");
    
    } else if (user !== "user") {
      setErrorMessage("Invalid user, try again!");
      
    } else if (password !== "password") {
      setErrorMessage("Invalid password, try again!");

    } else {
      navigate("/Home");
    }
  };

  return (
    <ChakraProvider>
      <Flex justify="center">
        <Stack w={500} border="1px solid #f5f5f5" p={2} mt="10%">
          
          <Flex justify="center" pt={3}>
            <Avatar bg='teal.500'/>
          </Flex>

          <Flex justify="center">
            <Heading color="#319795">Welcome</Heading>
          </Flex>

          <form onSubmit={handleSubmit}>
            <Flex justify="center" mt={2}>
              {errorMessage && 
                <Alert status='error'>
                  <AlertIcon/>
                  {errorMessage}
                  </Alert>
              }
            </Flex>

            <InputGroup direction="row" px={3} pt={4}>
              <InputLeftAddon children='User'/>
              <Input type='text' value={user} onChange={(e) => setUser(e.target.value)}/>
            </InputGroup>

            <InputGroup direction="row" p={3}>
              <InputLeftAddon children='Password'/>
              <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>

            <Flex justify="center" maxW="inherit" w="100%" px={3}>
              <Button type="submit" colorScheme='teal' variant='outline' w="100%" maxW="inherit">
                Login
              </Button>
            </Flex>
          </form>

        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default Login;