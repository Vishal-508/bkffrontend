import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Image,
  TabPanel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Itemslist from "../../Components/PaymentPage/Itemslist";
import {
  getAddressData,
  getCartProduct,
} from "../../Redux/AppReducer/action_creaters";
import {
  IaddressData,
  Icart_wishlistData,
} from "../../Redux/AppReducer/reducer";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const addressData:IaddressData[]=useSelector((state:any)=>state.AppReducer.addressData);
  const addressData: IaddressData[] = useSelector(
    (state: any) => state.AppReducer.addressData
  );
  const cartData: Icart_wishlistData[] = useSelector(
    (state: any) => state.AppReducer.cartData
  );
  const [cardNumber, setCardNumber] = useState("");
  const [vaildity, setVaildity] = useState("");
  const [cvv, setCvv] = useState("");
  const [userName, setUserName] = useState("");


  const [totalMRP, setTotalMRP] = useState(0);
  const [subtotalprice, setSubtotalprice] = useState(0);
  var discount = totalMRP - subtotalprice;
  const amounthandle = () => {
    var n = cartData.length;
    let MRP = 0;
    let price = 0;
    if(n!==0){
      for(var i=0;i<n;i++){
      MRP+=Number(cartData[i].mrp)
      price+=Number(cartData[i].price)
    }
    setTotalMRP(MRP);
    setSubtotalprice(price);
    
    // localStorage.setItem("totalMRP",String(MRP));
    // localStorage.setItem("subtotal",String(price));
  }
  };
  useEffect(() => {
    const payload = {
      dispatch,
    };
    getCartProduct(payload).then((res)=>amounthandle());
    getAddressData(payload);
    
  }, []);
  const placed = () => {
    navigate("/OrderPlaced");
  };
useEffect(()=>{
  amounthandle()
},[cartData.length])




  const handleDebitDetails: React.FormEventHandler<HTMLFormElement>  = (e) => {
    e.preventDefault();
    navigate("/OrderPlaced");


  };



  return (
    <Box p="35px 0 50px" textAlign={"left"}  >
      <Flex w={{lg:"68%", md:"80%",sm:"90%"}} m="auto"  wrap={{lg:"nowrap",md:"wrap",sm:"wrap",base:"wrap"}} >
        <Box
        //  w="60%"
        // w={"50%"}
         borderRight={{lg:"1px solid #b5b5b5", md:"none",sm:"none", base:"none"}}>
          <Box
            fontSize={"16px"}
            color="#333333"
            // m="0 0 16px"
            m="0 0 16px 12px"
            fontWeight={"bold"}
            textAlign="left"
            as="p"
          >
            Choose your payment method
          </Box>
          <Box border={"1px solid #b5b5b5"} h="90%" 
          m="12px"
          >
            <Tabs display={"flex"} w="100%" h={"100%"}>
              <TabList
                w="45%"
                display={"flex"}
                flexDirection="column"
                bg={"#D6D6D611"}
              >
                <Tab
                  fontSize={"14px"}
                  _active={{ background: "" }}
                  p="20px 10px"
                >
                  {" "}
                  <Image
                    mr="5px"
                    w="24px"
                    src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg"
                  />{" "}
                  Debit/Credit Card
                </Tab>

                <Tab p="20px 10px" fontSize={"14px"}>
                  <Image
                    mr="5px"
                    w="24px"
                    src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
                  />{" "}
                  Cash On Delivery
                </Tab>
              </TabList>

              <TabPanels w="55%">
                <TabPanel p="0 15px">
                  <Box>
                    <Flex align={"center"} wrap="wrap" p="0">
                      <Image
                        w="43px"
                        m="20px 0"
                        src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"
                      />
                      <Image
                        w="14px"
                        m="20px 0px 20px 24px"
                        src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
                      />
                      <Image
                        w="53px"
                        m="20px 0 20px 24px"
                        src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
                      />
                      <Image
                        w="22px"
                        m="20px 0 20px 24px"
                        src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
                      />
                    </Flex>
                    <form onSubmit={handleDebitDetails}>
                      <Input
                        mb="18px"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(e.target.value)
                        }
                        isRequired
                        variant="flushed"
                        placeholder="Card Number"
                        type="number"
                        maxLength={16}
                      />
                      <Flex justify="space-between" mb="18px">
                        <Input
                            isRequired
                          w="50%"
                          value={vaildity}
                        onChange={(e) =>
                          setVaildity(e.target.value)
                        }
                          variant="flushed"
                          placeholder="Valid Through(MM/YY)"
                          maxLength={5}
                          type="number"
                        />
                        <Input
                            isRequired
                          w="30%"
                          value={cvv}
                        onChange={(e) =>
                          setCvv(e.target.value)
                        }
                          variant="flushed"
                          placeholder="CVV"
                          maxLength={3}
                          type="password"
                        />
                      </Flex>
                      <Input
                         isRequired
                        mb="18px"
                        variant="flushed"
                        value={userName}
                        onChange={(e) =>
                          setUserName(e.target.value)
                        }
                        placeholder="Name On Card"
                            type={"text"}
                      />
                      <Checkbox
                        m="20px 0 0"
                        color={"#525252"}
                        fontSize="14px"
                        fontWeight={"bold"}
                        defaultChecked
                      >
                        Save card details for later
                      </Checkbox>
                      <Box as="p" fontSize={"14px"} color="#737373" m="14px 0">
                        This transaction you make is totally secure. We don't
                        save your CVV number.
                      </Box>
                      <Button
                        w="100%"
                        color="white"
                        p="15px"
                        bg="#42A2A2"
                        textAlign={"center"}
                        fontSize={"14px"}
                        _hover={{ background: "#42B2A2" }}
                        borderRadius="5px"
                        mb="15px"
                        cursor={"pointer"}
                        type="submit"
                        // disabled=
                        // value={`Pay ₹ ${subtotalprice} `}
                      >{`Pay ₹ ${subtotalprice} `}</Button>
                    </form>
                  </Box>
                </TabPanel>
                <TabPanel p="15px">
                  <Box>
                    <Box as="p" m="0 0 16px" fontSize={"16px"} color="#737373">
                      Cash Colleciton Charges: Costs ₹ 35 Extra
                    </Box>
                    <Button
                      w="100%"
                      color="white"
                      p="15px"
                      bg="#42A2A2"
                      mb="15px"
                      fontSize={"14px"}
                      _hover={{ background: "#42B2A2" }}
                      borderRadius="5px"
                      cursor={"pointer"}
                      onClick={placed}
                    >
                      Pay ₹{35 + subtotalprice}
                    </Button>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
        <Box
        flexShrink={-2}
        //  w="40%" 
        // w="50%"
        w={{md:"90%",sm:"95%",base:"98%",lg:"50%"}}
         p="0 12px 12px"
         >
          {" "}
          <Link to="/AddressPage">
            <Box textAlign={"left"}>
              <Box as="span" color={"#0F0F0F"} fontSize={"12px"}>
                Delivering order to{" "}
                <Box fontWeight={"600"} as="span">
                  {addressData[0] && addressData[0].name.toUpperCase()}
                </Box>{" "}
              </Box>
              <Box color="#525252" fontSize={"14px"}>
                {addressData[0] && addressData[0].flat_street_name},{" "}
                {addressData[0] && addressData[0].area_locality}{" "}
                {addressData[0] && addressData[0].landmark},{" "}
                {addressData[0] && addressData[0].city},{" "}
                {addressData[0] && addressData[0].state} ...
              </Box>
            </Box>
          </Link>
          <hr style={{ margin: "14px 0", background: "#B5B5B5" }} />
          <Box>
            <Box>
              <Box
                as="p"
                fontSize={"14px"}
                fontWeight="600"
                color="#333333"
                m="0 0 16px"
              >
                You are paying for these items
              </Box>

              <Box>
                {cartData.length > 0 &&
                  cartData?.map((item) => (
                    <>
                      <Itemslist key={item.id} {...item} />
                      <hr style={{ margin: "14px 0", background: "#D6D6D6" }} />
                    </>
                  ))}{" "}
              </Box>
            </Box>
            {/* <hr style={{ margin: "14px 0", background: "#B5B5B5" }} /> */}
            <Box>
              <Box
                fontWeight={"bold"}
                fontSize="15px"
                color={"#333333"}
                m="20px 0 16px"
              ></Box>
              <Box>
                <Flex direction={"column"} fontSize="12px">
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
                </Flex>
              </Box>
              <hr style={{ margin: "14px 0", background: "#B5B5B5" }} />
              <Box m="16px 0 0">
                <Flex
                  mb="20px"
                  fontWeight={"bold"}
                  justifyContent="space-between"
                  fontSize="14px"
                >
                  <Box as="p">Final amount</Box>
                  <Box as="p">₹{subtotalprice}</Box>
                </Flex>
              </Box>
            </Box>
          </Box>{" "}
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentPage;
