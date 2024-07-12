import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {

    return (
        <div className={styles.container}>
            <h1>Baz'Art de Frédérique Dune</h1>
        </div>
    );
};
export default Header;