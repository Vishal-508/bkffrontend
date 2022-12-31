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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../Redux/AuthReducer/action_creaters";

const UserSignUp = () => {
  


  var initstate={
    name:"",
    number:"",
    email:"",
    password:""
  }
interface Iinitstate{
  name:string,
  number:any,
  email:string,
  password:string
}

  const [formData,setFormData]=useState<Iinitstate>(initstate)
  const navigate =useNavigate()
  const dispatch=useDispatch();
  const handleForm:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    const {name,value}=e.target;
     setFormData({...formData,[name]:value})
  }
  // console.log(formData)
  const handleSubmit:React.FormEventHandler<HTMLFormElement>=(e)=>{
    e.preventDefault()
   const payload={
    email:formData.email,
    number:formData.number,
    name:formData.name,
    password:formData.password,
    dispatch
   }
    userSignup(payload);
    navigate("/UserLogin")





    // fetch("http://localhost:3006/users",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res=>res.json())
    // navigate("/login")
  }
  
  // function handleSubmit(e){
  //   e.preventDefault()
  //  axios.post("https://localhost:3006/users",formData)
  //   .then(res=>console.log(res))
  //   .catch((err)=>console.log(err))
  // }
  return (
    <Box backgroundColor="#fff4c4" h="94.5vh" w="100%">
      {/* <Navbar /> */}
      <Box backgroundColor="#fff4c4">
        <Flex w={{lg:"93.5%",md:"90%",sm:"90%",base:"90%"}} wrap={{lg:"nowrap",md:"wrap",sm:"wrap",base:"wrap"}} m="auto" 
        justifyContent="center">
          <Flex
            direction="column"
            justify="space-between"
            pb="30px"
            align="center"
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
          <Box bgColor="#FFFFFF"  w={{lg:"50%",md:"90%",sm:"90%",base:"90%" }}>
            <Box mt="130px">
              <Text mb="22px" fontWeight="bold" fontSize="24px">
                Sign up
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
            <FormControl >
            <form onSubmit={handleSubmit}>
            <Input
            id="name"
                m="20px 0"
                focusBorderColor="#fff4c4"
                h="60px"
                w="80%"
                type="text"
                onChange={handleForm}
                name="name"
                maxLength={25}
                value={formData.name}
                placeholder="Enter Your Full Name"
              />
              <Input
                id="number"
                focusBorderColor="#fff4c4"
                h="60px"
                w="80%"
                maxLength={10}
                type="number"
                onChange={handleForm}
                name="number"
                value={formData.number}
                placeholder="Enter Your Number"
              />
              <Input
              id="email"
                m="20px 0"
                focusBorderColor="#fff4c4"
                h="60px"
                w="80%"
                type="email"
                onChange={handleForm}
                name="email"
                value={formData.email}
                
                placeholder="Enter Your Email"
              />

              <Input
              id="password"
                focusBorderColor="#fff4c4"
                h="60px"
                w="80%"
                type="password"
                onChange={handleForm}
                name="password"
                maxLength={25}
                value={formData.password}
                placeholder="Enter Your Password"
              />

              <Input
                m="35px 0"
                h="60px"
                w="80%"
                type="submit"
                bg="#42A2A2"
                fontSize="20px"
                fontWeight="medium"
                value="CONTINUE"
                color="#ffffff"
                _hover={{ background: "#349393", cursor: "pointer" }}
              />
            </form>
              
            </FormControl>
            <Box w="80%" m="auto">
           
              <Box fontSize="12px" mb={"25px"} as="p">
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
  )
    }
  
// }

export default UserSignUp