import React from 'react'
import {
  Box,
  Button,
  calc,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/AuthReducer/action_creaters';


const getData=()=>{
  return fetch("http://localhost:3006/users")
  .then(res=>
      res.json()
  )
}
const UserLogin = () => {
  const initData={
    email:"",
    password:""
  }
  const [loginData,setLoginData]=useState(initData)
 
  const navigate=useNavigate()
  const dispatch=useDispatch();
 
  const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    const {name,value}=e.target;
    setLoginData({...loginData,[name]:value})
  }

  const handleSubmit:React.FormEventHandler<HTMLFormElement>=(e)=>{
    e.preventDefault()
    const payload={
      email:loginData.email,
      password:loginData.password,
      dispatch
    }
    userLogin(payload).then((res)=>navigate("/",{replace:true}))
    


  }
// const authenticate=()=>{
//   {data.map((item)=>{
//     if(item.email===loginData.email && item.password===loginData.password){
//       return dispatch(loginSuccess(item.username))
      
//     }
     
//   })}
// }



  return (
    <Box backgroundColor="#fff4c4" h="94.5vh" w="100%"  >
      {/* <Navbar /> */}
      <Box backgroundColor="#fff4c4" >
        <Flex w={{lg:"93.5%",md:"90%",sm:"90%",base:"90%"}} wrap={{lg:"nowrap",md:"wrap",sm:"wrap",base:"wrap"}} m="auto" 
        justifyContent="center" >
          <Flex
            direction="column"
            justify="space-between"
            pb="30px"
            align="center"
            // w="50%"
          // border={"1px solid black"}
          display={{md:"none", sm:"none",base:"none",lg:"unset"}}
            height="calc(100vh - 79px)"
            backgroundImage=" linear-gradient(0deg, rgb(255, 244, 196), rgb(255, 255, 255))"
          >
            <Box m="6% 0px 0px 5%" w="100%">
              <Box
                fontSize="30px"
                pl="33px"
                textAlign="left"
                fontWeight="bold"
                as="h2"
              >
                Welcome to the world of Bewakoof!
              </Box>
            </Box>
            <Box>
              <Image
                w="769px"
                verticalAlign="baseline"
                src="https://images.bewakoof.com/web/group-19-1617704502.png"
              />
            </Box>
          </Flex>
          <Box bgColor="#FFFFFF"
           w={{lg:"50%",md:"90%",sm:"90%",base:"90%" }}
            >
            <Box mt="130px">
              <Text mb="22px" fontWeight="bold" fontSize="24px">
                Log in / Sign up
              </Text>
              <Text
                mb="70px"
                fontWeight="medium"
                fontSize="18px"
                color="#A0A0A0"
              >
                for Latest trends, exciting offers and everything Bewakoof!
              </Text>
            </Box>
            <FormControl>
              <form onSubmit={handleSubmit} >

              
              <Input
                m="20px 0"
                focusBorderColor="#fff4c4"
                h="60px"
                // w="522px"
                w="80%"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />

              <Input
                focusBorderColor="#fff4c4"
                h="60px"
                w="80%"
                // w="522px"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="Enter Your Password"
              />

              <Input
                m="20px 0"
                h="60px"
                w="80%"
                // w="522px"
                type="submit"
                bg="#42A2A2"
                fontSize="20px"
                fontWeight="medium"
                value="CONTINUE"
                color="#ffffff"
                _hover={{ background: "#349393", cursor: "pointer" }}
              />
              </form>
              <Box position="relative" 
              // w="580px"
              w="80%"
               m=" 20px auto">
                <hr />{" "}
                <Box
                  position="relative"
                  bottom="12px"
                  p="10px"
                  as="span"
                  // class="socialHeading"
                  bg="white"
                >
                  OR
                </Box>
              </Box>
            </FormControl>
            <Box
            //  w="522px"
              // m="auto"
              >
              <Link to="/UserSignUp" >
              <Button
                mb="25px"
                bg="#fff4c4"
                color="#333333"
                _hover={{ background: "#42A2A2", color: "white" }}
                // w="522px"
                w="80%"
                h="60px"
                colorScheme="teal"
                size="lg"
                >
                SIGN UP
              </Button>
                </Link>
              <Box fontSize="12px" as="p"  w="80%" m={"5px auto 25px"} >
                By creating an account or logging in, you agree with Bewakoof's{" "}
                <Box as="span" fontWeight="bold" color="#42A2A2">
                  Terms and Conditions{" "}
                </Box>
                and{" "}
                <Box as="span" fontWeight="bold" color="#42A2A2">
                  Privacy Policy
                </Box>
                .
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
  }


export default UserLogin