import Carousel from "./Carousel"
import Product from "./Product/Product"


const Home = () => {
  return (
    <div className="bg-amazonclone-background">
    <div className="min-w-[800px] max-w-[1500px] m-auto">
    Home
    <Carousel/>
    <Product/>
    </div>
    </div>
    )
}

export default Home