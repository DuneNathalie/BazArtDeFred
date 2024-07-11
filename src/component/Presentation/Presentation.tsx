import React from 'react';

import styles from './Presentation.module.scss';

import author from '../../assets/user/author.jpg'

const Presentation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Baz'Art de Fred c'est quoi?</p>
            </div>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={author} alt='author' className={styles.image} />
                </div>
                <div className={styles.text}>
                    <p>
                        Ce Baz'Art, c'est moi ...<br /><br />
                        C'est le fruit de tant d'années de doutes , de créativité exacerbée, de passion pour la l'art, des couleurs, des matières , de ma spontanéité, des  structures et tant et tant et tant de choses encore.
                        Tant et tant qu'on me disait " Mais Fred, tu ne peux pas garder tout ça pour toi "
                        Ah bon ??
                        Ma philosophie de vie c'est la liberté, liberté d'être, de penser , d'agir, de créer , de partager et même, d'être critiquée 😉
                        Aujourd'hui je vous présente Moi dans tout ce que je suis, ce que je fais, ce que je propose.
                        Grande voyageuse, les rencontres, les connexions, les découvertes, les récoltes font parties intégrantes de ma vie.
                        J'utilise beaucoup le fruit de ces traversées dans le monde pour partager mes découvertes.<br /><br />Bienvenue chez moi, chez vous, chez nous , la vie est une oeuvre d'art, je vous partage quelques morceaux de la mienne 🙏</p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;