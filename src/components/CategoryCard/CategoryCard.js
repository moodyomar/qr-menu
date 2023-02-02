import './CategoryCard.css'


const CategoryCard = ({category:{name,image}}) => { 

return(

<div className='CategoryCard' style={{backgroundImage:`url(${image})`
}}>
<span>{name}</span>
</div>

)
}

export default CategoryCard