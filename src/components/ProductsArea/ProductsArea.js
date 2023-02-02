import { ProductCard, Title } from '../'
import Grid from '@material-ui/core/Grid'
import content from "../../json/content-hr.json"
import './ProductsArea.css'


const ProductsArea = () => {

  return (

    <div className='ProductsArea' >
      <Grid style={styles.flex} container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {content.categories.map((category,i) => {
          return (
        <div className='categories-wrapper' key={i}>
          <Title category={category}/>
          <Grid item xs={6} md={4} >
              {category.products.map((product,i) => (
                <ProductCard key={i} product={product} />
              ))}
          </Grid>
        </div>
          )
        })}
      </Grid>

    </div>

  )
}

const styles = {
  flex: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "100px",
    padding: "10px"
  }
}

export default ProductsArea