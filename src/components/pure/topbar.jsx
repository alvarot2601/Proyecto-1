import React from 'react';
import '../styles/topbar.css'

const Topbar = () => {
    return (
        <div className='topbar'>
            <img className='icon-logo' src='../../../public/Icon.svg' alt='' />
            <p className='text-logo'>unit converter</p>
        </div>
    );
}

export default Topbar;
