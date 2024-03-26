import React, { useState } from 'react';
import RulesData from '../../he_regle.json';
import './rule.css';

function Rule() {
    const [searchTerm, setSearchTerm] = useState(''); // État pour stocker le terme de recherche
    const [toggleAll, setToggleAll] = useState(false); // État pour activer ou désactiver l'affichage de toutes les règles
    const [filteredRules, setFilteredRules] = useState(RulesData.regle_special); // État pour stocker les règles filtrées

    // Fonction de gestion du changement de terme de recherche
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterRules(event.target.value); // Appeler la fonction de filtrage à chaque changement dans le champ de recherche
    };

    // Fonction de filtrage des règles en fonction du terme de recherche
    const filterRules = (searchTerm) => {
        const filtered = RulesData.regle_special.filter(rule => rule.nom.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredRules(filtered);
    };

    // Fonction de gestion du changement d'affichage de toutes les règles
    const toggleAllRules = () => {
        setToggleAll(!toggleAll);
        setSearchTerm(''); // Réinitialiser le terme de recherche lorsque l'utilisateur active ou désactive l'affichage de toutes les règles
        if (!toggleAll) {
            setFilteredRules(RulesData.regle_special); // Afficher toutes les règles si l'affichage de toutes les règles est activé
        }
    };

    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Rechercher une règle..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
        
            {filteredRules.map(rule => (
                <RuleItem key={rule.nom} data={rule} />
            ))}
        </div>
    );
}

function RuleItem(props) {
    const { data } = props;
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle); // Inverser l'état de toggle à chaque clic
    };

    return (
        <div className="rule-item">
            <h4 className="rule-title" onClick={handleClick}>{data.nom}</h4>
            {toggle && <p className="rule-effect">{data.effet}</p>} {/* Afficher l'effet uniquement si toggle est true */}
        </div>
    );
}

export default Rule;
