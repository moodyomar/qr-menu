import { ProductCard, Title } from '../'
import Grid from '@material-ui/core/Grid'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import heContent from "../../json/content-hr.json"
import arContent from "../../json/content-ar.json"
import './ProductsArea.css'
import React from 'react'
import { Link } from 'react-router-dom';


const ProductsArea = ({language,endPoint}) => {

  const contentLng = language === 'Ar' ? arContent : heContent

  return (
<div className='ProductsArea' style={{ padding: '15px' }}>
  <Grid container spacing={2} style={styles.flex} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {contentLng.categories.map((category, i) => (
      <React.Fragment key={i}>
        {/* Each Category Title */}
        <Title category={category}/>
        <Grid container spacing={2} style={{ flexWrap: 'nowrap', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
          {category.products.map((product, i) => (
            <Grid item xs={6} md={4} lg={3} key={i} style={{ flex: '0 0 auto', maxWidth: '50%',margin:'10px' }}>
              {/* Each Product In The Above Category */}
              <ProductCard product={product} endPoint={endPoint} wspDetails={contentLng.whatsappDetails}/>
            </Grid>
          ))}
        </Grid>
        <div className="btn-area">
        <Link to={`/${category.route}`} state={{ category }}><button className='showAllBtn'>{contentLng.showBtn} <ArrowBackIosIcon/></button></Link>
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