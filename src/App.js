import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider className='chackra'>
      <div className='App'>
        <div className='icon-user'>
          <Avatar bg='teal.500'/>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
