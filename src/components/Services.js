import React from 'react';
import Icon1 from '../icon1.png';
import Icon2 from '../icon2.png';
import Icon3 from '../icon3.jpg';
import Icon4 from '../icon4.png';
import Icon5 from '../icon5.png';
import Icon6 from '../icon6.png';

const Services = () => {
    return (
        <div id="services" className="container-fluid text-center">
            <h2 style={{color:"white"}} id="display3">HOW DID WE DO IT?</h2>
            <h4 style={{color:"white"}} id="client">We used a cocktail of top used frameworks to serve you with the best experience!</h4>
            <br />
            <div className="row slideanim ">
                <div className="col-sm-4">
                    <span><img alt="icon.jpg" src={Icon1} />
                    </span>
                    <h4 style={{color:"white"}}>TENSORFLOW</h4>
                    <p id="points" style={{color:"grey"}}>Tensorflow has rich set of comprehensive, flexible ecosystem of tools, libraries and community resources.</p>
                </div>
                <div className="col-sm-4">
                <span><img alt="icon.jpg" src={Icon2}/>
                    </span>
                    <h4 style={{color:"white"}}>REACT JS</h4>
                    <p id="points" style={{color:"grey"}}>React JS lets us develop user-friendly, fast, and responsive single page applications</p>
                </div>
                <div className="col-sm-4">
                <span style={{background:"white"}}><img alt="icon.jpg" src={Icon3} />
                    </span>
                    <h4 style={{color:"white"}}>DJANGO</h4>
                    <p id="points" style={{color:"grey"}}>Django is a highly scalable, SEO optimized and highly secure, which makes it an in-demand Framework</p>
                </div>
            </div><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                <span ><img alt="icon.jpg" src={Icon4} style={{background:"white"}}/>
                    </span>
                    <h4 style={{color:"white"}}>SQLITE</h4>
                    <p id="points" style={{color:"grey"}}>SQLite is a cross-platform DBMS, easy to learn and use, and provides large number of API's</p>
                </div>
                <div className="col-sm-4">
                <span ><img alt="icon.jpg" src={Icon5} />
                    </span>
                    <h4 style={{color:"white"}}>BOOTSTRAP</h4>
                    <p id="points" style={{color:"grey"}}>Bootstrap is a free front-end framework for faster and responsive web development</p>
                </div>
                <div className="col-sm-4">
                <span ><img alt="icon.jpg" src={Icon6} />
                    </span>
                    <h4 style={{color:"white"}}>PYTHON</h4>
                    <p id="points" style={{color:"grey"}}>Python offers versatile nature that supports both front-end and back-end development.</p>
                </div>
            </div>
        </div>

    )
}

export default Services;