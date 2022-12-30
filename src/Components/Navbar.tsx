import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, extendTheme, useDisclosure } from '@chakra-ui/react'

import {
  Box,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import loginIcon from "./user.png"
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/AppReducer/action_creaters";
import { useDispatch, useSelector } from "react-redux";
import { IproductData } from "../Redux/AppReducer/reducer";

// console.log(getAllProducts)
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.RefObject<any> = React.useRef()
  const AllProductData: IproductData[] = useSelector(
    (state: any) => state.AppReducer.AllProductData
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const token: string = useSelector((state: any) => state.AuthReducer.token);
  const username: string = useSelector((state: any) => state.AuthReducer.username);
  const isAuth: boolean = useSelector((state: any) => state.AuthReducer.isAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // var payload = {
  //   limit: 40,
  //   category: "T-Shirt",
  //   gender: gender,
  //   page: 1,
  //   dispatch,
  // };

  // getAllProducts(payload);
  // console.log(AllProductData);
  const handleClick = (gender: string) => {
    //    var payload = {
    //     params:{
    //       limit: 40,
    //       category: "T-Shirt",
    //       gender: gender,
    //       page: 1,
    //       sort:""
    //     },
    //   dispatch,
    // };
    // if (gender ) {
    //   let params: any= {};

    //   gender && (params.gender=gender);
    //   setSearchParams(params);

    // }

    // getAllProducts(payload);
    // console.log(AllProductData);

    localStorage.setItem("gender", gender);


    navigate("/ProductsPage");
  };

  const handleLogOut = () => {
    const empty: string = "";
    localStorage.setItem("token", empty);
    localStorage.setItem("UName", empty);
    navigate("/")
    window.location.reload();
  }
  // const breakpoints = {
  //   sm: '320px',
  //   md: '768px',
  //   lg: '960px',
  //   xl: '1200px',
  //   '2xl': '1536px',
  // }

  // const theme = extendTheme({ breakpoints })
  return (
    <>
      <Box bg={"white"} display={{ base: "none", sm: "none", md: "none", lg: "unset" }} >

        <Box h="52px" bg={"white"} borderBottom="1px solid rgba(0,0,0,.2)" >
          {/* minWidth="max-content" */}
          <Flex
            // w="63%"
            h="52px"
            direction="row"
            m="auto"
            // border={"1px solid green"}
            justify="center"
            alignItems="center"
            gap="2"
          >
            {/* logo below */}
            <Box p="2"
            //  w="195px"
            // border={"1px solid lightgreen"}
            >
              <Link to="/">
                <Image
                  w="147px"
                  h="20px"
                  src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo-christmas-v1.svg"
                />
              </Link>
            </Box>

            {/* men,women and mobile covers links and menubar start below */}
            <Box display="flex" w={"60%"} >
              <Box pl="0px"
                //  w="487.5px"
                w={"80%"}
                h="51px"
              // border={"1px solid blue"}
              >
                <Flex fontSize="13px" h="51px" align="center" justify={"space-between"}

                >
                  <Box
                    w="132px"
                    // border={"1px solid red"}
                    display={"flex"} alignItems="center" >


                    <Box
                      // border={"1px solid maroon"}
                      // as="span"
                      // display="inline-block"
                      p="13px 11px"
                      color="000000E6"
                      fontWeight="medium"
                      letterSpacing="1PX"
                      _hover={{
                        borderBottom: "4px solid #FDD835",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClick("Men")}
                    >
                      MEN
                      {/* <Link to="/ProductsPage">MEN</Link> */}
                    </Box>
                    <Box
                      // border={"1px solid maroon"}
                      // as="span"
                      // display="inline-block"
                      p="13px 11px"
                      color="000000E6"
                      fontWeight="medium"
                      letterSpacing="1PX"
                      _hover={{
                        borderBottom: "4px solid #FDD835",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClick("Women")}
                    >
                      WOMEN
                      {/* <Link to="/ProductsPage">WOMEN</Link> */}
                    </Box>
                  </Box>
                  <Box fontSize="12px">
                    <FormControl m="0">
                      {" "}
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SearchIcon />}
                        />
                        <Input
                          m="0"
                          variant="filled"
                          placeholder="Search product here"
                          focusBorderColor="grey"
                          _focus={{ border: ".5px solid grey" }}
                        // w="301px"
                        // w="100%"
                        />
                      </InputGroup>
                    </FormControl>
                  </Box>
                </Flex>
              </Box>

              {/* search section start below */}
              <Box
                //  w="487.5px" 
                w="240px"
                //  border={"1px solid orange"}
                display="flex"
                alignItems="center">
                {/* <Box fontSize="12px">
              <FormControl m="0">
                {" "}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon />}
                  />
                  <Input
                    m="0"
                    variant="filled"
                    placeholder="Search product here"
                    focusBorderColor="grey"
                    _focus={{ border: ".5px solid grey" }}
                    w="301px"
                  />
                </InputGroup>
              </FormControl>
            </Box> */}
                <Box fontSize="14px" display="flex"
                  // border={"1px solid red"}
                  alignItems="center">
                  <Box
                    display="inline-block"
                    w="1px"
                    h="20px"
                    background="#000"
                    opacity=".3"
                    m="16px 15px 14px 15px"
                  ></Box>
                  {token ? (
                    <Menu>
                      <MenuButton as={Button} >
                        <Image w="23px" src={loginIcon} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem bg="#E2E8F0" borderBottom={"1.5px solid white"} >Hi, <Box as="em"> &nbsp; {username}</Box></MenuItem>
                        {/* <MenuItem>My Orders</MenuItem> */}
                        {/* <MenuItem>Wishlist</MenuItem> */}
                        {/* <MenuItem>My Profile</MenuItem> */}
                        <MenuItem _hover={{  cursor: "pointer", background: "#E2E8F0" }} onClick={handleLogOut} >Log Out</MenuItem>
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link style={{ fontSize: "14px" }} to="/UserLogin">
                      Login
                    </Link>
                  )}

                  <Link
                    style={{ fontSize: "14px", margin: "0 0 0 15px" }}
                    to="/WishListPage"
                  >
                    <Image
                      src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                      alt="cart"
                      w="20px"
                    />
                  </Link>
                  <Link
                    style={{ fontSize: "14px", margin: "0 15px", display: "flex" }}
                    to="/CartPage"
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/3034/3034002.png"
                      alt="cart"
                      w="20px"
                    />
                    <Box as="span" fontWeight="bold">
                      {/* {item} */}
                    </Box>
                  </Link>
                  <Image
                    src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                    alt="cart"
                    w="30px"
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bg={"white"} p="10px 0" boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" display={{ lg: "none" }} >
        <Flex justify={"space-between"} align="center" >


          <Box display={"flex"} alignItems={"center"} >
            <Box   >
              <Button _hover={{ background: "none" }} ref={btnRef} bg="none" onClick={onOpen}>
                <Image src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" />

              </Button>
              <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader><Image w="70%" src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo-christmas-v1.svg" alt="" /></DrawerHeader>

                  <DrawerBody>
                    {token ? <Box bg="#E2E8F0" fontWeight={"bold"} p="10px" >Hi, &nbsp; <Box as="em" >{username}</Box> </Box> : <Link to="/UserLogin" >
                      <Box _hover={{ cursor: "pointer", background: "#E2E8F0" }} p="10px" fontWeight="bold" bg={"#eaeaea"} >Login/SignUp</Box></Link>}


                    <Box lineHeight={"2.5"} p="10px" color={"#E2E8F0"} fontWeight="bold" >
                      SHOP IN
                      <Box _hover={{ cursor: "pointer", background: "#E2E8F0" }} color={"black"} onClick={() => handleClick("Men")} fontWeight="bold" >Mens</Box>
                      <Box _hover={{ cursor: "pointer", background: "#E2E8F0" }} onClick={() => handleClick("Women")} color={"black"} fontWeight="bold" >Womens</Box>
                    </Box>
                  </DrawerBody>

                  <DrawerFooter fontWeight="bold" display={token ? "unset" : "none"} >
                    <Box _hover={{ cursor: "pointer", background: "#E2E8F0" }} p="10px" onClick={handleLogOut} >Logout</Box>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Box>
            <Image w={"50px"} src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes-christmas.svg" />
          </Box>
          <Flex m={"0 15px"} justify="center" align={"center"} >
            <Box  >
              <Image m={"0 10px"} src="https://images.bewakoof.com/web/ic-web-head-search.svg" />

            </Box>
            <Link style={{ margin: "0 6px 0 0" }} to={"/WishlistPage"} ><Image src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg" /></Link>
            <Link style={{ margin: "0 6px" }} to={"/CartPage"} ><Image src="https://images.bewakoof.com/web/ic-web-head-cart.svg" /></Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
// https://images.bewakoof.com/web/ic-web-home-tab-selected-v1-christmas.svg