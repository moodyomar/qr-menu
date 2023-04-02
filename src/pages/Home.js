// import './Home.css'
import { BottomNavbar, Footer, Hero, Navbar, ProductsArea, ProductsSlider } from '../components'

const Home = ({endPoint, lng}) => {
console.log(lng);
    return (

        <div className='Home'>
            <Navbar />
            <Hero endPoint={endPoint} heroBg={'hero.webp'} mt='0px' textInHero={'Safaa Sweets'}/>
            <ProductsSlider language={lng} endPoint={endPoint} />
            <ProductsArea language={lng} endPoint={endPoint} />
            <Footer />
            <BottomNavbar />
        </div>

    )
}

export default Home