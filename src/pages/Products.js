import { Link, useParams } from 'react-router-dom';
import { BottomNavbar, Footer, Hero, Navbar, ProductCard } from '../components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid'
import heContent from "../languages/hebrew.json"
import arContent from "../languages/arabic.json"

const Products = ({ endPoint, language }) => {

    const {categoryName} = useParams();
    const contentLng = language === 'Ar' ? arContent : heContent
    const category = contentLng.categories.find((cat) => cat.name.slice(0, -3) === categoryName);

    return (

        <div className='Product'>
            <Navbar endPoint={endPoint} />
            <Hero heroBg={category.image} mt='0px' textInHero={category.name} endPoint={endPoint} />
            <div className="product-data" style={{ marginTop: '25px', minHeight: '80vh' }}>
                <Link to={`/`}>
                    <button className='showAllBtn' style={backBtn}><ArrowForwardIosIcon />{contentLng.backBtn}</button>
                </Link>
                <Grid container spacing={2}>
                    {category.products.map((product, i) => (
                        <Grid item xs={6} md={4} lg={3} key={i}>
                            {/* Each Product In The Above Category */}
                            <Link to={`/${category.name.slice(0, -3)}/${product.sku}`}>
                                <ProductCard product={product} endPoint={endPoint} wspDetails={''} />
                            </Link>

                        </Grid>
                    ))}
                </Grid>
                <div style={{ margin: '20px', width: '100vw' }}>
                    <Link to={`/`}>
                        <button className='showAllBtn' style={backBtn}><ArrowForwardIosIcon />{contentLng.backBtn}</button>
                    </Link>
                </div>
            </div>
            <Footer contentLng={contentLng} />
            <BottomNavbar />
        </div>

    )
}

const backBtn = {
    margin: '20px 15px',
    width: '70px',
    justifyContent: 'center',
    alignItems: 'Center',
    height: '30px',
    borderRadius: '15px',
    padding: '3px 10px',
}

export default Products