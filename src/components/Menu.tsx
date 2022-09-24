import React from "react";

interface MenuProps {
    // children?: JSX.Element | JSX.Element[] | string | string[];
    children?: React.ReactChild | React.ReactChild[] | string | string[];
}

// const Menu: React.FC<MenuProps> = ( props ) => {
const Menu: React.FC<MenuProps> = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    );
}
export default Menu;