import React from 'react';

import { ImMenu3 } from "react-icons/im";

import styles from './Header.module.scss';

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
                    <ImMenu3 size={40}/>
                </button>
            </div>
        </div>
    );
};
export default Header;