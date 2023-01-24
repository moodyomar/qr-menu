import {ProductCard} from '../'
import Grid from '@material-ui/core/Grid'
import './ProductsArea.css'


const ProductsArea = () => { 

return(

<div className='ProductsArea' style={styles.flex}>
<Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} md={4} >
    <ProductCard/>
  </Grid>
  <Grid item xs={6} md={4} >
    <ProductCard/>
  </Grid>
  <Grid item xs={6} md={4} >
    <ProductCard/>
  </Grid>
  <Grid item xs={6} md={4} >
    <ProductCard/>
  </Grid>
  <Grid item xs={6} md={4}>
    <ProductCard/>
  </Grid>
  <Grid item xs={6} md={4}>
    <ProductCard/>
  </Grid>
</Grid>

</div>

)
}

const styles = {
    flex: {
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginBottom: "100px",
        padding: "10px"
    }
}

export default ProductsArea