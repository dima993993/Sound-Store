import className from './block_icon.module.css';
import searchIcon from './img/search.svg';
import basketIcon from './img/shopping-basket-solid.svg';
import heartIcon from './img/heart-regular.svg';
import {NavLink} from "react-router-dom";

const BlockIcon = () => {
    return (
        <div className={className.iconContainer}>
            <NavLink to="/search">
                <img src={searchIcon} alt="Search"/>
            </NavLink>
            <NavLink to="/basket">
                <span>
                    <img src={basketIcon} alt="Cart"/>
                </span>
                <span>Cart</span>
            </NavLink>
            <NavLink to="favorites">
                <span>
                    <img src={heartIcon} alt="Heart"/>
                </span>
                <span>Favorites</span>
            </NavLink>
        </div>
    )
}

export default BlockIcon;