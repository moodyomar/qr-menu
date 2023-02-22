import React from 'react';
import './App.css'
import { BottomNavbar, Hero, Navbar, ProductsArea, ProductsSlider } from './components'
import LanguageContext from './contexts/LanguageSwitcher';


const App = () => {

    const { language } = React.useContext(LanguageContext);


    return (

        <div className='App' style={{ textAlign: "center" }}>
            <Navbar />
            <Hero />
            <ProductsSlider language={language} />
            <ProductsArea language={language} />
            <BottomNavbar />
        </div>

    )
}

export default App