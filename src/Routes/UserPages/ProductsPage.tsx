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
  const initialColorFilters=searchParams.getAll("color");
  const initialBrandFilters=searchParams.getAll("manufacturer_brand");
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
  const [brand, setBrand]=useState<string[]>(initialBrandFilters || []);
  const [color, setColor]=useState<string[]>(initialColorFilters || []);

//  const [gender,setGender]=useState<string | null>(initialGenderFilters[0] || "");
const gender=localStorage.getItem("gender")
 const[count,setCount]=useState(0);
//  console.log(AllProductData)


const handleCategoryCheckbox=(e:React.ChangeEvent<HTMLInputElement>)=>{

  const newCategories: string[] =[...category];

  if(newCategories.includes(e.target.value)){

    newCategories.splice(newCategories.indexOf(e.target.value),1)
  }else{
    newCategories.push(e.target.value)
  }
  setCategory(newCategories)
}
const handleBrandCheckbox=(e:React.ChangeEvent<HTMLInputElement>)=>{

  const newBrand: string[] =[...brand];

  if(newBrand.includes(e.target.value)){

    newBrand.splice(newBrand.indexOf(e.target.value),1)
  }else{
    newBrand.push(e.target.value)
  }
  setBrand(newBrand)
}
const handleColorCheckbox=(e:React.ChangeEvent<HTMLInputElement>)=>{

  var newcolor: string[] =[...color];

  if(newcolor.includes(e.target.value)){

    newcolor.splice(newcolor.indexOf(e.target.value),1)
  }else{
    newcolor=[];
    newcolor.push(e.target.value)
  }
  setColor(newcolor)
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
    brand && (params.manufacturer_brand=brand);
    color && (params.color = color);
   sort && (params.sort=sort);
    setSearchParams(params);

  }
  console.log("95 line no. use effect is run")
}, [sort,brand,color, category,setSearchParams]);


useEffect(()=>{
  var payload = {
    params:{

      limit: 40,
      category: category,
      manufacturer_brand:brand,
      color:color,
      gender: gender ,
      page: 1,
      sort: sort
    },
  
    dispatch
  };
 
  getAllProducts(payload).then((res)=>console.log("147line no. use effect is run"));
  
},[location.search,sort])




useEffect(()=>{
  var payload = {
    params:{

      limit: 40,
      category: category,
      gender: gender ,
      page: 1,
      color:color,
      sort: sort
    },
  
    dispatch
  };
 
  getAllProducts(payload).then((res)=>console.log("168 line no. use effect is run"));
  
},[])
  



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
    <Box m="auto" w={{base:"90%", sm:"90%", md:"80%", lg:"67%"}}  > 
      {/* <Box  > */}
      {/* <Box position="sticky" top="0">
        <Navbar />
      </Box> */}
      <Box  >
        <Breadcrumb
          fontSize="12px"
          // w="1170px"
          
          p="10px 0"
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
      // border={"1px solid orange"}
        // w="1170px"
        // w="63%"
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
        <Box
         w="117px" h="2px" bg="#FBD139" ml="1px" mt="6px"></Box>
      </Box>

      <Box
      // border={"1px solid red"}
      //  w="1170px" 
      // w="63%"
        h="auto" m="auto" display="flex">
        <Box
        display={{base:"none", sm:"none", md:"none", lg:"unset"}}
         w="300px"
          h="auto">
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
              <AccordionItem w="200px">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>{
                  gender==="Men"?
                  <AccordionPanel pb={4}>
                  <Flex fontSize={"14px"} direction={"column"}>
                
                    <Checkbox _hover={{background:"#F7F7F7"}} size="sm" isChecked={category.includes("T-Shirt")} onChange={handleCategoryCheckbox} colorScheme="yellow" value="T-Shirt" >
                      T-Shirt
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Shirt")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Shirt" >
                      Shirt
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Shorts")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Shorts" >
                      Shorts
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Sweater")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Sweater" >
                      Sweater
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Hoodies")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Hoodies" >
                      Hoodies
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Jeans")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Jeans" >
                      Jeans
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Jacket")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Jacket" >
                      Jackets
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Boxer")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Boxer" >
                      Boxer
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Pyjama")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Pyjama" >
                      Pyjama
                    </Checkbox>
                    <Checkbox isChecked={category.includes("Vest")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Vest" >
                      Vest
                    </Checkbox>
                    
                  </Flex>
                </AccordionPanel>:
                 <AccordionPanel pb={4}>
                 <Flex fontSize={"14px"} direction={"column"}>
               
                   <Checkbox _hover={{background:"#F7F7F7"}} size="sm" isChecked={category.includes("T-Shirt")} onChange={handleCategoryCheckbox} colorScheme="yellow" value="T-Shirt" >
                     T-Shirt
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Shirt")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Shirt" >
                     Shirt
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Shorts")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Shorts" >
                     Shorts
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Sweater")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Sweater" >
                     Sweater
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Hoodies")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Hoodies" >
                     Hoodies
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Jeans")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Jeans" >
                     Jeans
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Dress")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Dress" >
                     Dress
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Top")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Top" >
                     Top
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Kurta Set")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Kurta Set" >
                     Kurta Set
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Tights")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Tights" >
                     Tights
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Nightsuits")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Nightsuits" >
                     Nightsuits
                   </Checkbox>
                   <Checkbox isChecked={category.includes("Pyjama")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleCategoryCheckbox} colorScheme="yellow" value="Pyjama" >
                     Pyjama
                   </Checkbox>
                 </Flex>
               </AccordionPanel>

              }
              </AccordionItem>

              <AccordionItem w="200px">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Flex fontSize={"14px"} direction={"column"}>
                
                <Checkbox _hover={{background:"#F7F7F7"}} size="sm" isChecked={brand.includes("Bewakoof")} onChange={handleBrandCheckbox} colorScheme="yellow" value="Bewakoof" >
                  Bewakoof
                </Checkbox>
                <Checkbox isChecked={brand.includes("Campus Sutra")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleBrandCheckbox} colorScheme="yellow" value="Campus Sutra" >
                  Campus Sutra
                </Checkbox>
                <Checkbox isChecked={brand.includes("Dillinger")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleBrandCheckbox} colorScheme="yellow" value="Dillinger" >
                  Dillinger
                </Checkbox>
                <Checkbox isChecked={brand.includes("Rigo")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleBrandCheckbox} colorScheme="yellow" value="Rigo" >
                  Rigo
                </Checkbox>
                <Checkbox isChecked={brand.includes("Breakbounce")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleBrandCheckbox} colorScheme="yellow" value="Breakbounce" >
                  Breakbounce
                </Checkbox>
                <Checkbox isChecked={brand.includes("Snitch")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleBrandCheckbox} colorScheme="yellow" value="Snitch" >
                  Snitch
                </Checkbox>
             
                
              </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem w="200px">
                <h2>
                  <AccordionButton p="8px 0px 8px 0px">
                    <Box as="span" fontSize="14px" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex direction={"column"} >
                <Checkbox isChecked={color.includes("black")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleColorCheckbox} colorScheme="yellow" value="black" >
                  black
                </Checkbox>
                <Checkbox isChecked={color.includes("red")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleColorCheckbox} colorScheme="yellow" value="red" >
                  red
                </Checkbox>
                <Checkbox isChecked={color.includes("blue")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleColorCheckbox} colorScheme="yellow" value="blue" >
                  blue
                </Checkbox>
                <Checkbox isChecked={color.includes("white")} _hover={{background:"#F7F7F7"}} size="sm" onChange={handleColorCheckbox} colorScheme="yellow" value="white" >
                  white
                </Checkbox>
                </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

           
          </Flex>
        </Box>
        <Box 
        //  w="877.5px"
         >
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
          <SimpleGrid columns={{lg:3, md:2, sm:2, base:2}} gap="10px">
            {AllProductData.length > 0 &&
              AllProductData?.map((item) => {
                return <ProductCard key={item.id} {...item} />;
              })}
          </SimpleGrid>
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
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
