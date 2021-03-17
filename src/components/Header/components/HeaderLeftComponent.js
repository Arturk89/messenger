import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const HeaderLeftComponent = () => {
    return (
        <div className="headerLeft">
            <div className="headerLeft__img">
                <img src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png" alt="logo facebook" />
            </div>
            <div className="headerLeft__search">
                <SearchIcon />
                <input type="text" placeholder="Szukaj na Facebooku" />
            </div>
        </div>
    )
}

export default HeaderLeftComponent
