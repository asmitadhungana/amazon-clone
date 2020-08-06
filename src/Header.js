import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppinBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}, dispatch] = useStateValue(); //returns [state, dispatch] | we further used object destructuring to fetch {basket} state form state

    console.log(basket);

    return (
        <nav className= "header">
            {/*logo on the left -> img */}
            <Link to = "/">
            <img 
            className = "header__logo" 
            src = "https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt = "amazon logo" 
            />
            </Link>

            {/*Search box */}
            <div className="header__search">
            <input type = "text" className="header__searchInput" />
            <SearchIcon className = "header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">

                {/* 1st link */}
                <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="header__option__lineOne">Hello</span>
                <span className="header__option__lineTwo">Sign In</span>
                </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__option__lineOne">Returns</span>
                <span className="header__option__lineTwo"> & Orders</span>
                </div>
                </Link>

                {/* 3rd link */}
                <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="header__option__lineOne">Your</span>
                <span className="header__option__lineTwo">Prime</span>
                </div>
                </Link>
            </div>

            {/* 4th link */}
            <Link to= "/checkout"  className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping basket icon */}
                    <ShoppinBasketIcon />
                    {/* Number of items in the basket */}
                    <span className="header_option__lineTwo header__basketCount">
                        {basket?.length} 
                    </span>
                    
                </div>
            </Link>


        </nav>
    )
}

export default Header
