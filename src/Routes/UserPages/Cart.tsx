import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IgetProductData } from "../../Redux/AppReducer/action";
import {
  getAddressData,
  getCartProduct,
} from "../../Redux/AppReducer/action_creaters";
import { useDispatch } from "react-redux";
import Cartcard from "../../Components/CartPage/Cartcard";
import {
  IaddressData,
  Icart_wishlistData,
} from "../../Redux/AppReducer/reducer";
import { postAddressData } from "../../Redux/AppReducer/action_creaters";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartData: Icart_wishlistData[] = useSelector(
    (state: any) => state.AppReducer.cartData
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
  const [count, setCount] = useState(0);
  // const [totalMRP, setTotalMRP] = useState(0);
  // const [subtotalprice, setSubtotalprice] = useState(0);
  interface IamountProp {
    totalMRP: number,
    subtotalPrice: number
  }

  const [totalMRP, setTotalMRP] = useState<number>(0);
  const [subtotalprice, setSubtotalprice] = useState<number>(0);
  const amounthandle = () => {
    var n = cartData.length;
    let MRP = 0;
    let price = 0;
    if (n !== 0) {
      for (var i = 0; i < n; i++) {
        MRP += Number(cartData[i].mrp)
        price += Number(cartData[i].price)
      }
      setTotalMRP(MRP);
      setSubtotalprice(price);

      // localStorage.setItem("totalMRP",String(MRP));
      // localStorage.setItem("subtotal",String(price));
    }
  }
  useEffect(() => {
    const payload = {
      dispatch,
    };
    getCartProduct(payload).then((res) => amounthandle())
    // amounthandle()
  }, [cartData.length])
  // const amountObj:IamountProp=JSON.parse(localStorage.getItem("amountSummary"));
  // var totalMRP=localStorage.getItem("totalMRP");
  // var subtotalprice=localStorage.getItem("subtotalPrice");

  var discount = totalMRP - subtotalprice;
  useEffect(() => {
    const payload = {
      dispatch,
    };
    getCartProduct(payload).then((res) => amounthandle());
    getAddressData(payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // if (cartData.length > 0) {
    //   amounthandle();
    // }
  }, []);
  const addressData: IaddressData[] = useSelector(
    (state: any) => state.AppReducer.addressData
  );
  // console.log(cartData);
  // console.log(addressData);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let addData = {
      pin_code: pincode,
      city: city,
      state: state,
      flat_street_name: flate,
      area_locality: area,
      landmark: landmark,
      address_as: value,
      name: userName,
      number: number,
    };
    let payload = {
      addData: addData,
      dispatch,
    };

    postAddressData(payload)
      .then((res) => navigate("/PaymentPage"))
      .catch((err) => alert("fill wright address"));
  };
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const gotopayment = () => {
    navigate("/PaymentPage");
  };

  if (cartData.length > 0) {
    return (
      <>
        <Flex 
        // w="60%"
        w={{lg:"70%", md:"90%",sm:"100%"}}
        // wrap={"wrap"}
         m="auto" direction="column">
          <Box
            // w="100%"
            w={{lg:"98%", md:"80%",sm:"90%", base:"98%"}}
            m={"auto"}
            
            // border={"1px solid black"}
            textAlign="left"
            fontSize="15px"
            p="39px 0 0"
            fontWeight="bold"
          >
            My Bag {cartData.length}{" "}
            <Box fontWeight="500" as="span">
              {cartData.length === 1 ? " item" : " item(s)"}
            </Box>{" "}
          </Box>
          <Box>
            <Flex justify={"center"} p="35px 0 100px"  wrap={{lg:"nowrap",md:"wrap",sm:"wrap", base:"wrap"}}  >
              <Flex direction="column" justify={{lg:"initial",md:"center",sm:"center",base:"center"}} m="15px"
              //  w="60%"
              w={{lg:"50%",md:"80%", sm:"90%",base:"100%"}}
                >
                <Flex
                  h="50px"
                  bg="rgb(252, 255, 238)"
                  fontSize="12px"
                  align="center"
                >
                  {" "}
                  <Image
                    ml="12px"
                    h="12px"
                    w="19px"
                    src="https://images.bewakoof.com/web/Red-truck.png"
                  />{" "}
                  <Box ml="15px">Yay! You get FREE delivery on this order</Box>
                </Flex>
                <Flex direction="column">
                  {cartData.length > 0 &&
                    cartData?.map((item) => {
                      return <Cartcard key={item.id} {...item} />;
                    })}
                </Flex>
              </Flex>
              <Box 
              // w="40%"
              w={{lg:"50%",md:"80%", sm:"90%",base:"100%"}}
               position={"relative"} m="15px" >
                <Box position={"sticky"} top="52px">
                  <Flex
                    bg="#FDD835"
                    align="center"
                    m="0 0 15px"
                    p="0 18px 0 15px"
                    borderRadius="5px"
                    fontSize="14px"
                    h="50px"
                    textAlign="left"
                  >
                    <Box as="p">
                      Save extra{" "}
                      <Box as="span" fontWeight="bold">
                        ₹130
                      </Box>{" "}
                      with TriBe
                    </Box>
                  </Flex>
                  <Box
                    m=" 0 0 15px"
                    p="5px 15px"
                    borderRadius="4px"
                    border="1px solid rgb(234, 234, 234)"
                  >
                    <Box fontSize="14px" textAlign="left">
                      Whistles! Get extra 10% cashback on all prepaid orders
                      above Rs.499 Use Code - PREP10.
                    </Box>
                  </Box>
                  <Box p="6px" border="1px solid #eaeaea" fontSize="12px">
                    <Flex
                      borderRadius="5px"
                      backgroundColor="rgba(66,162,161,.1)"
                      p="10px"
                      align="center"
                      justify="space-between"
                    >
                      {" "}
                      <Box as="span" textAlign={"left"} color="#42A2A2" fontSize="12px">
                        {" "}
                        Have a Coupon / Referral / Gift Card ?
                      </Box>
                      <Flex color="#42A2A2" ml={"10px"} align="center" fontWeight="bold">
                        Redeem{" "}
                        <Image
                          ml="6px"
                          w="12px"
                          h="12px"
                          src="https://images.bewakoof.com/web/coupon-redeem-arrow-1634641878.png"
                        />
                      </Flex>
                    </Flex>{" "}
                  </Box>
                  <Box border="1px solid #eaeaea">
                    <Box
                      p="13px 20px"
                      bg="#0000000A"
                      fontSize="11px"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      PRICE SUMMARY
                    </Box>
                    <Box p="15px 20px 0px" fontSize={"12px"}>
                      <Flex align="center" justify="space-between" pb="10px">
                        <Box as="p">Total MRP (Incl. of Taxes)</Box>
                        <Box as="p">₹ {totalMRP}</Box>
                      </Flex>
                      <Flex align="center" justify="space-between" pb="10px">
                        <Box as="p">Shipping Charges</Box>
                        <Box as="p" color="#1D8802">
                          FREE
                        </Box>
                      </Flex>
                      <Flex align="center" justify="space-between" pb="10px">
                        <Box as="p">Bag Discount</Box>
                        <Box as="p">-₹ {discount}</Box>
                      </Flex>
                      <Flex align="center" justify="space-between" pb="10px">
                        <Box as="p">Subtotal</Box>
                        <Box as="p">₹ {subtotalprice}</Box>
                      </Flex>
                      <Box
                        p="6px 10px"
                        m="5px 0px 0px"
                        bg="#1D88021A"
                        textAlign="left"
                        borderRadius="14px"
                        fontSize="12px"
                        color="#1D8802"
                      >
                        You are saving ₹ {discount} on this order
                      </Box>
                      <Flex
                        justify="space-between"
                        align="center"
                        
                        m="40px -15px 0px -20px"
                        borderTop="1px solid #eaeaea"
                        
                        p="10px"
                      >
                        <Box  >
                          <Box as="span">Total</Box>
                          <Box as="p" fontSize={"16px"}>
                            ₹ {subtotalprice}
                          </Box>
                        </Box>
                        <Box w="60%" >
                          {" "}
                          {addressData.length === 0 ? (
                            <Box>
                              {" "}
                              <Button
                                w="280px"
                                color="white"
                                p="15px"
                                bg="#42A2A2"
                                fontSize={"16px"}
                                borderRadius="5px"
                                onClick={onOpen}
                                _hover={{ background: "#42B2A9" }}
                              >
                                ADD ADDRESS
                              </Button>
                              <Modal
                                onClose={onClose}
                                isOpen={isOpen}
                                isCentered
                              >
                                <ModalOverlay />
                                <ModalContent height="90%">
                                  <form onSubmit={handleSubmit}>
                                    <ModalHeader>Add New Address</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                      <FormControl id="userName" isRequired>
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
                                      <FormControl id="number" isRequired>
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
                                      <FormControl id="Pincode" isRequired>
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
                                      <FormControl id="City" isRequired>
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
                                      <FormControl id="State" isRequired>
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
                                      <FormControl id="userName" isRequired>
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
                                      <FormControl id="Area" isRequired>
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
                                      <FormControl id="landmark" isRequired>
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
                                      >
                                        <Stack direction="row">
                                          <Radio value="Home">Home</Radio>
                                          <Radio value="Office">Office</Radio>
                                          <Radio value="Other">Other</Radio>
                                        </Stack>
                                      </RadioGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                      <input
                                        style={{
                                          color: "white",
                                          padding: "15px",
                                          background: "#42A2A2",
                                          fontSize: "16px",
                                          borderRadius: "5px",
                                        }}
                                        // _hover={{ background: "#42B2A9" }}
                                        type="submit"
                                        value="SAVE ADDRESS"
                                      />
                                      <Spacer />{" "}
                                      <Button onClick={onClose}>CANCEL</Button>
                                    </ModalFooter>
                                  </form>
                                </ModalContent>
                              </Modal>
                            </Box>
                          ) : (
                            <Button
                              // w="280px"
                              w="100%"
                              color="white"
                              p="15px"
                              bg="#42A2A2"
                              fontSize={"16px"}
                              borderRadius="5px"
                              onClick={gotopayment}
                              _hover={{ background: "#42B2A2" }}
                            >
                              CONTINUE{" "}
                            </Button>
                          )}
                        </Box>
                        {/* <Button
                        w="280px"
                        color="white"
                        p="15px"
                        bg="#42A2A2"
                        fontSize={"16px"}
                        borderRadius="5px"
                      >
                        ADD ADDRESS
                      </Button> */}
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex w="100%" h="68vh" direction="column">
          <Center>
            <Flex direction="column" justify="center" align="center">
              <Image
                w="35%"
                src="https://images.bewakoof.com/web/group-3x-1509961969.png"
              />
              <Box>Your Cart is Empty!</Box>
              <Button
                border="2px solid #51cccc"
                m="20px 0"
                p="10px"
                borderRadius="5px"
                bg="white"
                color="#51cccc"
                cursor="pointer"
              >
                <Link to="/">Continue Shopping</Link>
              </Button>
            </Flex>
          </Center>
          <hr
            style={{ width: "30%", margin: "18px auto", textAlign: "center" }}
          />
          <Flex
          // border={"1px solid black"}
            m="35px 10"
            direction="column"
            justify="center"
            align={"center"}
          >
            <Box opacity=".6" color="rgba(0,0,0,.8)">
              You could try one of these categories:
            </Box>
            <Box>
              <TableContainer  mt="20px" color="#51cccc">
                <Table variant="unstyled">
                  <Thead>
                    <Tr p="5px 50px">
                      <Th p="5px 50px" color="black">
                        Men
                      </Th>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Topwear
                      </Td>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Bottomwear
                      </Td>
                    </Tr>
                    <Tr p="5px 50px">
                      <Th p="5px 50px 15px 50px"></Th>
                      <Td p="5px 50px 15px 50px" textDecoration="lightcyan">
                        Popular
                      </Td>
                      <Td p="5px 50px 15px 50px" textDecoration="lightcyan">
                        Winterwear
                      </Td>
                    </Tr>
                    <Tr p="5px 50px">
                      <Th p="5px 50px" color="black">
                        Women
                      </Th>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Topwear
                      </Td>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Bottomwear
                      </Td>
                    </Tr>
                    <Tr p="5px 50px">
                      <Th p="5px 50px"></Th>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Popular
                      </Td>
                      <Td p="5px 50px" textDecoration="lightcyan">
                        Winterwear
                      </Td>
                    </Tr>
                  </Thead>
                  {/* <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot> */}
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Flex>
        <Footer />
      </>
    );
  }
};

export default Cart;
