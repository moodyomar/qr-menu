import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategoryCard } from '..';

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

return(

<div className='ProductsSlider'>
<p>קינוחים שווים וטעימים מאוד</p>
<Carousel responsive={responsive} autoPlay={true}
  autoPlaySpeed={2000} partialVisible={false}  
>
<CategoryCard catImg={"https://picsum.photos/90"}/>
<CategoryCard catImg={"https://picsum.photos/90"}/>
<CategoryCard catImg={"https://picsum.photos/90"}/>
<CategoryCard catImg={"https://picsum.photos/90"}/>
<CategoryCard catImg={"https://picsum.photos/90"}/>
<CategoryCard catImg={"https://picsum.photos/90"}/>
</Carousel>

</div>

)
}

export default ProductsSlider