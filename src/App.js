import './App.css'
import {BottomNavbar, Navbar,ProductsArea,ProductsSlider,Title} from './components'


const App = () => { 

return(

<div className='App'>
<Navbar/>
<ProductsSlider/>
<Title/>
<ProductsArea/>
<BottomNavbar/>
</div>

)
}

export default App