import React, { useState } from 'react'
import RulesData from '../../regle.json';

function Regle() {
    const [searchTerm, setSearchTerm] = useState(''); // État pour stocker le terme de recherche
    const [filteredRules, setFilteredRules] = useState(RulesData); // État pour stocker les règles filtrées
    const [openRuleIndex, setOpenRuleIndex] = useState(null); // État pour stocker l'index de la règle ouverte

    // Fonction de gestion du changement de terme de recherche
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterRules(event.target.value); // Appeler la fonction de filtrage à chaque changement dans le champ de recherche
    };

    // Fonction de filtrage des règles en fonction du terme de recherche
    const filterRules = (searchTerm) => {
        const filtered = RulesData.filter(rule => rule.nom.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredRules(filtered);
    };

    // Fonction de gestion du clic sur un titre de règle
    const handleRuleClick = (index) => {
        setOpenRuleIndex(index === openRuleIndex ? null : index); // Ouvrir la règle si elle est fermée, sinon la fermer
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
            <div className='container-grid'>
                {filteredRules.map((rule, index) => (
                    <RuleItem key={rule.nom} data={rule} isOpen={index === openRuleIndex} onClick={() => handleRuleClick(index)} />
                ))}
            </div>
        </div>
    );
}

function RuleItem(props) {
    const { data, isOpen, onClick } = props;

    return (
        <div className="rule-item" onClick={onClick}>
            <h4 className="rule-title" >{data.nom}</h4>
            {isOpen && <p className="rule-effect">{data.effet}</p>}
        </div>
    );
}

export default Regle;
