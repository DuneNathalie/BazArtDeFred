import React from 'react';

import styles from './Contact.module.scss';

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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
            <div className={styles.icons}>
                <a href="https://www.facebook.com" className={styles.link_faceboock}>
                    <FaFacebook color={"#252712"} size={30} /></a>
                <a href="https://www.instagram.com" className={styles.link_inst}>
                    <FaSquareInstagram color={"#252712"} size={30} />
                </a>

            </div>
        </div>
    );
};

export default Contact;