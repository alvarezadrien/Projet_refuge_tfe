import React, { useState } from 'react';
import '../Inscription.css';

const Inscription = () => {
    const [formData, setFormData] = useState({
        name: "",
        prenom: "",
        email: "",
        telephone: "",
        adresse: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        prenom: false,
        email: false,
        telephone: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    // Gestion des changements de champs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Gestion du focus des champs
    const handleFocus = (field) => {
        setFocused({
            ...focused,
            [field]: true,
        });
    };

    // Gestion du blur (perte de focus) des champs
    const handleBlur = (field) => {
        if (!formData[field]) {
            setFocused({
                ...focused,
                [field]: false,
            });
        }
    };

    // Afficher ou cacher le mot de passe
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Données soumises:", formData);

        // Réinitialiser le formulaire après soumission
        setFormData({
            name: "",
            prenom: "",
            email: "",
            telephone: "",
            adresse: "",
        });
        setFocused({
            name: false,
            prenom: false,
            email: false,
            telephone: false,
        });
    };

    return (
        <div className='container_page_inscription'>
            <h1 className='h1_inscription'>Vos données personnelles</h1>
            <div className='container_form_inscription'>
                <form onSubmit={handleSubmit}>
                    {/* Champ Nom */}
                    <div className="input_container_inscri">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlur("name")}
                            required
                        />
                        <div className='img_cat_form'>
                            <img
                                src="/img/contact-cat.png"
                                alt="Icone nom"
                                style={{ marginLeft: "8px", verticalAlign: "middle" }}
                            />
                        </div>
                        <label htmlFor="name" className={focused.name || formData.name ? 'focused' : ''}>
                            Nom
                        </label>
                    </div>

                    {/* Champ Prénom */}
                    <div className="input_container_inscri">
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            onFocus={() => handleFocus("prenom")}
                            onBlur={() => handleBlur("prenom")}
                            required
                        />
                        <label htmlFor="prenom" className={focused.prenom || formData.prenom ? 'focused' : ''}>
                            Prénom
                        </label>
                    </div>

                    <div className="input_container_inscri">
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            required
                        />
                        <label htmlFor="dob">Date de naissance</label>
                    </div>

                    {/* Champ Adresse */}
                    <div className="input_container_inscri">
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            onFocus={() => handleFocus("adresse")}
                            onBlur={() => handleBlur("adresse")}
                            required
                        />
                        <label htmlFor="adresse" className={focused.adresse || formData.adresse ? 'focused' : ''}>
                            Adresse
                        </label>
                    </div>

                    {/* Champ Téléphone */}
                    <div className="input_container_inscri">
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            onFocus={() => handleFocus("telephone")}
                            onBlur={() => handleBlur("telephone")}
                            pattern="^[0-9]{10}$"
                            title="Veuillez entrer un numéro de téléphone de 10 chiffres."
                            required
                        />
                        <label htmlFor="telephone" className={focused.telephone || formData.telephone ? 'focused' : ''}>
                            Téléphone
                        </label>
                    </div>

                    {/* Champ Email */}
                    <div className="input_container_inscri">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlur("email")}
                            required
                        />
                        <label htmlFor="email" className={focused.email || formData.email ? 'focused' : ''}>
                            Email
                        </label>
                    </div>

                    <div className="input_container_inscri">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="password_container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Entrez votre mot de passe"
                            />
                            <button
                                type="button"
                                className="toggle_password"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <img src="/img/affiche.png" alt="Afficher" width={25} className='img_affiche' />
                                ) : (
                                    <img src="/img/cacher.png" alt="Cacher" width={25} className='img_cacher' />
                                )}
                            </button>
                        </div>

                        <div className="input_conditions">
                            <label htmlFor="terms">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                />
                                J'accepte les conditions générales
                            </label>
                        </div>
                    </div>

                    <button className="button_envoyer_inscri" type="submit">
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inscription;