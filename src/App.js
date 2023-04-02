import React from 'react';
import './App.css'
import LanguageContext from './contexts/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ScrollToTop from './utils/ScrollToTop';


const App = () => {
    
    AOS.init({
        offset: 200,
    });
    
    const { language } = React.useContext(LanguageContext);
    const endPoint = "https://ik.imagekit.io/bbtbvbqon/food-menus/safaaweets/"

    return (
                <div className='App' style={{ textAlign: "center",fontFamily: language === 'He' ? 'Fredoka' : 'Cairo' }}>
                <Router>
                <ScrollToTop />
                    <Routes>
                        <Route exact path="/" element={<Home endPoint={endPoint} language={language} />} />
                        {/* <Route path='/:productId' element={<Product endPoint={endPoint} lng={language} />} /> */}
                        <Route path='/:category' element={<Products endPoint={endPoint} language={language} />} />
                    </Routes>
                </Router>
            </div>
    )
}

export default App