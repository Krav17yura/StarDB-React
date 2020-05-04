import React from 'react';
import { Link } from 'react-router-dom'

import './app-header.css';

const AppHeader = () => {
    return (
        <div className="header d-flex">
            <h3><Link to='/'>StarDB</Link></h3>
            <ul className="d-flex">
                <li><Link to='/people'>People</Link> </li>
                <li><Link to="/planet">Planets</Link> </li>
                <li><Link to='/starships'>Starships</Link> </li>
            </ul>
        </div>
    );
};

export default AppHeader;