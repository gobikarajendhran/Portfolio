import { faCheck, faCheckSquare,  faEnvelope, faLightbulb, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Resume.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Resume() {
    return (
        <>
            <center>
                <div className="name">
                    <p id="text1">GOBIKA.R</p>
                    <h2>FRONTEND DEVELOPER</h2>

                </div>
                <div className="menu">
                    <p>
                        {<FontAwesomeIcon icon={faPhone} />}
                        8870787296
                    </p>
                    <p>{<FontAwesomeIcon icon={faEnvelope} />}gobikarajendhran@gmail.com</p>
                    <a href="https://www.linkedin.com/in/gobika-rajendran-5a51582a4/" target="_blank" style={{color:"inherit"}}>
                    <p>{<FontAwesomeIcon icon={faLinkedin} />} linkedin.com</p></a>
                </div>
            </center>
            <div style={{ padding: "90px" }}>
                <div className="maincontent">
                    <h2 ><u>CAREER OBJECTIVE</u></h2>
                    <p>Passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, with strong expertise in responsive web design. Eager to contribute to a collaborative team ,continuously learn new technologies, and deliver dynamic, user-friendly digital experiences.</p>
                </div>
                <hr />
                <div>
                    <h2><u>EDUCATION</u></h2>
                    <div className="clgname" >
                        <h4>B.Sc.Physics</h4>
                        <div className="clgdetails">
                            <p> A.V.V.M Sri pushpam College,Poondi,Thanjore ,Percentage-75.83%</p>
                            <p>2022-2025,<br />
                                Thanjore,TamilNadu
                            </p>

                        </div>


                    </div>
                    <div className="hsc">
                        <h4>HSC</h4>
                        <div className="shldetails">
                            <p>Government Girls Hr SEc School,Ayakkaranpulam-Percentage-66%</p>
                            <p>2021-2022,<br />
                                AKM,TamilNadu
                            </p>
                        </div>
                    </div>

                    <div className="sslc">
                        <h4>SSLC</h4>
                        <div className="shldetails1">
                            <p>Government Girls Hr Sec School,Ayakkaranpulam-Percentage-77.4%</p>
                            <p>2019-2020,<br />
                                AKM,TamilNadu
                            </p>

                        </div>
                    </div>

                </div>

           
                <hr />
                
            <div className="tech">

                <h2><u>TECHNICAL SKILLS</u></h2>
                <div className="flex">
                    <h2>Web Technologies : </h2>
                    <p> HTML5, CSS3, JavaScript</p>
                    </div>
                    <div className="flex">
                        <h2>Frameworks :</h2>
                        <p>React.js</p>
                    </div>
                <div className="flex">
                    <h2>Style Craft :</h2>
                    <p>Bootstrap,MUI,Tailwind Css,Daisy UI</p>
                </div>
                <div className="flex">
                    <h2>Foundations :</h2>
                    <p>Type Script</p>
                </div>
                <div className="flex">
                    <h2>Microsoft Office :</h2>
                    <p>Excel(Basic)</p>
                    </div>
                    
            </div>
                <hr />
                <div>
                    <h2>Primary Frontend Skills</h2>
                    <h3>React.js :</h3>
                    <div id="footerpara">
                        
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{fontSize:"15px"}} />}
                            Component-based architecture</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}State management with useState,useEffect</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Routing using react-router-dom</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Form handling and validation</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Conditional rendering and dynamic UI</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Reusable and modular components</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Responsive design integration</p>
                    </div>
                    <h3>CSS & Styling :</h3>
                    <div id="footerpara">

                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Flexbox and Grid Layout systems.</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Media Queries for device responsiveness.</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Positioning (relative,absolute,sticky).</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Transitions and animations for smooth UI.</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Utility-first frameworks : Tailwind CSS MUI,Bootstrap.</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Typography,spacing,and visual hierarchy.</p>
                        <p>{<FontAwesomeIcon icon={faCheckSquare} style={{ fontSize: "15px" }} />}Custom styling for cards,buttons,headers.</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <h2><u>PROJECTS</u></h2>
                </div>
                <h2>Personal portfolio Website :</h2>
                <p id="footerpara">Responsive and interactive website developed with <b>ReactJS,HTML,CSS,and JS.</b></p>
                <h2>Digital Resume Page :</h2>
                <p id="footerpara">Modern single-page resume with responsive UI built using HTML,CSS,and JS.</p>
                <h2>Physics Quiz Application :</h2>
                <p id="footerpara">JavaScript-based quiz app with dynamic questions and scoring functionality.</p>
                <h2>Frontend Mini Projects :</h2>
                <p id="footerpara">Implemented small projects to strengthen frontend skills.</p>
            
            <hr />
           
                <h2><u>STRENGTHS</u></h2>
                    <div>
                    <p id="footerpara">{<FontAwesomeIcon icon={faLightbulb} />}
                        Strong grasp of responsive design principles.</p>
                    <p id="footerpara"> {<FontAwesomeIcon icon={faLightbulb} />}Quick learner with a passion for clean,modular code.</p>
                    <p id="footerpara"> {<FontAwesomeIcon icon={faLightbulb} />}Effective communicator and team collaborator.</p>
                    <p id="footerpara"> {<FontAwesomeIcon icon={faLightbulb} />}Analytical mindset with attention to detail.</p>
                    </div>
                <hr />
                <h2> <u>EXTRAS</u>  </h2>
                <div id="footerpara">
                    <p>{<FontAwesomeIcon icon={faCheck} style={{fontSize:"15px"}} /> }Open to internships and entry-level roles</p>
                    <p>{<FontAwesomeIcon icon={faCheck} style={{ fontSize: "15px" }} />}Portfolio & GitHub available upon request</p>
                    <p>{<FontAwesomeIcon icon={faCheck} style={{ fontSize: "15px" }} />}Actively learning advanced React patterns and TypeScript</p>
                    <p>{<FontAwesomeIcon icon={faCheck} style={{ fontSize: "15px" }} />}Passionate about modern fonts (like Poppins) and authentic UI styling</p>
                    <p>{<FontAwesomeIcon icon={faCheck} style={{ fontSize: "15px" }} />}Languages Known: Tamil(native),English (intermediate)</p>

                </div>
            </div>

        </>
    );
}
export default Resume;