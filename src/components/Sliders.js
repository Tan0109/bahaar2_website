import React from 'react';
import Ss1 from '../banner.jpg';
import Ss2 from '../banner2.jpg';
import Ss3 from '../banner3.jpg';
import '../App.css';

export default function Sliders() {
  return (
    <div className="container-fluid" style={{padding:"0", display:"block"}}>
  
  <div id="myCarousel" className="carousel slide" data-ride="carousel" data-pause="none">
    {/* <!-- Indicators --> */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    
    <div className="jumbotron" style={{position:"absolute", width:"100%", background:"none",zIndex:"1", margin:"0"}}> 
        <p id="display" >AI-Powered <br /> Real Time Object Detection System</p>
        <p id="display2">Unleash the power of Computer Vision with automated object recognition.<br />JOIN US to give your brand huge sales hike!</p>
        <p id="requestbutton"><button className='btn btn-danger' onClick={() => { window.location.href = "#contact" }}>Request a Demo</button></p>
        
        
      </div>
    



    {/* <!-- Wrapper for slides --> */}
    <div className="carousel-inner text-center">
      <div className="item active sliders">
        <img src={Ss1} alt="Los Angeles" style={{ width:"100%"}} className='img-fluid d-block w-100'/>
      </div>

      <div className="item">
        <img src={Ss2} alt="Chicago" style={{ width:"100%"}} className='img-fluid d-block w-100' />
      </div>
    
      <div className="item">
        <img src={Ss3} alt="New york" style={{ width:"100%"}} className='img-fluid d-block w-100' />
      </div>
    </div>

    {/* <!-- Left and right controls --> */}
    {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a> */}
  </div>
</div>
  )
}
