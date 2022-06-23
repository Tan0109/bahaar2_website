import React, {useRef} from 'react';
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [fname, SetFName] = useState('');
    const [lname, SetLName] = useState('');
    const [mail, SetMail] = useState('');
    const [contact, SetContact] = useState('');
    const [brand, SetBrand] = useState('');
    const [desc, SetDesc] = useState('');
    const [talk, SetTalk] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_0uxt01e', 'template_vsku91d', form.current, 'user_6j0KwCEe4pGxoRx2vbR8G')
        .then((result) => {
            console.log(result.text)
            console.log(result)
            document.getElementById('message').innerHTML = 'Thank you so much for reaching out to us! We will get back to you soon!';
            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset();
    }

    const handleFName = (e) => {
        SetFName(e.target.value);
        // console.log(fname);
    }
    const handleLName = (e) => {
        SetLName(e.target.value);
    }
    const handleMail = (e) => {
        SetMail(e.target.value);
    }
    const handleContact = (e) => {
        SetContact(e.target.value);
    }
    const handleBrand = (e) => {
        SetBrand(e.target.value);
    }
    const handleDesc = (e) => {
        SetDesc(e.target.value);
    }
    const handleTalk = (e) => {
        SetTalk(e.target.value);
    }
    const form = useRef();
    // const sendEmail = (subject,to,body)=>{
    
    //     /* SmtpJS.com - v3.0.0 */
    //     let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    
    //     Email.send({
    //         SecureToken : process.env.SECURE_TOKEN, // write your secure token
    //         To : "tanveeg1@gmail.com", // to include multiple emails you need to mention an array
    //         From : process.env.EMAIL_HOST,
    //         Subject : subject,
    //         Body : body
    //     })
    //     .then(message=>{
    //         // alert(message);
    //     });
    
        
    // }
    const DemoSubmit = (e) => {
        if(fname.length === 0 || lname.length === 0 || mail.length === 0 || contact.length === 0 || brand.length === 0){
            alert('Please fill all feilds.');
        }
        if(contact.length !== 10){
            alert('Contact number should consist of 10 digits!');
        }
        else{
            var jsonFile = {"Firstname":fname, "Lastname":lname, "ContactNo":contact, "Mail":mail, "Brand":brand, "Desc":desc, "Talk": talk};
            console.log(jsonFile);
            sendEmail(e);
        }
    }
    return (
        

        <div id="contact" className="container-fluid" style={{background:"#a2b8ff"}}>
            <h2 className="text-center text-dark">CONTACT</h2>
            <div className="row">
                
                <div className="col-lg-2 slideanim"></div>
                <div className="col-lg-8 slideanim"  style={{background:"#ececec", paddingTop:"50px", paddingBottom:"50px"}}>
                    <form ref={form} onSubmit={DemoSubmit}>
                <h2 className='text-center' style={{color:"black" ,letterSpacing:"3px"}}>Want to see us in your inbox? <br /> Post a Demo Request here!</h2>
                    <div className="row">
                        <div className="col-lg-6 form-group"><b>FirstName</b>
                        <TextField label="Firstname" name='fname' value={fname} onChange={handleFName} variant="outlined" id="Firstname" fullWidth type="text" required />
                        </div>
                        <div className="col-lg-6 form-group"><b>LastName</b>
                        <TextField label="Lastname" name='lname' value={lname} onChange={handleLName} variant="outlined" id="Lastname"type="text" fullWidth required /> 
                        </div>
                        <div className="col-lg-6 form-group"><b>Contact Number</b>
                        <TextField label="Contact Number" name='contact' value={contact} onChange={handleContact} fullWidth variant="outlined" id="Contact" type="number" pattern="" required />
                        </div>
                        <div className="col-lg-6 form-group"><b>Email</b>
                        <TextField label="EmailID" name='mail' value={mail} onChange={handleMail} variant="outlined" fullWidth id="email" type="email" required />
                        </div>
                        <div className="col-lg-12 form-group"><b>Website Name</b>
                        <TextField multiline name='brand' value={brand} onChange={handleBrand} label="Website/Brand Name" variant="outlined" id="website" fullWidth type="text" required />
                        </div>
                        <div className="col-lg-12 form-group"><b>Website Description</b>
                        <TextField multiline name='desc' value={desc} onChange={handleDesc} label="Website/Brand Description" fullWidth variant="outlined" id="companydescription" />
                        </div>
                        <div className="col-lg-12 form-group"><b>What do you want to talk to us about?</b>
                        <TextField multiline name='talk' value={talk} onChange={handleTalk} label="Tell us something about your Brand..." fullWidth variant="outlined" id="companydescription" />
                        </div>
                    </div>
                    <div className="col-sm-12 form-group text-center">
                        <input type="button" value="SUBMIT" className='btn btn-danger' onClick={DemoSubmit} style={{fontSize:"larger"}}/>
                        <p id="message" style={{fontWeight:"bolder"}}></p>
                    </div>
                    </form>
                </div>
                <div className='className="col-sm-2 slideanim"'></div>
            </div>
        </div>
    )
}

export default Contact;