import React, { useEffect, useState } from "react";

// import {reducer as AuthReducer} from "./AppReducer/reducer";
import {
  Box,
  SimpleGrid,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Flex,
  Stack,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IproductData } from "../../Redux/AppReducer/reducer";
import ProductCard from "../../Components/ProductsPage/ProductCard";
import { relative } from "path";
import { getAllProducts } from "../../Redux/AppReducer/action_creaters";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";





const ProductsPage = () => {
  
  const [searchParams,setSearchParams]=useSearchParams(); 
  const initialCategoryFilters=searchParams.getAll("category");
  const initialGenderFilters=searchParams.getAll("gender");
  const initialsort=searchParams.get("sort");
  const AllProductData: IproductData[] = useSelector(
    (state: any) => state.AppReducer.AllProductData
  );
 
  const isLoading: boolean = useSelector( 
    (state: any) => state.AppReducer.isLoading
  );
  const token: string = useSelector((state: any) => state.AuthReducer.token);

  const dispatch = useDispatch();
  const location=useLocation();

  const [sort, setSort] = useState(initialsort || "");

  const [category, setCategory] = useState<string[]>(initialCategoryFilters || []);

//  const [gender,setGender]=useState<string | null>(initialGenderFilters[0] || "");
const gender=localStorage.getItem("gender")
 const[count,setCount]=useState(0);
//  console.log(AllProductData)


const handleFilterCheckbox=(e:React.ChangeEvent<HTMLInputElement>)=>{

  const newCategories: string[] =[...category];

  if(newCategories.includes(e.target.value)){

    newCategories.splice(newCategories.indexOf(e.target.value),1)
  }else{
    newCategories.push(e.target.value)
  }
  setCategory(newCategories)
}

function initCat():void{
  if(category.length===0){
    let checklocalcat:string[]=[];
    let lcheck:string|null =localStorage.getItem("category");
    if(lcheck){
      checklocalcat.push(lcheck)
      setCategory(checklocalcat)
    }
  }
}
initCat();
// function initCat(){
//   if(category.length===0){
//     var checklocalcat:string[]=[];
//     var lcheck:string | null=localStorage.getItem("category");
//     checklocalcat.push(lcheck)
//     if(checklocalcat){

//     setCategory(checklocalcat)
//   }
//   }

  // useEffect(()=>{
  
  //   initCat()
  // },[])




// useEffect(() => {
   
//     if (gender) {
//       let params: any= {};
//       gender && (params.gender = [localStorage.getItem("gender")]);
//       setSearchParams(params);

//     }
//     console.log("82 line no. use effect is runed")
//   }, [setSearchParams]);



useEffect(() => {
   
  if (category && gender ) {
    let params: any= {};
    category && (params.category = category);
    gender && (params.gender = gender);
   sort && (params.sort=sort);
    setSearchParams(params);

  }
  console.log("95 line no. use effect is runed")
}, [sort, category,setSearchParams]);


useEffect(()=>{
  var payload = {
    params:{

      limit: 40,
      category: category,
      gender: gender ,
      page: 1,
      sort: sort
    },
  
    dispatch
  };
 
  getAllProducts(payload).then((res)=>console.log("113 line no. use effect is runed"));
  
},[location.search,sort])




  



// useEffect(()=>{
//   var payload = {
//     params:{

//       limit: 40,
//       category: category,
//       gender: gender,
//       page: 1,
//       sort: sort
//     },
  
//     dispatch
//   };
  

//     getAllProducts(payload)
//     // .then((res)=>{setCount(prev=>prev+1); console.log(AllProductData)});
  

// },[dispatch,category,gender,location.search])









  return (
    <div>
      {/* <Box  > */}
      <Box position="sticky" top="0">
        {/* <Navbar /> */}
      </Box>
      <Box>
        <Breadcrumb
          fontSize="12px"
          w="1170px"
          p="10px 10px"
          m="auto"
          textAlign="left"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            {/* <BreadcrumbLink href="/men">Men</BreadcrumbLink> */}
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box></Box>
      <Box
        w="1170px"
        m="auto"
        mt="45px"
        mb="50px"
        textAlign="left"
        fontSize="24px"
        fontWeight="bold"
      >
        {/* {data.title}{" "} */}
        {`${gender} Clothing`}
        <Box as="span" fontWeight="normal" color="#949494">
          {/* ({data.total_product_count}) */}
        </Box>
        <Box w="117px" h="2px" bg="#FBD139" ml="1px" mt="6px"></Box>
      </Box>
      <Box w="1170px" h="auto" m="auto" display="flex">
        <Box w="295.5px" h="auto">
          <Flex color="#333333" direction="column" position="sticky" top="52px">
            <Box
              color="#2D2D2D80"
              fontSize="12px"
              p="12px 0"
              textAlign="left"
              fontWeight="bold"
            >
              FILTERS
            </Box>
            <Accordion allowToggle mr="10px">
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex fontSize={"14px"} direction={"column"}>
                
                    <Checkbox _hover={{background:"#F7F7F7"}} size="sm" isChecked={category.includes("T-Shirt")} onChange={handleFilterCheckbox} colorScheme="yellow" value="T-Shirt" >
                      T-Shirt
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Shirt")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleFilterCheckbox} colorScheme="yellow" value="Shirt" >
                      Shirt
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Shorts")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleFilterCheckbox} colorScheme="yellow" value="Shorts" >
                      Shorts
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Sweater")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleFilterCheckbox} colorScheme="yellow" value="Sweater" >
                      Sweater
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Hoodies")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleFilterCheckbox} colorScheme="yellow" value="Hoodies" >
                      Hoodies
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Jeans")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleFilterCheckbox} colorScheme="yellow" value="Jeans" >
                      Jeans
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="94%">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

           
          </Flex>
        </Box>
        <Box w="877.5px">
          <Box p="12px 15px 0" mb="12px" display="flex" justifyContent="end">
            <Box
              as="span"
              fontSize="12px"
              pt="6px"
              color="#2D2D2D80"
              fontWeight="bold"
            >
              SORT BY
            </Box>
            <Select
              p="1px 6px 12px"
              w="147px"
              h="26px"
              fontSize="12px"
              variant="unstyled"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">--Price--</option>
              {/* <option value="new">New</option> */}
              <option value="desc"> High to Low</option>
              <option value="asc"> Low to High</option>
            </Select>
          </Box>
          <SimpleGrid columns={3} gap="10px">
            {AllProductData.length > 0 &&
              AllProductData?.map((item) => {
                return <ProductCard key={item.id} {...item} />;
              })}
          </SimpleGrid>
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default ProductsPage;

{
  /* <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                /> */
}
// https://images.bewakoof.com/web/bwkf-loading-anim-common.gif

// if(isLoading) {
//   return <Center w="100%" h="100%" > <Image   w="250px" src='https://images.bewakoof.com/web/bwkf-loading-anim-common.gif' /></Center>}
