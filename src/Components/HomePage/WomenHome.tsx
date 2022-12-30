import React from 'react'
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../Redux/AppReducer/action_creaters';
import CarouselComp2 from '../CarouselComp2';
const WomenHome = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (category: string) => {
    // var payload = {
    //   params:{

    //     limit: 40,
    //     category: category,
    //     gender: "Women",
    //     page: 1,
    //     sort:""
    //   },
    //   dispatch,
    // };

    // getAllProducts(payload);

    let gender= "Women";
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
      image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg",
      category:"T-Shirt",
  },
  {
    image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg",
    category:"Sweater",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg",
  category:"Top",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg",
  category:"Jacket",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg",
  category:"Sweatshirt",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg",
  category:"Pyjama",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg",
  category:"Shirt",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg",
  category:"Boxer",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg",
  category:"Jeans",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg",
  category:"Joggers",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg",
  category:"Shorts",
},
{
  image:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg",
  category:"Dress",
},

  ]
    return (
        <div>
          <CarouselComp2/>
          
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
          <SimpleGrid columns={{lg:6, md:4, sm:2, base:1}} row={{lg:2, md:3, sm:6, base:12}}>
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
          <SimpleGrid columns={{lg:2, md:2, sm:1, base:1}} row={{lg:2, md:2, sm:4, base:4}} >
            <Box>
              <Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg" />
            </Box>
            <Box>
              <Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/revamped-MIDbanners-AugustFaves-women-1661539450.jpg" />
            </Box>
            <Box>
              <Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-lastsizesleft-women-1658984794.jpg" />
            </Box>
            <Box>
              <Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-w-1660204325.jpg" />
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
}

export default WomenHome

{/* <SimpleGrid columns={6} row={2}>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg"
                />
              </Link>
            </Box>
            <Box m="3px">
              <Link to="/men">
                <Image
                  w="100%"
                  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg"
                />
              </Link>
            </Box>
          </SimpleGrid> */}



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
                  src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-women-refreshed-1661417095.jpg"
                  class="d-block w-33"
                  alt="..."
                />
                <img
                  style={{ height: "669px" }}
                  src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-women-1661352310.jpg"
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
                  src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-women-1661352310.jpg"
                  class="d-block w-33"
                  alt="..."
                />
                <img
                  style={{ height: "669px" }}
                  src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-women-refreshed-1661417095.jpg"
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
                  src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-copy-BottomsUpBash-women-02b-1661535682.gif"
                  class="d-block w-33"
                  alt="..."
                />
                <img
                  style={{ height: "669px" }}
                  src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-VarsityGreen-women-02-1661515186.gif"
                  class="d-block w-33"
                  alt="..."
                />
                <img
                  style={{ height: "669px" }}
                  src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-women-1661352310.jpg"
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