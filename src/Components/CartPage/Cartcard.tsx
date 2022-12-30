import React, { useState } from "react";
import {
  border,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Icart_wishlistData } from "../../Redux/AppReducer/reducer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  DeleteCartProduct,
  getCartProduct,
  postWishlistProduct,
} from "../../Redux/AppReducer/action_creaters";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Cartcard = (props: Icart_wishlistData) => {

  const cartData: Icart_wishlistData[] = useSelector(
    (state: any) => state.AppReducer.cartData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    _id,
    Pid,
    id,
    all_offer_price,
    category,
    display_image,
    member_price,
    mrp,
    name,
    offer_type,
    product_sizes,
    price,
    gender,
    quantity,
    offer,
    member_discount,
    product_discount,
    manufacturer_brand,
    userId,
  } = props;

  // const amounthandle=()=>{
  //   var n=cartData.length;
  //   let MRP=0;
  //   let price=0;
  //   if(n!==0){
  //     for(var i=0;i<n;i++){
  //     MRP+=Number(cartData[i].mrp)
  //     price+=Number(cartData[i].price)
  //   }
    
  //   localStorage.setItem("totalMRP",String(MRP));
  //   localStorage.setItem("subtotal",String(price));
  // }
  // }
 


// amounthandle()
  const handleDelete = () => {
    const payload = {
      _id: _id,
      dispatch,
    };
    const load = {
      dispatch,
    };
  
    DeleteCartProduct(payload).then((res) => getCartProduct(load))
    // .then((res)=>amounthandle())
  };

  const handleMove = () => {
    let data: Icart_wishlistData = {
      Pid: Pid,
      id: id,
      all_offer_price: all_offer_price,
      category: category,
      display_image: display_image,
      member_price: member_price,
      mrp: mrp,
      name: name,
      offer_type: offer_type,
      product_sizes: product_sizes,
      price: price,
      gender: gender,
      quantity: quantity,
      offer: offer,
      member_discount: member_discount,
      product_discount: product_discount,
      manufacturer_brand: manufacturer_brand,
    };
    const payload={
        PCdata:data,
        dispatch
    }
    const load = {
        _id: _id,
        dispatch,
      };
      const oad = {
        dispatch,
      };
   
    postWishlistProduct(payload).then((res)=>DeleteCartProduct(load)).then((res) => getCartProduct(oad))
    // .then((res)=>amounthandle())
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box borderRadius="5px" border="1px solid rgba(0,0,0,.2)" m="10px 0">
      <Box p="0px 15px">
        <Flex p="20px 5px" justify="space-between">
          <Box textAlign={"left"}>
            <Box mb="8px" fontSize={"14px"} color="#000000B3">
              {name}
            </Box>
            <Box fontSize={"18px"} fontWeight="bold" color={"#333333"}>
              ₹{price}{" "}
              <Box
                ml="5px"
                color={"#9C9C9C"}
                textDecoration="line-through"
                fontSize={"14px"}
                fontWeight={"400"}
                as="span"
              >
                ₹{mrp}
              </Box>
            </Box>
            <Box fontSize={"14px"} color={"#1D8802"}>
              You saved ₹{Number(mrp - price)}!
            </Box>
            <Flex align={"center"}>
              <Box m="0 16px 0 0 " p="11px 0">
                <Button
                  fontSize={"12px"}
                  fontWeight="light"
                  border="1px solid #eaeaea"
                  size={"sm"}
                  p="5px 11px"
                  bg={"white"}
                  onClick={onOpen}
                >
                  SIZE:&nbsp;{" "}
                  <Box as="span" fontWeight={"bold"}>
                    {product_sizes}
                  </Box>{" "}
                  &nbsp;
                  <ChevronDownIcon />
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent top="20%" w="10%">
                    <ModalHeader
                      textAlign={"center"}
                      fontSize={"12px"}
                      color="#333333"
                    >
                      SIZE CHART
                    </ModalHeader>

                    <ModalBody
                      textAlign={"center"}
                      display={"flex"}
                      flexDirection="column"
                    >
                      <Box
                        p="8px 0"
                        _hover={{
                          background: "#eaeaea",
                          color: "#1D8802",
                          cursor: "pointer",
                        }}
                      >
                        S
                      </Box>
                      <Box
                        p="8px 0"
                        _hover={{
                          background: "#eaeaea",
                          color: "#1D8802",
                          cursor: "pointer",
                        }}
                      >
                        M
                      </Box>
                      <Box
                        p="8px 0"
                        _hover={{
                          background: "#eaeaea",
                          color: "#1D8802",
                          cursor: "pointer",
                        }}
                      >
                        L
                      </Box>
                      <Box
                        p="8px 0"
                        _hover={{
                          background: "#eaeaea",
                          color: "#1D8802",
                          cursor: "pointer",
                        }}
                      >
                        XL
                      </Box>
                      <Box
                        p="8px 0"
                        _hover={{
                          background: "#eaeaea",
                          color: "#1D8802",
                          cursor: "pointer",
                        }}
                      >
                        XXL
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
              {/* <Box m="0 16px 0 0 " p="9px 0" >
                <Button fontSize={"12px"} border="1px solid #eaeaea" size={"sm"}  p="5px 11px" bg={"white"} onClick={onOpen}>Qty: &nbsp;<Box as="span" fontWeight={"bold"}>{quantity}</Box>&nbsp; <ChevronDownIcon/></Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>QUANTITY</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody></ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box> */}
            </Flex>
          </Box>
          <Image
            borderRadius="5px"
            ml="8px"
            border="1px solid #eaeaea"
            w="104px"
            h="129.5px"
            src={`https://images.bewakoof.com/t1080/${display_image}`}
          />
        </Flex>
      </Box>
      <Flex fontSize="14px" color="#00000080">
        <Button
          borderTop="2px solid #eaeaea"
          borderRadius="none"
          borderRight="2px solid #eaeaea"
          bg="#fff"
          p="18px 0"
          w="40%"
          borderBottomLeftRadius={"5px"}
          onClick={handleDelete}
        >
          Remove
        </Button>
        <Button
          p="18px 0"
          bg="#fff"
          w="60%"
          borderRadius="none"
          borderTop="2px solid #eaeaea"
          onClick={handleMove}
          borderBottomRightRadius={"5px"}
        >
          Move to Wishlist
        </Button>
      </Flex>
    </Box>
  );
};

export default Cartcard;
