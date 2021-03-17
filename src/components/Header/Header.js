import React from 'react'
import HeaderLeftComponent from './components/HeaderLeftComponent';
import HeaderMiddleComponent from './components/HeaderMiddleComponent';
import HeaderRightComponent from './components/HeaderRightComponent';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <HeaderLeftComponent />
            <HeaderMiddleComponent />
            <HeaderRightComponent />
        </div>
    )
}

export default Header
