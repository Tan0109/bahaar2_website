import React from 'react';
// import Team from '../team.png'
import Tanvee from '../tanvee.jpg';
import Yash from '../yashSir.jpg';
import Taha from '../taha.jfif';
import Vinod from '../vinod.jpg';

const Pricing = () => {
    return (
        <div id="pricing" className="container-fluid">
            <div className="text-center">
                <h2 style={{color:"white"}} id="display3">Team Highlights</h2>
                <h4 style={{color:"white"}} id="client">Say Hi to the Team of Developers</h4>
            </div>
            <div className="row slideanim">
                <div className="col-sm-6 col-md-3 col-xs-12">
                    <div className="panel panel-default text-center">
                        
                            <h2 style={{fontWeight:"bolder", color:"#303030"}} id="client">Project Manager</h2>
                            <hr  style={{width:"80%"}}/>
                        <div className="panel-body">
                            <img alt="icon.jpg" src={Yash} className="img-thumbnail" style={{borderRadius:"50%", maxHeight:"200px"}}/>
                            <h4 id="client"><strong>Mr. Yashwant Dhakad</strong></h4>
                            <h5><strong> Project Mentor</strong></h5>
                            <small>“10+ years of experience in  Business Development and Start-up sector”</small>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12">
                    <div className="panel panel-default text-center">
                        
                            <h2 style={{fontWeight:"bolder", color:"#303030"}} id="client">Technical Manager</h2>
                            <hr  style={{width:"80%"}}/>
                        <div className="panel-body">
                            <img alt="icon.jpg" src={Vinod} className="img-thumbnail" style={{borderRadius:"50%", maxHeight:"200px"}}/>
                            <h4 id="client"><strong>Vinod Dhakad</strong></h4>
                            <h5><strong>Senior Software Developer</strong></h5>
                            <small>“Company's top technological executive and Head of Engineering Team.”</small>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12">
                    <div className="panel panel-default text-center">
                        
                            <h2 style={{fontWeight:"bolder", color:"#303030"}} id="client">Front-End Developer</h2>
                            <hr  style={{width:"80%"}}/>
                        <div className="panel-body">
                            <img alt="icon.jpg" src={Tanvee} className="img-thumbnail" style={{borderRadius:"50%", maxHeight:"200px"}}/>
                            <h4 id="client"><strong>Tanvee Gandhi</strong></h4>
                            <h5><strong>Web Developer</strong></h5>
                            <small>“Expertise in User Interface and User Experience with React-Javascript.”</small>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12">
                    <div className="panel panel-default text-center">
                        
                            <h2 style={{fontWeight:"bolder", color:"#303030"}} id="client">Back-End Developer</h2>
                            <hr  style={{width:"80%"}}/>
                        <div className="panel-body">
                            <img alt="icon.jpg" src={Taha} className="img-thumbnail" style={{borderRadius:"50%", maxHeight:"200px"}}/>
                            <h4 id="client"><strong>Taha Mustafa</strong></h4>
                            <h5><strong> Rest API and Backend Developer</strong></h5>
                            <small>“Expert in Backend Technology Development, Database normalization and API Development.”</small>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pricing;