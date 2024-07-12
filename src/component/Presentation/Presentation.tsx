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
                        La vie est un chemin, qui m'a menée à exprimer librement tout ce qui m'anime et qui m'habite.<br /><br />
                        Aujourd'hui, je me présente à vous dans tout ce que je suis, ce que je fais, ce que je propose.<br /><br />
                        Ce baz'Art , c'est le fruit de beaucoup d'années de doutes , de passion, de créations intenses ,d'amour pour l'art, des couleurs, de la matière mais aussi, et surtout, des merveilleuses rencontres humaines que je fais.<br />
                        Ma spontanéité m'évite, maintenant , de me poser trop de questions.<br />
                        Je teste, expérimente et travaille mes conclusions.<br />
                        J'ai le goût des structures, des mains sales par l'oubli du temps qui passe, et tant de choses encore...<br /><br />
                        Le voyage, la rencontre, les mains dans la terre , les pieds dans la mer, les découvertes, font parties intégrantes de mon quotidien, ils me construisent.<br />
                        J'utilise le fruit de mes récoltes lors de mes voyages pour créer mes œuvres ; graver des souvenirs , des trouvailles , des moments.<br />
                        Les intégrer dans la matière est une manière pour moi de partager ces voyages.<br /><br />
                        La liberté d'être, d'exprimer, de sentir et ressentir est une philosophie de vie qui m'inspire au jour le jour.<br />
                        " L'art est partout, et surtout dans l'oeil de celui qui le regarde "...<br /><br />
                        Vous trouverez sur ce site ma galerie d'art, mais aussi mes créations artisanales.<br />
                        Je tiens d'ailleurs à remercier de tout coeur ma sœur Nathalie, pour la création du site, pour sa patience et sa grande compréhension ❤️<br />
                        Je tiens aussi à remercier ma famille et mes amis, qui me soutiennent depuis tant de temps, clin d'œil particulier pour mon courageux mari 😁<br /><br />

                        Le site étant en cours, je reviendrais vite vers vous pour plus d'informations.<br /><br />

                        Bienvenue dans mon monde, respirez, ressentez, et laissez vous porter.
                        Bienvenue chez vous, chez nous, la vie est une œuvre d'art, je vous partage quelques morceaux de la mienne 🙏</p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;