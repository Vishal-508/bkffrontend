import { Box, Button, Center, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";
import { Icart_wishlistData } from "../../Redux/AppReducer/reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWishlistProduct } from "../../Redux/AppReducer/action_creaters";
import Wishlistcard from "../../Components/WishListPage/Wishlistcard";
const WishList = () => {
  const dispatch = useDispatch();
  const [count,setCount]=useState(0);
  const wishlistData: Icart_wishlistData[] = useSelector(
    (state: any) => state.AppReducer.wishlistData
  );
  useEffect(() => {
    const payload = {
      dispatch,
    };
    getWishlistProduct(payload);
  }, []);
  

  if (wishlistData.length > 0) {
    return (
      <>
        <Box w="70%"  m={"0px auto 20px"} border="1ps solid black" >
          <Box mt="20px" mb="10px" textAlign={"left"} fontWeight="bold" letterSpacing={2} >WISHLIST</Box>
          <Box>
          <SimpleGrid columns={{lg:4,md:3,sm:2,base:1}} gap="25px">
            {wishlistData.length > 0 &&
              wishlistData?.map((item) => {
                return <Wishlistcard  key={item.id} {...item} />;
              })}
          </SimpleGrid></Box>
        </Box>
        <Footer/>
      </>
    );
  }
  return (
    <>
      <Flex w="100%" h="68vh" direction="column">
        <Center>
          <Flex direction="column" justify="center" align="center">
            <Image
              w="35%"
              src="https://images.bewakoof.com/web/group-3x-1509961969.png"
            />
            <Box>Your WishList is Empty!</Box>
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
          style={{ width: "430px", margin: "18px auto", textAlign: "center" }}
        />
        <Flex m="35px 10" direction="column" justify="center" align={"center"}>
          <Box opacity=".6" color="rgba(0,0,0,.8)">
            You could try one of these categories:
          </Box>
          <Box>
            <TableContainer mt="20px" color="#51cccc">
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
};

export default WishList;
