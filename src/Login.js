import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Avatar, Button, InputGroup, InputLeftAddon, Heading, Stack, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate, Route } from "react-router-dom";
import Home from "./Home";

function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user || !password) {
      alert("Inform User and Password.");
    
    } else if (user !== "user") {
      alert("Invalid user, try again!");
      
    } else if (password !== "password") {
      alert("Invalid password, try again!");

    } else {
      navigate('/home');
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