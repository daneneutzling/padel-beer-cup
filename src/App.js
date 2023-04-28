import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { Input, Avatar, Button, InputGroup, InputLeftAddon, Heading, Stack, Flex  } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Flex justify="center">
        <Stack w={500}>
          
          <Flex justify="center" pt={10}>
            <Avatar bg='teal.500'/>
          </Flex>

          <Flex justify="center">
            <Heading>Welcome</Heading>
          </Flex>

          <InputGroup direction="row" px={3} pt={4}>
            <InputLeftAddon children='User'/>
            <Input type='text'/>
          </InputGroup>
          <InputGroup direction="row" p={3}>
            <InputLeftAddon children='Password'/>
            <Input type='password'/>
          </InputGroup>

          <Flex justify="center" maxW="inherit" w="100%" px={3}>
            <Button colorScheme='teal' variant='outline' w="100%" maxW="inherit">
              Login
            </Button>
          </Flex>

        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
