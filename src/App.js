import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { Input, Avatar, InputGroup, InputLeftAddon } from "@chakra-ui/react";

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
      </div>
    </ChakraProvider>
  );
}

export default App;
