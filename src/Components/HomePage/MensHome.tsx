import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/AppReducer/action_creaters";
import CarouselComp from "../CarouselComp";

const MensHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (category: string) => {
    // var payload = {
    //   params:{

    //     limit: 40,
    //     category: category,
    //     gender: "Men",
    //     page: 1,
    //     sort:""
    //   },
    //   dispatch,
    // };

    // getAllProducts(payload);
    let gender= "Men";
    localStorage.setItem("gender",gender);
    localStorage.setItem("category",category);
    navigate("/ProductsPage");
  };
  interface ICategoryProps{
    image:string,
    category:string
  }
  const categoryArr:ICategoryProps[]=[
    {
      image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668772678.jpg",
      category:"T-Shirt",
  },
  {
    image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670503952.jpg",
    category:"Sweater",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg",
  category:"T-Shirt",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg",
  category:"Jacket",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670503953.jpg",
  category:"Sweatshirt",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg",
  category:"Pyjama",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-shirts-1668772679.jpg",
  category:"Shirt",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-boxers-1668772675.jpg",
  category:"Boxer",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-jeans-1668772677.jpg",
  category:"Jeans",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
  category:"Vest",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
  category:"Shorts",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg",
  category:"Hoodies",
},

  ]
  interface IcarArr{
    img:string
  }
  const carouselArr:IcarArr[]=[
    {img:"https://images.bewakoof.com/uploads/grid/app/puffer-jkt-1x1-common-1671471274.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/xmasParty-banner-1x1-xmas-common-1671613537.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker-1671199690.gif"},
    {img:"https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1661417095.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"},


  ]
  return (
    <div>
      <CarouselComp  />
      {/* topcarousel */}
      {/* <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
        style={{ height: "670px", padding: "20px 0 5px" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/very-peri-homepage-1661439183.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
          <div class="carousel-item" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1661417095.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-men-1661352309.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
          <div class="carousel-item" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-VarsityGreen-men-02-1661515187.gif"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <Box w="100%" pt="20px">
        {" "}
        <Image
          w="100%"
          p="20px"
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669217199.jpg"
        />
      </Box>
      <br />
      <Box w="100%">
        {" "}
        <Image
          w="100%"
          src="https://images.bewakoof.com/uploads/grid/app/thin-strip-new-2022-freebie-desktop-129-1661241484.jpg"
        />
      </Box>
      <SimpleGrid columns={6} row={2}>
      {categoryArr.map((item) => (
        <Box
          m="3px"
          transition=".3s"
          objectFit="contain"
          cursor="pointer"
          _hover={{
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            transform: 'scale(1.01)',
          }}
          onClick={() => handleClick(item.category)}
        >
          <Image w="100%" src={item.image} />
        </Box>
      ))}
    </SimpleGrid>
      
      <Box fontSize="20px" fontWeight="bold">
        DISCOUNT PE DISCOUNT
      </Box>
      <SimpleGrid columns={2}>
        <Box>
          <Image
            p="5px"
            w="100%"
            src="https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg"
          />
        </Box>
        <Box>
          <Image
            p="5px"
            w="100%"
            src="https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1660818217.jpg"
          />
        </Box>
        <Box>
          <Image
            p="5px"
            w="100%"
            src="https://images.bewakoof.com/uploads/grid/app/sweatshirt-men-1660737200.jpg"
          />
        </Box>
        <Box>
          <Image
            p="5px"
            w="100%"
            src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-house-of-dragon-02-1661322716.jpg"
          />
        </Box>
      </SimpleGrid>
      <Box>
        <Image
          p="8px"
          w="100%"
          borderRadius="8px"
          src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
        />
      </Box>
      <Box fontSize="16px" pb="15px" fontWeight="bold" letterSpacing="2px">
        Customize your T-shirts
      </Box>
      <Box>
        <Image
          w="100%"
          src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"
        />
      </Box>
    </div>
  );
};

export default MensHome;
{/* <SimpleGrid columns={6} row={2}>
        {categoryArr.map((item)=>{
          <Box m="3px" transition=".3s" objectFit={"contain"}  cursor="pointer" _hover={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",transform:"scale(1.01)"}} onClick={() => handleClick(item.category)}>
         
          <Image
          //  _hover={{transform:"scale(1.01)"}} transition=".3s" objectFit={"cover"} 
            w="100%"
            src={item.image}
          />
       
      </Box>
        })} */}

        {/* <Box m="3px" transition=".3s" objectFit={"contain"}  cursor="pointer" _hover={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",transform:"scale(1.01)"}} onClick={() => handleClick("T-Shirt")}>
         
            <Image
            //  _hover={{transform:"scale(1.01)"}} transition=".3s" objectFit={"cover"} 
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg"
            />
         
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
          
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg"
            />
          
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
         
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg"
            />
         
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
          
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg"
            />
        
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
         
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg"
            />
          
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
        
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg"
            />
          
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
         
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg"
            />
          
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
          
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg"
            />
          
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
         
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-sweatshirts-m-1660748009.jpg"
            />
         
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
      
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg"
            />
       
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
         
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg"
            />
         
        </Box>
        <Box m="3px" onClick={() => handleClick("")}>
          
            <Image
              w="100%"
              src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670503952.jpg"
            />
       
        </Box> */}
      {/* </SimpleGrid> */}