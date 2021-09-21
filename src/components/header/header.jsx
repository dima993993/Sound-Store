import className from './header.module.css';
import BlockIcon from "./header_icon/block_icon";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={className.logo}>
                <NavLink to="/home">
                    <span>Sound </span>
                    <span>Store</span>
                </NavLink>
            </div>
            <BlockIcon />
        </header>
    )
}

export default Header;