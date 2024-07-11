import React from 'react';
import styles from './Contact.module.scss';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Contact</p>
            </div>
            <div className={styles.mail}><p>BazArtDeFred@gmail.com</p></div>
            <div className={styles.text}>
                <p>Au plaisir de se rencontrer , Frédérique</p>
            </div>
        </div>
    );
};

export default Contact;