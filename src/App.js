import './App.css'
import {BottomNavbar, Navbar,ProductsArea,ProductsSlider} from './components'


const App = () => { 

return(

<div className='App' style={{textAlign:"center"}}>
<Navbar/>
<ProductsSlider/>
<ProductsArea/>
<BottomNavbar/>
</div>

)
}

export default App