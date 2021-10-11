import React from 'react';
import nameit from './nameit.svg'
import './Header.css'



const Header = ({headTitle,headerExpanded}) => {
    return (
        <div className="head-container">
            <img src=
            {nameit} alt="Header" className={`head-image ${headerExpanded ?'head-image-expanded':'head-image-contracted'}` }  />
            <h1 className={`head-text ${headerExpanded ?'head-text-expanded':'head-text-contracted'}`}>{headTitle}</h1>
        </div>
    )
}


export default Header;