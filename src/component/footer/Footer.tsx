import React from 'react';

import styles from './Footer.module.scss';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.container}>
            <p>© 2024 Baz'Art de Frédérique Dune. Créé par Dune Nathalie. Tous droits réservés.</p>
        </div>
    );
};

export default Footer;