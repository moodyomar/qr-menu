// import './Home.css'
import { BottomNavbar, Footer, Hero, Navbar, ProductsArea, ProductsSlider } from '../components'
import heContent from "../json/content-hr.json"
import arContent from "../json/content-ar.json"

const Home = ({endPoint, language}) => {

    const contentLng = language === 'Ar' ? arContent : heContent

    return (
        <div className='Home'>
            <Navbar />
            <Hero endPoint={endPoint} heroBg={'hero.webp'} mt='0px' textInHero={'Safaa Sweets'}/>
            <ProductsSlider contentLng={contentLng} endPoint={endPoint} />
            <ProductsArea contentLng={contentLng} endPoint={endPoint} />
            <Footer language={language} />
            <BottomNavbar />
        </div>

    )
}

export default Home