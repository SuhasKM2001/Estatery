import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css'
import {RiHomeSmile2Fill} from 'react-icons/ri';


function Navbar()
{
    return (
        <header>
            <nav className='Navbardesign'>
                <RiHomeSmile2Fill style={{ fill: '#675ecb'  }} size={25} className='Logoalign'/>
                <h2 className="LogoStyle">Estatery</h2>
                <ul className='List_styling'>
                    <li >
                       <Link to="/" className='List_substyling' >Rent</Link>
                    </li>

                    <li className='List_substyling'>Buy</li>
                    <li className='List_substyling'>Sell</li>
                    <li className='List_substyling'>Manage Property</li>
                    <li className='List_substyling'>Resources</li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;