import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Icart_wishlistData } from "../../Redux/AppReducer/reducer";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
  DeleteWishlistProduct,
  getWishlistProduct,
  postCartProduct,
} from "../../Redux/AppReducer/action_creaters";
const Wishlistcard = (props: Icart_wishlistData) => {
    const [count,setCount]=useState(0);
  const dispatch = useDispatch();
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

  const handleDelete = () => {
    const payload = {
      _id: _id,
      dispatch,
    };
    const load = {
      dispatch,
    };
    DeleteWishlistProduct(payload).then((res)=>getWishlistProduct(load));
    setCount((prev)=>prev+1);
    //   .then((res) => getWishlistProduct(load))
  };

  const moveToBag = () => {
    let data = {
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
    var payload={
        PCdata:data,
        dispatch
    }
    const load = {
        _id:_id,
        dispatch,
      };
      const oad = {
        dispatch,
      };
    postCartProduct(payload).then((res)=>DeleteWishlistProduct(load)).then((res)=>getWishlistProduct(oad));
    setCount(prev=>(prev+1))
  };

  useEffect(() => {
    const load = {
      dispatch,
    };
    getWishlistProduct(load);
  }, [setCount]);

  return (
    <Box position="relative">
      <Button
        position="absolute"
        borderRadius="50%"
        top="5px"
        right="15px"
        bg="lightgrey"
        opacity=".6"
        h="38px"
        w="25px"
        onClick={handleDelete}
      >
        <CloseIcon />
      </Button>
      <Box cursor="pointer" key={id} textAlign="left">
        <Image
          src={`https://images.bewakoof.com/t640/${display_image}`}
          alt={name}
        />
        <Box>
          <Text fontSize="12px" fontWeight="bold">
            {manufacturer_brand}
            {/* {_id} */}
          </Text>
          <Box fontSize="10px" color="#737373" mt="4px">
            {name}
          </Box>
          <Flex fontSize="14px" align="center">
            <Box fontWeight="bold" fontSize="16px">
              {" "}
              <Box as="span" fontSize="12px">
                ₹
              </Box>{" "}
              {price}
            </Box>
            <Box textDecorationLine="line-through" fontSize="12px" pl="5px">
              ₹{mrp}
            </Box>
          </Flex>
          <Flex>
            <Text
              mt="5px"
              w={"100%"}
              fontSize="11px"
              fontWeight="bold"
              p="3px 8px"
              bg="#F7F7F7"
            >
              ₹{member_price}
              {/* {tribe_text} */}
              &nbsp; For TriBe Members
            </Text>
          </Flex>
          <Button
            mt="20px"
            w="100%"
            fontWeight="light"
            border={"1px solid #adadad"}
            borderRadius="none"
            bg="white"
            onClick={moveToBag}
          >
            MOVE TO BAG
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Wishlistcard;
