import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
  Button,
  HStack,
  Spacer,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Icart_wishlistData,
  IproductData,
} from "../../Redux/AppReducer/reducer";
import { useDispatch } from "react-redux";
import {
  getSingleProduct,
  postCartProduct,
  postWishlistProduct,
} from "../../Redux/AppReducer/action_creaters";
import { IgetProductData } from "../../Redux/AppReducer/action";
import Footer from "../../Components/Footer";


const SingleProductPage = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const location=useLocation();
  const { id } = useParams();
  const [size,setSize]=useState<string>("")
  const token: string = useSelector((state: any) => state.AuthReducer.token);
  const sdata: IgetProductData = useSelector(
    (state: any) => state.AppReducer.sdata
  );
  const cartData: IgetProductData[] = useSelector(
    (state: any) => state.AppReducer.cartData
  );
  useEffect(() => {
    var payload = {
      _id: id,
      dispatch,
    };
    getSingleProduct(payload).then((res) => console.log(sdata));
  }, []);

const handleSize=(ele:string)=>{
setSize(ele);
alert("Size is selected")

}
// console.log(size);

  const handleAddCart = () => {
 if(token) {  let data: Icart_wishlistData = {
      Pid:sdata._id,
      id: sdata.id,
      all_offer_price: sdata.all_offer_price,
      category: sdata.category,
      display_image: sdata.display_image,
      member_price: sdata.member_price,
      mrp: sdata.mrp,
      name: sdata.name,
      offer_type: sdata.offer_type,
      product_sizes: size,
      price: sdata.price,
      gender: sdata.gender,
      quantity: 1,
      offer: sdata.offer,
      member_discount: sdata.member_discount,
      product_discount: sdata.product_discount,
      manufacturer_brand: sdata.manufacturer_brand,
    };
    const payload = {
      PCdata: data,
      dispatch,
    };
    
if(size.length===0){
  alert("select size first")
 
}else{
  postCartProduct(payload)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  alert("Product is added to cart")
}
    }else{
      navigate("/UserLogin")
    }

    //  if(cartData.length===0){
    //     postCartProduct(payload)
    //     return alert("product is added")
    //  }else{
    //   var flag=false;
    //    cartData.length>0 && cartData.forEach((item)=>{
    //       if( item._id===id){
    //         flag=true;
    //       }
    //     })
    //   if(flag){
    //  return alert("This product is already in the cart")
    //   }else{
    //     postCartProduct(payload);
    //     return alert("product is added!")

    //   }
    //  }
  };
  const handleMove=()=>{

  if(token) { let data: Icart_wishlistData = {
      Pid:sdata._id,
      id: sdata.id,
      all_offer_price: sdata.all_offer_price,
      category: sdata.category,
      display_image: sdata.display_image,
      member_price: sdata.member_price,
      mrp: sdata.mrp,
      name: sdata.name,
      offer_type: sdata.offer_type,
      product_sizes: size,
      price: sdata.price,
      gender: sdata.gender,
      quantity: 1,
      offer: sdata.offer,
      member_discount: sdata.member_discount,
      product_discount: sdata.product_discount,
      manufacturer_brand: sdata.manufacturer_brand,
    };
    const payload = {
      PCdata: data,
      dispatch,
    };

    if(size.length===0){
      alert("select size first")
     
    }else{
      postWishlistProduct(payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      alert("product is added to wishlist!")
    }
  }else{
    navigate("/UserLogin")
    }

  }
console.log(location)
  return (
    <>
    <Box  w={{lg:"69%", md:"90%"}} m="auto"  >
      {/* <div>SingleProduct</div> */}
      {/* <Navbar /> */}
      <Box >
        <Breadcrumb
          fontSize="12px"
          // w="1170px"
          // w="61.5%"
          p="10px 10px"
          m=" 10px auto"
          textAlign="left"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {/* <BreadcrumbLink href={location.pathname}>{location.pathname}</BreadcrumbLink> */}
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink _hover={{textDecoration:"none"}} href="#">{sdata.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
      justifyContent="center"
       wrap={{sm:"wrap", base:"wrap", md:"nowrap"}}
      //  w="1170px" 
      // w="40%"
      >
        <Box display="flex"
        // border={"1px solid black"}
        w={{lg:"50%",md:"60%", sm:"80%", base:"90%"}}
        mr="15px"
        // w="50%"
        //  w="570px" h="588px"
         >
          <Box w="80px" mr="10px">
            <Image src={`https://images.bewakoof.com/t1080/${sdata.display_image}`}
            />
          </Box>
          {/* https://images.bewakoof.com/t640/${display_image} */}
          <Box 
          // w={"470px"} 
          >
            <Image
              
              src={`https://images.bewakoof.com/t1080/${sdata.display_image}`}
             
            />
          </Box>
        </Box>
        <Box 
        //  border={"1px solid blue"}
        // w="527px" h="588px"
        m="10px"
        >
          <Box
          // border={"1px solid black"}
            fontSize="18px"
            p="8px 0"
            // w="470px"

            textAlign="left"
            
            fontWeight="semibold"
          >
            {sdata.manufacturer_brand}
            {/* manufacturer_brand */}
          </Box>
          <Text p="8px 0" 
          // w="470px"
           textAlign="left" m="auto">
            {sdata.name}
            {/* Women's Red Slim Fit T-shirt */}
            {/* {name} */}
          </Text>
          <Box>
            <Flex fontSize="14px" align="center" 
            // w="470px"
             m="auto">
              <Box fontWeight="bold" fontSize="24px">
                {" "}
                <Box as="span" fontSize="16px">
                  ₹
                </Box>{" "}
                {/* 349 */}
                {sdata.price}
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
                {/* 399 */}
                {sdata.mrp}
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
                {sdata.product_discount}
                {/* 14% OFF */}
                {/* {product_discount} */}
              </Box>
            </Flex>
            <Flex 
            // w="470px"
             m="0 auto 20px auto">
              <Text fontSize="11px" fontWeight="bold" p="3px 8px" bg="#F7F7F7">
                ₹{sdata.member_price} for TriBe Members
                {/* {singlePageData.tribe_text} */}
                {/* ₹319  For TriBe Members */}
              </Text>
            </Flex>
            <Box m="auto"
            //  w="470px" 
             h="3px" bg="#EEEEEE"></Box>
            <Box fontSize="12px" p="16px 0"  >
              <Text mr="72px">
                TriBe members get an extra discount of{" "}
                <Box textAlign="left" as="span" fontWeight="bold">
                  ₹50
                </Box>{" "}
                and FREE shipping.
                <Box color="#42A2A2" as="span">
                  Learn more
                </Box>
              </Text>
            </Box>
          </Box>
          <Box m="auto"
          //  w="470px"
            h="3px" bg="#EEEEEE"></Box>
          <Box>
            <Flex
            //  w="470px"
              m="15px auto" justifyContent="space-between">
              <Box fontSize="12px" fontWeight="bold" as="span">
                SELECT SIZE
              </Box>

              <Box fontSize="12px" fontWeight="bold" as="span" color="#42A2A2">
                Size Guide
              </Box>
            </Flex>
            <Flex
            //  w="470px"
            wrap={"wrap"}
              m="auto">
              {sdata.product_sizes?.map((ele) => (
                <Center
                  w="46px"
                  h="46px"
                  m="0 9px 5px 0"
                  border="1px solid black"
                  borderRadius="5px"
                  _active={{border: "1px solid #4acccd",
                    backgroundColor: "#000",
                    color: "#fff"}}
                    _hover={{border:"2px solid #4acccd", cursor:"pointer"}}
                  // cursor="pointer"
                  
                >
                  <button onClick={()=>handleSize(ele.name)}  >

                  {ele.name}
                  </button>
                </Center>
              ))}
            </Flex>
          </Box>
          <Box>
            <Box
              // w="470px"
              m="0 auto -15px"
              fontSize="14px"
              textAlign="left"
              fontWeight="bold"
              color="#FF2E2E"
            >
              Few Left
            </Box>
            <Box
            //  w="470px"
              m="20px auto">
              <HStack>
                <Button
                  //  onClick={handleItem }
                  onClick={handleAddCart}
                  h="40px"
                  // w="248px"
                  w="40%"
                  borderRadius="5px"
                  bg="#FFD84D"
                  fontSize="14px"
                  _hover={{background:"#FDD835"}}
                >
                  ADD TO BAG
                </Button>
                <Spacer />
                <Button
                  h="40px"
                  borderRadius="5px"
                  border="1px solid #949494"
                  color="#949494"
                  // w="195px"
                  w="35%"
                  bg="#ffffff"
                  fontSize="14px"
                  onClick={handleMove}
                  _hover={{background:"white"}}
                >
                  WISHLIST
                </Button>
              </HStack>
            </Box>
          </Box>
          <Box m="auto"
          //  w="470px" 
           h="3px" bg="#EEEEEE"></Box>
        </Box>
      </Flex>
    </Box>
      <Footer/>
    </>
  );
};

export default SingleProductPage;
