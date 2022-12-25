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

  const [totalMRP, setTotalMRP] = useState(0);
  const [subtotalprice, setSubtotalprice] = useState(0);
  var discount = totalMRP - subtotalprice;
  const amounthandle = () => {
    var n = cartData.length;
    let MRP = 0;
    let price = 0;
    for (var i = 0; i < n; i++) {
      MRP += Number(cartData[i].mrp);
      price += Number(cartData[i].price);
    }
    setTotalMRP(MRP);
    setSubtotalprice(price);
  };
  useEffect(() => {
    const payload = {
      dispatch,
    };
    getCartProduct(payload);
    getAddressData(payload);
    amounthandle();
  }, []);
  const placed = () => {
    navigate("/OrderPlaced");
  };
  const handleDebitDetails = () => {
    


  };
  return (
    <Box p="35px 0 50px" textAlign={"left"}>
      <Flex w="55%" m="auto">
        <Box w="60%" borderRight={"1px solid #b5b5b5"}>
          <Box
            fontSize={"16px"}
            color="#333333"
            m="0 0 16px"
            fontWeight={"bold"}
            textAlign="left"
            as="p"
          >
            Choose your payment method
          </Box>
          <Box border={"1px solid #b5b5b5"} h="90%" m="0 12px 0 0">
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
                    <Flex align={"center"} p="0">
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
                        required={true}
                        variant="flushed"
                        placeholder="Card Number"
                        maxLength={16}
                        type="number"
                      />
                      <Flex justify="space-between" mb="18px">
                        <Input
                          required={true}
                          w="50%"
                          variant="flushed"
                          placeholder="Valid Through(MM/YY)"
                          maxLength={5}
                          type="number"
                        />
                        <Input
                          required={true}
                          w="30%"
                          variant="flushed"
                          placeholder="CVV"
                          maxLength={3}
                          type="password"
                        />
                      </Flex>
                      <Input
                        required={true}
                        mb="18px"
                        variant="flushed"
                        placeholder="Name On Card"

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
                      <Input
                        w="100%"
                        color="white"
                        p="15px"
                        bg="#42A2A2"
                        textAlign={"center"}
                        fontSize={"14px"}
                        _hover={{ background: "#42B2A2" }}
                        borderRadius="5px"
                        cursor={"pointer"}
                        // disabled=
                        value={`Pay ₹ ${subtotalprice} `}
                      />
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
        <Box w="40%" pl="20px">
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
