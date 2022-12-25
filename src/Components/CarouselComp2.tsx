import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CarouselComp2 = () => {
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
        <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-VarsityGreen-women-02-1661515186.gif" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-women-1661352310.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/puffer-jkt-1x1-women-1671471275.jpg" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-copy-BottomsUpBash-women-02b-1661535682.gif" alt="" />
    </div>
    <div className='carImage'>
        <img src="https://images.bewakoof.com/uploads/grid/app/christmas-clearance-zone-women-1671545681.jpg" alt="" />
    </div>

</Carousel>
  )
}

export default CarouselComp2