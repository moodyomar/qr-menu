import {ProductCard} from '../'
import './ProductsArea.css'


const ProductsArea = () => { 

return(

<div className='ProductsArea' style={styles.flex}>
<h1>ProductsArea</h1>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

)
}

const styles = {
    flex: {
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center"
    }
}

export default ProductsArea