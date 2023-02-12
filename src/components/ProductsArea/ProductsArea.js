import { ProductCard, Title } from '../'
import Grid from '@material-ui/core/Grid'
import content from "../../json/content-hr.json"
import './ProductsArea.css'
import React from 'react'


const ProductsArea = () => {

  return (

    <div className='ProductsArea' style={{ padding: '15px' }}>
      <Grid container spacing={2} style={styles.flex} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {content.categories.map((category, i) => (
          <React.Fragment key={i}>
            {/* Each Category Title */}
            <Title category={category}/>
            <Grid container spacing={2}>
              {category.products.map((product, i) => (
                <Grid item xs={6} key={i}>
                  {/* Each Product In The Above Category */}
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        ))}
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