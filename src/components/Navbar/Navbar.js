import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => { 

const [showMobileNav,setShowMobileNav] = useState('');


return(

<div className="container-fluid shadow">
      <div className="row align-items-center">
        <div className="logo col-lg-3 d-flex justify-content-between align-items-center">
          <h2 className="text-danger">LOGO</h2>
          <div className="burger" onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}>
            <i className="fa fa-bars fs-2" aria-hidden="true"></i>
          </div>
        </div>
        <nav className="col-lg-9 text-end" style={{ display: showMobileNav && "block" }}>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
		<NavLink exact activeClassName="active" to="/x">x</NavLink>
		 <NavLink exact activeClassName="active" to="/y">y</NavLink>
        </nav>
      </div>
    </div>

)
}

export default Navbar