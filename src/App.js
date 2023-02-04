import './App.css'
import {BottomNavbar, Hero, Navbar,ProductsArea,ProductsSlider} from './components'


const App = () => { 

return(

<div className='App' style={{textAlign:"center"}}>
<Navbar/>
<Hero/>
<ProductsSlider/>
<ProductsArea/>
<BottomNavbar/>
</div>

)
}

export default App