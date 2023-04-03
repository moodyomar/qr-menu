import './ProductsSlider.css';
import { Title } from '../';
import { CategoryCard } from '..';

const ProductsSlider = ({ contentLng, endPoint }) => {
  const scrollOffset = 150; // Adjust this value to control the scroll position

  const handleCategoryClick = (categoryName) => {
    const target = document.getElementById(categoryName);
    const offsetPosition = target.offsetTop - scrollOffset;

    window.scrollTo({
      top: offsetPosition,
      // behavior: "smooth"
    });
  };

  return (
    <div className='ProductsSlider'>
      <Title category={{
        "name": contentLng.catTitle,
        "desc": contentLng.catDesc
      }} />
      <div style={{WebkitOverflowScrolling: 'touch', display:'flex', width:'100%', overflowX:'auto', maxWidth: '100%'}}>
        {contentLng.categories.map((category, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: '33%', marginRight: '10px' }}>
            <button className='scroll-btn' onClick={() => handleCategoryClick(category.name)}>
              <CategoryCard category={category} endPoint={endPoint} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
