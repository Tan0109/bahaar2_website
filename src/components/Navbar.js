import React from 'react';
// import {Link} from "react-router-dom";
import Logo from '../logo.png';
//import  MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className='align-items-center'><a className="navbar-brand" href="#myPage"><img alt="icon.jpg" src={Logo} className='img-fluid' style={{width:"120px"}}/></a></div>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#pricing">OUR TEAM</a></li>
                    <li><a href="#services">TECHNOLOGIES</a></li>
                    <li><a href="" onClick={()=>{window.open("http://75.101.238.55:8000/useradmin/?next=/")}}>LOGIN</a></li>
                    <li><button className='btn-danger' style={{padding:"10px", borderRadius:"7px", marginRight:"20px"}} onClick={() => {window.location.href = "#contact"}}>REQUEST A DEMO</button></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;