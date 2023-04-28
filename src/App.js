import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { Input, Avatar, Button, InputGroup, InputLeftAddon } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider className='chackra'>
      <div className='App'>
        <div className='icon-user'>
          <Avatar bg='teal.500'/>
        </div>

        <div className='input-group'>
          <InputGroup>
            <InputLeftAddon children='User'/>
            <Input type='text'/>
          </InputGroup>
        </div>
        
        <div className='input-group'>
          <InputGroup>
            <InputLeftAddon children='Password'/>
            <Input type='password'/>
          </InputGroup>
        </div>

        <div className='button-submit'>
          <Button colorScheme='teal' variant='outline'>
            Login
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
