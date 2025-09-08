import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header() {
    return (
        <>
            <div className="header">
                <div className='title'>
                    <h2>Gobika</h2>
                </div>
                <div className="menu">
             <ul>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to= "/about">About</Link></li>
                        <li><HashLink smooth to= "/#contact">  Contact </HashLink></li>
                    
                </ul>
                </div>
                <div style={{marginRight:"30px"}}>
                    <p>Portfolio</p>
                </div>
            </div>
        
        
        </>
    );
}
export default Header;