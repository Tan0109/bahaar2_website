import React from 'react';

const Contact = () => {
    return (
        <div id="contact" class="container-fluid bg-grey">
            <h2 class="text-center">CONTACT Us</h2>
            <div class="form">
            <div class="con">
                  <h1>We want to help you succeed at what you do best</h1>
                  <p>Let's connect</p>
            </div>
            <div class="form-txt">
                    <p>PITCH SUBMISSIONS</p>
                    <p>We encourage and are open to pitch submissions.</p>
                    <p> In your description please include a link to your deck.</p> 
                    <p>Thanks for the opportunity to work with you.</p>
                    <div class="icon">
                        <a href=""></a>
                    </div>
            </div>
            <div class="form-m">
           <div class="col-sm-6 form-group"> <label for="uname"><b>FirstName</b></label>
            <input class="form-control" id="firstname" name="firstname" placeholder="FirstName" type="text" required />
            </div>
            <div class="col-sm-6 form-group">
            <label for="uname"><b>LastName</b></label>
            <input class="form-control" id="lastname" name="lastname" placeholder="LastName" type="text" required /> 
            </div>
            <div class="col-sm-6 form-group"> <label for="companyname"><b>companyname</b></label>
            <input class="form-control" id="companyname" name="companyname"  type="text" required />
            </div>
            <div class="col-sm-6 form-group">
            <label for="email"><b>email</b></label>
            <input class="form-control" id="email" name="email"  type="text" required /> 
            </div>
           <div class="col-sm-12 form-group">
           <label for="website"><b>Website</b></label>
            <input class="form-control" id="website" name="website" type="text" required /> 
           </div>
            <div class="col-sm-12 form-group">
            <label for="companydiscription"><b>Company discription</b></label>  
            <textarea class="form-control" id="companydiscription" name="companydiscription"  rows="5"></textarea><br />  
            </div>
            <div class="col-sm-12 form-group">
            <label for="about"><b>What do you want to talk to us about?</b></label> 
            <input class="form-control" id="about" name="about" type="text" required />
            </div>
            <div class="col-sm-12 form-group">
            <button class="btn btn-default pull-right" type="submit">Submit</button>
             </div>
            </div>
                </div>
            {/* <div class="row">
                <div class="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
                    <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                    <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
                </div>
                
                <div class="col-sm-7 slideanim">
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                        </div>
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                        </div>
                    </div>
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <button class="btn btn-default pull-right" type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    
    )
}

export default Contact;