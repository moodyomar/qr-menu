import { ProductCard, ProductModal, Title } from '../'
import Grid from '@material-ui/core/Grid'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './ProductsArea.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ProductsArea = ({ contentLng, endPoint }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <div className='ProductsArea' style={{ padding: '15px' }}>
      {selectedProduct && <ProductModal product={selectedProduct} contentLng={contentLng} endPoint={endPoint} onClose={() => setSelectedProduct(null)} />}

      <Grid container spacing={2} style={styles.flex} rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
        {contentLng.categories.map((category, i) => (
          <React.Fragment key={i}>
            {/* Each Category Title */}
            <Title category={category} />
            <Grid container spacing={2} style={{ flexWrap: 'nowrap', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
              {category.products.map((product, i) => (
                <Grid item xs={6} md={4} lg={3} key={i} style={{ flex: '0 0 auto', maxWidth: '50%', margin: '1px' }}>
                  {/* Each Product In The Above Category */}
                  <Link onClick={() => setSelectedProduct(product)}>
                    <ProductCard product={product} endPoint={endPoint} wspDetails={contentLng.whatsappDetails} />
                    </Link>

                </Grid>
              ))}
            </Grid>
            <div className="btn-area">
            <Link to={`/${category.name.slice(0, -3)}`}><button className='showAllBtn'>{contentLng.showBtn} <ArrowBackIosIcon /></button></Link>
            </div>
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