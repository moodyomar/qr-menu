import React from 'react';
import './App.css'
import LanguageContext from './contexts/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ScrollToTop from './utils/ScrollToTop';
import {endPoint} from './utils/Utils';
import Product from './pages/Product';


const App = () => {
    
    AOS.init({
        offset: 200,
    });
    
    const { language } = React.useContext(LanguageContext);

    return (
                <div className='App' style={{ textAlign: "center",fontFamily: language === 'He' ? 'Heebo' : 'Cairo' }}>
                <Router>
                <ScrollToTop />
                    <Routes>
                        <Route exact path="/" element={<Home endPoint={endPoint} language={language} />} />
                        <Route path='/:categoryName/:productId' element={<Product endPoint={endPoint} language={language} />} />
                        <Route path='/:categoryName' element={<Products endPoint={endPoint} language={language} />} />
                    </Routes>
                </Router>
            </div>
    )
}

export default App