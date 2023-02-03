import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategoryCard } from '..';
import content from "../../json/content-hr.json"

const ProductsSlider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };


  return (

    <div className='ProductsSlider'>
      <p>קינוחים שווים וטעימים מאוד</p>
      <Carousel responsive={responsive} autoPlay={true}
        autoPlaySpeed={2000} partialVisible={false}>
        {content.categories.map((category,i) => (
          <a href={`#${category.name}`}><CategoryCard key={i} category={category}/></a>
        ))}
      </Carousel>

    </div>

  )
}

export default ProductsSlider