import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CarouselComp = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

    <div className='carImage' >
        <img src="https://images.bewakoof.com/uploads/grid/app/puffer-jkt-1x1-common-1671471274.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/xmasParty-banner-1x1-xmas-common-1671613537.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker-1671199690.gif" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1661417095.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg" alt="" />
    </div>

</Carousel>
  )
}

export default CarouselComp