import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        {/* <h2>About Company Page</h2><br />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br /><button className="btn btn-default btn-lg">Get in Touch</button> */}
                     
                     <div class="about">
                     <div class="image">
                      <img src="female led.jpg" alt=""></img>
                      <h1 class="image-txt">Female-led businesses represent a massive opportunity</h1>
                       <div class="text">
                      <p>“Female-led businesses represent a massive opportunity. 
                           With women making 80% of household purchasing decisions, 
                           we are betting on early stage female founded companies with billion dollar potential.”
                       </p>
                      </div>
                      </div>
                     </div>
                     
                    </div>
                    {/* <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div> */}
                </div>
            </div>
            <div class="center-image">
                <img src="plus.jpg" alt="" ></img>
            </div>
            <div class="center-text">
                <h3>Halogen Ventures is a Los Angeles, California based Venture Capital</h3>
                <h3>fund focused on investing in early stage consumer technology</h3>
                <h3>startups with a female in the founding team.</h3>
            </div>
            {/* <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                    <img src="plus.jpg" height="50px" width="50px" ></img>
                        <h2>Our Values</h2><br />
                        <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div> */}
            <div class="sc" width="1200px">
            <div class="transparent-img">
            <img src="https://static.showit.co/400/DARCEErNSR66DkSnGAu8Cw/shared/layer_1387.png" alt=""></img>
            </div>
            <div class="bg-text">
            <h1>“Female-led businesses represent a massive opportunity. 
                With women making 80% of household purchasing decisions, 
                we are betting on early stage female founded 
                companies with billion dollar potential.”
            </h1>
            </div>
            </div>

            <div class="bg-text2">
                <h1>What We Look For</h1>
                <h2>Halogen Ventures invests in pre-seed, seed and series 
                    A companies creating groundbreaking technologies and 
                    products in the consumer space.
                </h2>
            </div>

            <div class="bg-text3">
               <div class="bg-txt">
                <h1>What We Offer</h1>
                <p>
                We are hands on and support our founders through their full lifecycle.
                 We help them build their networks, get brand exposure, hire great talent, 
                 raise follow-on rounds and find their path to acquisition or IPO.
                </p>
                </div>
            </div>
        </Fragment>
    )
};

export default About;
