import { RiWhatsappFill } from 'react-icons/ri';
import { FaShare } from 'react-icons/fa';
import {ownerPhone, url} from '../../utils/Utils'
import './ProductModal.css'
import { Link } from 'react-router-dom';

const ProductModal = ({ product: { name, price, picture, desc, sku, category }, endPoint, onClose, contentLng: { close, whatsappDetails: { wspMsgStart, shareBtn, orderBtn } } }) => {

  const defaultPic = picture ? picture : 'default.jpeg';

  return (
    <div className={`modal`} onClick={onClose}>
      <div className={`modal-content`} data-aos={`zoom-in`} data-aos-duration="800">
        <h2>{name}</h2>
        <p>{desc}</p>
        <p className="product-price">₪{price}</p>
        <Link to={`/${category.slice(0, -3)}/${sku}`}>
          <img src={`${endPoint}${defaultPic}`} alt="Product" style={{ width: '70vw', borderRadius: '15px', marginBottom: '25px' }} />
        </Link>
        <div className="modal-buttons">
          <a href={`https://api.whatsapp.com/send?phone=${ownerPhone}&text=${wspMsgStart} ${name} ${desc}.`}>
            <RiWhatsappFill size={20} className='svgs' />{orderBtn}</a>
          <a href={`whatsapp://send?text=${name} - ${price}₪ - ${url}${category.slice(0, -3)}/${sku}`} data-action="share/whatsapp/share" rel="noreferrer" target="_blank" >
            <FaShare size={20} className='svgs' />{shareBtn}</a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal