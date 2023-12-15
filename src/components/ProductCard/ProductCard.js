import React from 'react';
// import WhatsappContext from '../../contexts/WhatsappCart'
// import { FaShare } from 'react-icons/fa';
// import { MdOutlineAddCircle } from 'react-icons/md';
// import { RiWhatsappFill } from 'react-icons/ri';
// import { v4 as uuid } from 'uuid';
import './ProductCard.css';

export default function ProductCard({ product: { name, price, picture }, endPoint }) {

  // const [orderNotes, setOrderNotes] = useState(null);
  const defaultPic = picture ? picture : 'default.jpeg';
  // const { memoizedValue } = useContext(WhatsappContext)

  return (
    <div className="food-card" data-aos={`zoom-in`} data-aos-duration="1000">
      <div className="food-card-img-container">
        <img className="logo" src={`${endPoint}logo.png`} alt="Logo" />
        <img src={`${endPoint}${defaultPic}`} alt="Product" />
        {/* add button */}
        {/* <button onClick={e => memoizedValue.addToWspCart({ name, price, picture, id: uuid(), qnty: 1 })} className="add-product"><MdOutlineAddCircle size={25} color={'#60D003'} /></button>
        <div className={`food-card-details`}>
          <p className="food-card-details-text">{desc}</p>
          <input type="text" onChange={e => setOrderNotes(e.target.value)} className='order-notes' placeholder={placeholder} />
          <div className="card-buttons">
            <a href={`https://api.whatsapp.com/send?phone=${ownerPhone}&text=${wspMsgStart} ${name} ${desc}.\n ${orderNotes !== null ? `\0*${specialNotes}:* \0${orderNotes}` : ''}`}>
              <RiWhatsappFill size={20} className='svgs' />{orderBtn}</a>
            <a href={`whatsapp://send?text=${name} ב${price}`} data-action="share/whatsapp/share" rel="noreferrer" target="_blank" >
              <FaShare size={20} className='svgs' />{shareBtn}</a>
          </div>
        </div> */}
        {/* end of add button */}
        <div className="food-card-title-container">
          <h3 className="food-card-title">{name}</h3>
          <p className="food-card-price">₪{price}</p>
        </div>
      </div>
    </div>
  );
}
