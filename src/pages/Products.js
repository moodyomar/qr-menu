import { Link, useLocation } from 'react-router-dom';
import { BottomNavbar, Footer, Hero, ProductCard } from '../components'
import Grid from '@material-ui/core/Grid'
import heContent from "../json/content-hr.json"
import arContent from "../json/content-ar.json"

const Product = ({ endPoint, lng }) => {

    const location = useLocation();
    const { category } = location.state;
    const contentLng = lng === 'Ar' ? arContent : heContent
    
    return (

        <div className='Product'>
            <Hero heroBg={category.image} mt='0px' textInHero={category.name} endPoint={endPoint} />
            <div className="product-data" style={{ marginTop: '25px', minHeight: '80vh' }}>
                <Link to={`/`}>
                    <button className='showAllBtn' style={backBtn}>{contentLng.backBtn}</button>
                </Link>
                <Grid container spacing={2}>
                    {category.products.map((product, i) => (
                        <Grid item xs={6} md={4} lg={3} key={i}>
                            {/* Each Product In The Above Category */}
                            {/* <Link to={`/${product.name}`} state={{ product }}> */}
                            <ProductCard product={product} endPoint={endPoint} wspDetails={''} />
                            {/* </Link> */}

                        </Grid>
                    ))}
                </Grid>
                <div style={{margin:'20px', width:'100vw'}}>
                    <Link to={`/`}>
                        <button className='showAllBtn' style={backBtn}>{contentLng.backBtn}</button>
                    </Link>
                </div>
            </div>
            <Footer />
            <BottomNavbar />
        </div>

    )
}

const backBtn = {
    margin: '20px 15px',
    width:'60px',
    height:'20px'
}

export default Product