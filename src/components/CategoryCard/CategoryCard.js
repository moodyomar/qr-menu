import './CategoryCard.css'


const CategoryCard = ({category:{name,image}}) => { 
    return(
      <div className='CategoryCard' style={{
        backgroundImage:`url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 'auto'
        }}>
          <strong style={{ color: '#fff', padding: '10px' }}>{name}</strong>
        </div>
      </div>
    )
  }
  
export default CategoryCard