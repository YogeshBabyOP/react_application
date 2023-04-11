import './App.css';
import React from 'react'
import Home from './components/Basics/Home'
import Resource from './components/Basics/getResource';
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './components/Basics/Navbar';
import MenuCard from './components/Basics/MenuCard';
import './components/Basics/style.css'
// import baby from "../public/images/babyyyyy.png"

 

const App = () => {
	return (

		<>
		
		<Router>
{/* 
<nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src="images/babyyyyy.png"
        alt="Logo"
        width={25}
        height={25}
        className="d-inline-block align-text-top"
      />
      Technical Pdf
    </a>
	<div className="navbar" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
		<Link to="/">
			<label id = "b1" className="btn btn-outline-success" htmlFor="btnradio1"> Home </label>
		</Link>

      
    </li>
    <li className="nav-item">

	<Link  to="/Resource">
		<label id="b2" className="btn btn-outline-success" htmlFor="btnradio1"> Resource </label>
	</Link>
      
    </li>

 </ul>
</div>

  </div>
  

</nav> */}


<nav id="opop" className="navbar navbar-expand-lg bg-black">
<a style={{"color" : "white"}} className="navbar-brand" href="#">
      {/* <img
        src="images/op.png"
        alt="Logo"
        width={28}
        height={35}
        className="d-inline-block align-text-top"
      /> */}
      Technical Pdfs
    </a>
  <div className="container-fluid">
    
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
		<Link id="link" to="/">
			<li id = "b1" className="nav-link visited"> Home </li>
		</Link>
        
		<Link id="link" to="/Resource">
			<li id = "b1" className="nav-link visited"> Resource </li>
		</Link>
       
		</ul>
    </div>
  </div>
</nav>

				


			<Routes>
				<Route exact path='/' element={< Home/>}></Route>
				<Route exact path='/Resource' element={< Resource />}></Route>
			</Routes>

		</Router>

		</>
	);
}

export default App;
