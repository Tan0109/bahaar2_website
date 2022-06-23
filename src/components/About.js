import React, { Fragment } from 'react';
import Mam from '../mam.jfif';
import Done from '@mui/icons-material/DoneOutline';
import Sliders from './Sliders';
import adverstisement from '../ad.mp4';

// import '../App.css';
// import CarouselSlider from './CarouselSlider';
// import Ss1 from '../ss1.PNG';
// import Ss2 from '../ss2.PNG';
// import Ss3 from '../ss3.PNG';

const About = () => {
    return (
        <Fragment>
            
            <div id="about" style={{ width:"100%",marginTop:"40px"}}>
            {/* <CarouselSlider /> */}
            {/* <Sliders /> */}
            <video src={adverstisement} style={{maxWidth:"100%", paddingTop:"15px"}} autoPlay playsInline muted loop></video>


            </div>



            <div className="center-text" style={{padding:"20px"}}>
                <div id="display3" style={{letterSpacing:"3px", color:"white"}}>Why Real Time Object Detection?</div>
                <p id='points'><Done />  Searching with a live camera can help users learn more about objects around them, whether it's an artifact at a museum or an item for purchase.</p>
                <p id='points'><Done />  The real-time recognition system will recognize multiple objects from an image and also make a boundary box around the object.</p>
                <p id='points'><Done />  It can be easily trained and deployed in a production system.</p>
                <p id='points'><Done />  This technology can help you to easily deal with business tasks by getting valuable insights automatically and in real-time.</p>
                <p id='points'><Done />  All that you need is a camera and custom software solution meeting your specific needs!</p>
            </div>

        <div className="container-fluid" style={{background:"#a2b8ff"}}>
            <div className="text-center">
                <h2 style={{color:"#303030"}} id="display3">Jouney to Bahar 2.0</h2>
            </div>
            <div className='row'>
                    <center><img alt="icon.jpg" src={Mam} className="img-thumbnail" style={{maxHeight:"200px", display:"flex"}}/>
                    <h3 style={{fontWeight:"bolder", color:"#303030"}} id="client">Bhavana Mittal</h3>
                            <hr  style={{width:"40%"}}/>
                    </center>     
                
                        <center><div className="fa" id="small" style={{color:"#303030",padding:"15px"}} >
                        Bhavana was a stay-at-home mom of four with very little time for in-store or online shopping. <br/>
                        She wanted to shop what she saw on TV or go on vacation to a place where her movie characters were living.<br/>
                        This inspired her to create Bahar 2.0 ! <br/>
                        Bahar is the season of spring! Bahar brings new beginnings to the world we live in! <br/>
                        Go in Bahar mode and click on an object you want to know more about on the screen. <br/>
                        Smile browsing! <br/>
                        Happy shopping! <br/> <br/>
                            
                        </div></center>
            
            </div> 
        </div>
        {/* <Sliders /> */}
        </Fragment>
    )
};

export default About;
