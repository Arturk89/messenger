import React from 'react'
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const HeaderRightComponent = () => {
    return (
        <div className="headerRight">
            <div className="headerRight__account">
                <Avatar />
                <p className="headerRight__account__name">Artur</p>
            </div>
                <AddIcon />
                <NotificationsIcon />
                <ArrowDropDownIcon />
        </div>
    )
}

export default HeaderRightComponent
