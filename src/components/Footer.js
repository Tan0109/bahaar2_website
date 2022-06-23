import React from 'react';
import Logo from '../logo.png';
import '../App.css';

const Footer = () => {
    return (
        <footer className="container-fluid text-center" id="points" style={{padding:"14px", color:"rgb(20,28,67)", background:"rgb(241, 241, 241)"}}>
            <b>Copyright &copy; 2022 | <img src={Logo} style={{maxWidth:"90px"}}/> | Developed by - Ample eBusiness</b>
        </footer>
    )
}

export default Footer;