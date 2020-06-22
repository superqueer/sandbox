import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.logo_image} src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png"></img>
            </div>
        </div>
    )
}

export default Header;