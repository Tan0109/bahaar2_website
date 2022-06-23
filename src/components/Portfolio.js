import React from 'react';
import Ss1 from '../ss1.png';
import Ss2 from '../ss2.png';
import Ss3 from '../ss3_replace.png';
import Test from '../iframe2.mp4';

const Portfolio = () => {
    return (
        <div id="portfolio" style={{background:"#a2b8ff"}} className="container-fluid text-center">
            <h2 id="display3" style={{color:"#303030"}}>Our Portfolio</h2><br />
            <h4 id="client" style={{color:"#303030"}}>What we have created</h4>
            <div className="row text-center slideanim">
            <div className="col-sm-12">
                    <div className="thumbnail" style={{display:"flex", paddingBottom:"0"}}>
                        <video style={{maxWidth:"50%", height:"auto", float:"left"}} src={Test} autoPlay playsInline muted loop></video>
                        
                        <p className='py-5' style={{color:"grey", width:"-webkit-fill-available"}} >
                            <h5 style={{fontWeight:"bolder"}}>AT A GLANCE</h5><br />
                            <p id="points" style={{color:"grey"}}>Its AI Powered code lets the machine identify its respective objects.
                            <br /><br />These can be identified in any generic video which contains this object.
                            <br /><br />It uses the theory of Bounding Box to capture image.
                            </p>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="thumbnail">
                        <img src={Ss2} alt="Screenshots" />
                        <p id="points" style={{color:"grey"}}>Fast inference while maintaining a base level of accuracy.</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="thumbnail">
                        <img src={Ss1} alt="Screenshots" />
                        {/* <p><strong>New York</strong></p> */}
                        <p id="points" style={{color:"grey"}}>Image classification with Neural Network Prediction</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="thumbnail">
                        <img src={Ss3} alt="Screenshots"/>
                        {/* <p><strong>San Francisco</strong></p> */}
                        <p id="points" style={{color:"grey"}}>Widespread applicability in Real-World Scenarios</p>
                    </div>
                </div>
            </div><br />
        </div>

    )
}

export default Portfolio;