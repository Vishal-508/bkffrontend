import {  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody, Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  ModalCloseButton, useDisclosure, Input, Stack, RadioGroup, Radio, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { IaddressData } from '../../Redux/AppReducer/reducer';

const AddressPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addressData: IaddressData[] = useSelector(
    (state: any) => state.AppReducer.addressData
    );
    const [value, setValue] = React.useState("home");
    const [userName, setUserName] = useState("");
  const [number, setNumber] = useState<any>(0);
  const [pincode, setPincode] = useState<any>(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [flate, setFlate] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
    
    // function handleSubmit(): React.FormEventHandler<HTMLFormElement>{
    
    // }
  return (
    <Flex  m="20px 0" >
   
    <Flex p="20px" direction={"column"} w="26%" m="auto" justify={"center"} borderRadius="15px" boxShadow= "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"  >
        <Box fontWeight={"bold"} fontSize="18px" as="h2"  textAlign={"left"}>Edit Address</Box>
      <form >
        
      
          <FormControl mb="12px" id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={userName}
              onChange={(e) =>
                setUserName(e.target.value)
              }
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl mb="12px" id="number" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              value={number}
              onChange={(e) =>
                setNumber(e.target.value)
              }
              placeholder="+91- 9090908905"
              _placeholder={{ color: "gray.500" }}
              type="number"
            />
          </FormControl>
          <FormControl mb="12px" id="Pincode" isRequired>
            <FormLabel>PinCode</FormLabel>
            <Input
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value)
              }
              placeholder="Pincode/Postal Code/Zipcode"
              _placeholder={{ color: "gray.500" }}
              type="Number"
            />
          </FormControl>
          <FormControl mb="12px" id="City" isRequired>
            <FormLabel>City</FormLabel>
            <Input
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              placeholder="City"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl mb="12px" id="State" isRequired>
            <FormLabel>State</FormLabel>
            <Input
              value={state}
              onChange={(e) =>
                setState(e.target.value)
              }
              placeholder="State"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl mb="12px" id="userName" isRequired>
            <FormLabel>
              Flat no, Street name
            </FormLabel>
            <Input
              value={flate}
              onChange={(e) =>
                setFlate(e.target.value)
              }
              placeholder="flatNumber"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl mb="12px" id="Area" isRequired>
            <FormLabel>Area/Locality</FormLabel>
            <Input
              value={area}
              onChange={(e) =>
                setArea(e.target.value)
              }
              placeholder="Area/Locality"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl mb="12px" id="landmark" isRequired>
            <FormLabel>Landmark</FormLabel>
            <Input
              value={landmark}
              onChange={(e) =>
                setLandmark(e.target.value)
              }
              placeholder="landmark"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>

          <RadioGroup
            onChange={setValue}
            value={value}
            mb="12px"
          >
            <Stack direction="row">
              <Radio value="Home">Home</Radio>
              <Radio value="Office">Office</Radio>
              <Radio value="Other">Other</Radio>
            </Stack>
          </RadioGroup>
        
        
          <input
            style={{
              color: "white",
              padding: "15px",
              background: "#42A2A2",
              fontSize: "16px",
              borderRadius: "5px",
              width:"100%",
              margin:"15px 0 0 0"
            }}
            // _hover={{ background: "#42B2A9" }}
            type="submit"
            value="SAVE ADDRESS"
          />
          <Spacer />{" "}
          
        
      </form>
    </Flex>
  </Flex>
  )
}

export default AddressPage