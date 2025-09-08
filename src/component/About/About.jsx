import './About.css';
import AboutImage from "../About/AboutImage2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFire, faPhone, faRoute, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>  <div className='topic'>
            <img id="img" src={AboutImage} />
            <h2 id="h2">Hello!!<br />
                Here's Who I'm & What I do</h2>
             </div>

            <div className='list'>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div className='about1'>
                        <h2>{<FontAwesomeIcon icon={faRoute} style={{ padding: "5px" }} />}Journey&Expertise :</h2>
                        <p>I'm a Physics graduate turned Full-Stack developer,<br />
                            passionate about creating web applications that <br />
                            combine logical thinking with creative solutions </p>
                    </div>

                    <div className='about2'>
                        <h2>{<FontAwesomeIcon icon={faUserGear} style={{ padding: "5px" }} />}Technical Skills :</h2>
                        <p>I specialize in Python,JavaScript,React,HTML and more.<br />
                            I focused on delevering clean code and efficient solutions</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "50px" }}>
                    <div className='about3'>
                        <h2>{<FontAwesomeIcon icon={faDumbbell} />}Strengths :</h2>
                        <p> <b>Quick learner</b>,problem solver,team player,and focused <br />
                            on delivering clean code and efficient solutions</p>
                    </div>

                    <div className='about4'>
                        <h2>{<FontAwesomeIcon icon={faFire} />}Passion :</h2>
                        <p>I love exploring new technologies and applying them to<br />
                            real-world projects that make an impact</p>
                    </div>
                </div>
            </div>

            <div style={{ padding: "50px" }}>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <div>
                        <h2>Phone</h2>
                        <h4>
                            {<FontAwesomeIcon icon={faPhone} />} 8870787296
                        </h4>

                    </div>
                    <div>
                        <h2>E-mail</h2>
                        <h4>
                            {<FontAwesomeIcon icon={faEnvelope} />} gobikarajendran@gmail.com</h4>
                    </div>
                    <div>
                        <h2>Follow me</h2>
                        <h4>
                            {<FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "20px" }} />}
                            {<FontAwesomeIcon icon={faInstagram} style={{ fontSize: "20px" }} />}
                            {<FontAwesomeIcon icon={faFacebook} style={{ fontSize: "20px" }} />}
                        </h4>
                    </div>
                </div>

            </div>




        </>
    );
}
export default About;