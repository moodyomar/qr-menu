import './CategoryCard.css'


const CategoryCard = ({catImg}) => { 

return(

<div className='CategoryCard' style={{backgroundImage:`url(${catImg})`
}}>
<span>שתיה קלה</span>
</div>

)
}

export default CategoryCard