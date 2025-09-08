import './SkillsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faPython, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


function SkillsCard() {
    return (
        <div style={{padding:"30px"}}>
            <h2 id="title1">Craft Tools :</h2>
            <div className='box1'>
                <h2>
                    {<FontAwesomeIcon icon={faHtml5} />}
                    HTML
                </h2>

                <h2>
                    {<FontAwesomeIcon icon={faCss3} />}
                    CSS
                </h2>
                <h2> {<FontAwesomeIcon icon={faSquareJs} />}
                    JavaScript</h2>
                <h2> {<FontAwesomeIcon icon={faReact} />}
                    React</h2>
            </div>
            <h2 id="title2">Style Craft :</h2>
               <div className='box2'>
           <h2>Bootstrap</h2>
            <h2>MUI</h2>
            <h2>Daisy UI</h2>
            <h2>Tailwind Css</h2>
            </div>
            <h2 id="title3">Future Stack :</h2>
            <div className='box3'>
                <h2> { <FontAwesomeIcon icon={faPython}/>}Python</h2>
                <h2> { <FontAwesomeIcon icon={faDatabase}/> }SQL</h2>
                
            </div>

          <h2 id="title4">Foundations :</h2>
          <div className='box4'>
                <h2> TypeScript</h2>
                <h2>Excel</h2>
            </div>




        </div>
    );
}
export default SkillsCard;