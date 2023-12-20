import { Link, useParams } from "react-router-dom";
import heContent from "../languages/hebrew.json"
import arContent from "../languages/arabic.json"
import { BottomNavbar, Footer, Navbar } from "../components";
import { RiWhatsappFill } from 'react-icons/ri';
import { FaShare } from 'react-icons/fa';
import {url, ownerPhone} from '../utils/Utils'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Product = ({ endPoint, language }) => {

    const { productId, categoryName } = useParams()
    const contentLng = language === 'Ar' ? arContent : heContent
    const category = contentLng.categories.find((cat) => cat.name.slice(0, -3) === categoryName);
    const product = category.products.find((product) => product.sku === productId);
    const { Prenote, boldInNote, restOfNote,whatsappDetails: { wspMsgStart, shareBtn, orderBtn } } = contentLng

    return (
        <>
            <Navbar endPoint={endPoint} />
            <div className='Product' style={productStyle}>
                <Link to={`/${categoryName}`}>
                    <button style={{margin:'20px 15px'}} className='showAllBtn'><ArrowForwardIosIcon />{categoryName}</button>
                </Link>
                <h1 style={{ marginTop: '30px' }}>{product.name}</h1>
                <p>{product.desc}</p>
                <h2>₪{product.price}</h2>
                <img src={`${endPoint}${product.picture}`} style={{ margin: '10px 0px', width: '300px', height: '300px' }} alt="" />
                <div className="modal-buttons" style={{ margin: '25px' }}>
                    <a className="product-page-btns" href={`https://api.whatsapp.com/send?phone=${ownerPhone}&text=${wspMsgStart} ${product.name}.`}>
                        <RiWhatsappFill size={20} />{orderBtn}</a>
                    <a className="product-page-btns" href={`whatsapp://send?text=${product.name} - ${product.price}₪ - ${url}${categoryName}/${product.sku}`} data-action="share/whatsapp/share" rel="noreferrer" target="_blank" >
                        <FaShare size={20} />{shareBtn}</a>
                </div>
                <p style={{ padding: '35px', marginBottom: '50px' }}>{Prenote} <a href={`tel:${ownerPhone}`} className="link">{boldInNote}</a> {restOfNote}</p>
            </div>
            <Footer contentLng={contentLng} />
            <BottomNavbar />
        </>

    )
}

const productStyle = {
    height: 'auto',
    marginTop: '56px',
    backgroundColor:'#fff'
}

export default Product