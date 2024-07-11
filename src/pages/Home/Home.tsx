import React from 'react';

import styles from './Home.module.scss';
import Tableaux from '../../component/Tableaux/Tableaux';
import Contact from '../../component/contact/Contact';
import Footer from '../../component/footer/Footer';
import Header from '../../component/Header/Header';
import Presentation from '../../component/Presentation/Presentation';

const Home: React.FC = () => {
    const handleNavigate = () => {
        console.log('naviger vers Acceuil');
    }

    return (
        <div className={styles.container}>
            <Header/>
            <Presentation/>
            <Tableaux />
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
