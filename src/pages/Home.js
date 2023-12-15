// import './Home.css'
import { BottomNavbar, Footer, Hero, Navbar, ProductsArea, ProductsSlider } from '../components'
import heContent from "../languages/hebrew.json"
import arContent from "../languages/arabic.json"

const Home = ({endPoint, language}) => {

    const contentLng = language === 'Ar' ? arContent : heContent

    return (
        <div className='Home'>
            <Navbar endPoint={endPoint} />
            <Hero endPoint={endPoint} heroBg={'hero.webp'} mt='0px' textInHero={'Safaa Sweets'}/>
            <ProductsSlider contentLng={contentLng} endPoint={endPoint} />
            <ProductsArea contentLng={contentLng} endPoint={endPoint} />
            <Footer contentLng={contentLng} />
            <BottomNavbar />
        </div>

    )
}

export default Home