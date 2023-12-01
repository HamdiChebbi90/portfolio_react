
import { Link } from 'react-router-dom';
import { FaReact, FaBars } from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import { useState } from 'react';
import './styles.scss';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }


 


    return (
    <div>
    
    <nav className="navbar">
    <div className="navbar__container">
    <Link to="/" className="navbar__logo">
        <FaReact />
    </Link>
    </div>
  
       
        <ul className='navbar__container__menu' style={{left: toggle ? "0" : "-100%"}}>
            <li className="navbar__container__menu__item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar__container__menu__item">
                <Link to="/about">About</Link>
            </li>
            <li className="navbar__container__menu__item">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="navbar__container__menu__item">
                <Link className="resume" to="/skills">Skills</Link>
            </li>
            <li className="navbar__container__menu__item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="navbar-icon" onClick={handleToggle}>
        {toggle ? <HiX size={10}/> : <FaBars size={10}/>}

        </div>
</nav>
    </div>
    )

}

export default Navbar;