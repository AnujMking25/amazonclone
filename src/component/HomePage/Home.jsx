import Banner from "./Banner/Banner"
import Carousel from "./Carousel"
import CarouselProduct from "./CarouselProduct/CarouselProduct"
import Category from "./Category/Category"
import HomeProduct from "./HomeProduct/HomeProduct"


const Home = () => {
  return (
    <div className="bg-amazonclone-background">
    <div className="min-w-[800px] max-w-[1500px] m-auto">
    <Carousel/>
    <HomeProduct/>
    <CarouselProduct/>
    <Category/>
    <Banner/>
    </div>
    </div>
    )
}

export default Home