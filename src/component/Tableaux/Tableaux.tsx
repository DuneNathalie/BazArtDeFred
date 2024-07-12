import React from 'react';

import styles from './Tableaux.module.scss';

import Dummy_Data_tableau from "../../DummyData/DumyDataTableaux.js";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


const Tableau: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>LA GALERIE D'ART</p>
            </div>
            <div className={styles.tableau}>
                {Dummy_Data_tableau.map((item) => (
                    <div key={item.id}>
                        <Zoom>
                            <div className={styles.image}>
                                <img src={item.img} alt={`Slide ${item.id}`} className={styles.image} />
                            </div>
                        </Zoom>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.size}>{item.size}</p>
                    </div>
                ))}
            </div>
                <div className={styles.content}>
            <div className={styles.text}>
                <p>Tous mes tableaux ont une histoire, j'espère que ces histoires vous parleront.
                    Je serai heureuse de créer votre propre toile avec vos souvenirs, votre histoire  ( sable, coquillages, graines, feuilles ... Quelques fleurs de votre bouquet de mariage ... )<br/>
                    Toile avec des matières naturelles, contactez moi pour discuter de votre projet.</p>
            </div>
            <div className={styles.textnext}>
                <p>Bientôt des ateliers et stages seront proposés, à suivre ... 😉</p>
            </div>
            <div/>
            </div>
        </div>
    );
};

export default Tableau;