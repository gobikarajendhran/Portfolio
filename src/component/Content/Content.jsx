import './Content.css';
import AboutImage  from "../About/Aboutimage2.png";
import { useNavigate } from 'react-router-dom';
function Content() {

    const Navigate = useNavigate();
    return (
        
        <div className='background'>
            <img id="image" src={AboutImage}  />
            <h2>Hello!! I'm</h2>
            <h1>Gobika Rajendran</h1>
            
            <p id="para">'I'm a passionate <b> "Full Stack Developer</b>,skilled in Python"  and modern web technologies.
                I love building clean,efficient,and user-friendly applications.'</p>
            <div className='buttoncontainer'>
            <button onClick ={() => Navigate("/resume")} >View Resume</button>
              
           

            </div>
            </div>
       
    );
 
}
export default Content;