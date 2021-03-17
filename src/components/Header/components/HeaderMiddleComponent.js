import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import GamesIcon from '@material-ui/icons/Games';

const HeaderMiddleComponent = () => {
    return (
        <div className="headerMiddle">
            <HomeIcon />
            <OndemandVideoIcon />
            <StorefrontIcon />
            <PeopleOutlineIcon />
            <GamesIcon />
        </div>
    )
}

export default HeaderMiddleComponent
