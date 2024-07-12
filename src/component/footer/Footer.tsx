import React from 'react';

import styles from './Footer.module.scss';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.container}>
            <p>© 2024 Baz'Art de Frédérique Dune. Créé par Dune Nathalie. Tous droits réservés.<br/>
            Les œuvres présentées sur ce site sont protégées par le droit d'auteur. Toute reproduction, représentation, modification, publication, transmission, ou dénaturation des œuvres de Dune Frédérique, de quelque manière que ce soit et sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de l'artiste. Pour toute demande d'autorisation ou information, veuillez contacter BazArtDeFred@gmail.com.</p></div>
    );
};

export default Footer;