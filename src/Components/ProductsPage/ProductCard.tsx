import React from 'react'
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
// import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  IproductData } from '../../Redux/AppReducer/reducer';

const ProductCard = (props:IproductData) => {
  const navigate=useNavigate();
    const {
      _id,
      id,
        all_offer_price,
        description ,
        category,
        color ,
        display_image,
        flip_image ,
        product_sizes,
        member_price,
        mrp,
        name,
        offer_type ,
        price,
        url,
        brand ,
        status,
        in_stock,
        gender,
        limited_edition,
        category_info ,
        offer,
        average_rating ,
        member_discount,
        product_discount,
        manufacturer_brand}=props

      const handlePage=()=>{
        let id=_id;
        navigate(`/SingleProductPage/${id}`) 

      }
       
    return (
        <Box  >
          {/* <Link to={`/SingleProductPage/${}`}> */}
            <Box cursor="pointer" onClick={handlePage} 
            // w="282.48px" h="450.84px"
             key={id} textAlign="left" >
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
                  <Text fontSize="11px" fontWeight="bold" p="3px 8px" bg="#F7F7F7">
                    ₹{member_price} 
                    {/* {tribe_text} */}
                    &nbsp; For TriBe Members
                  </Text>
                </Flex>
              </Box>
            </Box>
          {/* </Link> */}
        </Box>
      );
}

export default ProductCard