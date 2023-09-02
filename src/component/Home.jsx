import Banner from "./Banner/Banner"
import Carousel from "./Carousel"
import CarouselProduct from "./CarouselProduct/CarouselProduct"
import Category from "./Category/Category"
import Product from "./Product/Product"


const Home = () => {
  return (
    <div className="bg-amazonclone-background">
    <div className="min-w-[800px] max-w-[1500px] m-auto">
    <Carousel/>
    <Product/>
    <CarouselProduct/>
    <Category/>
    <Banner/>
    </div>
    </div>
    )
}

export default Home