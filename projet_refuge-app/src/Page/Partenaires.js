import React from 'react';
import '../Partenaires.css';

// Tableau de logos pour une gestion dynamique
const logos = [
    "/img/logo_partenaires/logo_Nestle-Purina.jpg",
    "/img/logo_partenaires/logo_pedigree.png",
    "/img/logo_partenaires/logo-maxizoo.jpg",
    "/img/logo_partenaires/friskies-logo-comp.jpg",
    "/img/logo_partenaires/logo_nestle-good.jpg",
    "/img/logo_partenaires/whiskas-logo.png"
];

const Partenaires = () => {
    return (
        <div className='img_partenaires'>
            {/* Titre principal */}
            <h1 className='h1_partenaires'>Nos partenaires</h1>

            {/* Conteneur des logos */}
            <div className='container_logo_partenaires'>
                <ul className='img_logo'>
                    {/* Génération dynamique des logos */}
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <img 
                                src={logo} 
                                alt={`Logo partenaire ${index + 1}`} 
                                className='logo_image'
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Partenaires;