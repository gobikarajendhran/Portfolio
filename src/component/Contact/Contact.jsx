import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css';
import { faEnvelope, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Contact() {
    return (
        <>
            <hr />
            <div id="contact" className="contactform">
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h2 id="h2">Get in Touch</h2>
                        <p id="p">I'd like to hear form you!</p>
                        <p id="p">If you have any inquiries or just want to say hi!!,please use the contact form!..</p>
                        <p id="p"> {<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px" }} />}
                            gobikarajendran@gmail.com </p>
                        <p id="p">{<FontAwesomeIcon icon={faPhone} />}8870787296</p>
                        <div id="fonts">
                            <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: "20px" }} />
                            <a href="https://www.linkedin.com/in/gobika-rajendran-5a51582a4/" target="_blank" style={{color:"inherit"}}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "20px" }} /></a>
                            <a href="https://github.com/gobikarajendhran" target="_blank" style={{color:"inherit"}}>
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "20px" }} />
                            </a>
                        </div>

                    </div>


                    <div className="form">

                        <h3> Name</h3>
                        <input id="inputbox" type="text" placeholder="e.g,jhon" />
                        <h3>Email</h3>
                        <input id="inputbox" type="email" placeholder="e.g,tamil.@gmail.com" />
                        <h3>Mobile Number</h3>
                        <input id="inputbox" type="text" placeholder="e.g,1234567890" /><br></br>
                        <div style={{ paddingTop: "10px" }}>
                            <h3> Your Message </h3>
                            <textarea style={{ padding: "30px" }} className='textarea' /> </div>
                        <div style={{ paddingTop: "20px" }}>
                            <input id="inputbox1" type="button" value="Send"
                                onClick={() => {
                                    alert("Your enquieries are Submitted");
                                }} /></div>
                    </div>

                </div>

            </div>
            <hr />
        </>
    );
}
export default Contact;