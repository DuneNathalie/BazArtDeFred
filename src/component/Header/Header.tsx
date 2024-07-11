import React from 'react';


import styles from './Header.module.scss';

import logo from "../../assets/logo/logo.png";


const Header: React.FC = () => {
    const handlePopUp = () => {
        alert('En cours de construction');
    };

    return (
        <div className={styles.container}>
            <h1>Baz'Art de Frédérique Dune</h1>
            <div className={styles.menu}>
                <button onClick={handlePopUp}>
                    <h1>Menu</h1>
                    <img src={logo} alt="Logo " />
                </button>
            </div>
        </div>
    );
};
export default Header;