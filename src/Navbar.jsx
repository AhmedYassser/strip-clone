import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context'

function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const temp = e.target.getBoundingClientRect();
        const center = (temp.left + temp.right) / 2;
        const bottom = temp.bottom + 5;
        openSubmenu(page, { center, bottom });
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('Link-BTN')) {
          closeSubmenu();
        }
      };

    return <>
        <nav onMouseOver={handleSubmenu}>
            <div className="Nav-Container">
                <div className="Logo-Section">
                    <img src={logo} className='nav-logo' alt='' />
                    <button className='btn toggle-btn' onClick={openSidebar} >
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='Link-BTN' onMouseOver={displaySubmenu}>products</button>
                    </li>
                    <li>
                        <button className='Link-BTN' onMouseOver={displaySubmenu}>developers</button>
                    </li>
                    <li>
                        <button className='Link-BTN' onMouseOver={displaySubmenu}>company</button>
                    </li>
                </ul>
                <button className="btn sign-InBTN">
                    Sign In
                </button>
            </div>
        </nav>
    </>
}

export default Navbar;
