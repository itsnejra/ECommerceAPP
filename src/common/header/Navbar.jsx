import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <header className='header'>
        <div className='container d_flex'>
            <div className='catgrories d_flex'>
                <span className='fa-solid fa-border-all'></span>
                <h4>Categories <i className='fa fa-chevron-down'></i></h4>
            </div>
            <div className='navlink'>
                <ul className='nav'>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/pages'>pages</Link>
                    </li>
                    <li>
                        <Link to='/user'>user account</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>vendor account</Link>
                    </li>
                    <li>
                        <Link to='/track'>track my order</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header> 
    </>
  );
};

export default Navbar;