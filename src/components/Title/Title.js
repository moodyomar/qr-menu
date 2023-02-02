import './Title.css'


const Title = ({category:{name,desc}}) => { 

return(

<div className='Title'>
<h1>{name}</h1>
<p>{desc}</p>
</div>

)
}

export default Title