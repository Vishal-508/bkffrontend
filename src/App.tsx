import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App" style={{position:"relative"}} >
      <Box position="sticky" top="0" left="0" zIndex="3" >
      <Navbar/>
      </Box>
      <AllRoutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
