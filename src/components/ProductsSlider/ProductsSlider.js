import './ProductsSlider.css'
import heContent from "../../json/content-hr.json"
import arContent from "../../json/content-ar.json"
import { Title } from '../';
import { CategoryCard } from '..';

const ProductsSlider = ({ language, endPoint }) => {

  const contentLng = language === 'Ar' ? arContent : heContent

  return (

<div className='ProductsSlider'>
  <Title category={{
    "name": contentLng.catTitle,
    "desc": contentLng.catDesc
  }} />
  <div style={{WebkitOverflowScrolling: 'touch', display:'flex', width:'100%', overflowX:'auto', maxWidth: '100%'}}>
    {contentLng.categories.map((category, i) => (
      <div key={i} style={{ flex: '0 0 auto', width: '33%', marginRight: '10px' }}>
        <a href={`#${category.name}`}><CategoryCard category={category} endPoint={endPoint} /></a>
      </div>
    ))}
  </div>
</div>


  )
}

export default ProductsSlider