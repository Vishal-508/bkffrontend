import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Icart_wishlistData } from "../../Redux/AppReducer/reducer";

const Itemslist = (props: Icart_wishlistData) => {
  const { display_image, name } = props;

  return (
    <Flex>
      <Box>
        <Image w="36px" src={`https://images.bewakoof.com/t640/${display_image}`} />
      </Box>
      <Flex direction={"column"} ml="1rem"  >
        {" "}
        <Box as="p"  fontSize={"12px"} color="#303030">{name}</Box>
        <Box as="p" color={"#737373"} fontSize={"12px"}>Estimated delivery by <Box as="span" fontWeight={"bold"} color={"#00B852"}></Box></Box>
        
      </Flex>
    </Flex>
  );
};

export default Itemslist;
