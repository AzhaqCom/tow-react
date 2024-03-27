import React, { useState, useEffect } from 'react';
import omData from '../../om.json';
import regleData from '../../regle.json';
import './objetm.css';

function Objetm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOms, setFilteredOms] = useState(omData);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterOms(event.target.value);
    };

    const filterOms = (searchTerm) => {
        const filtered = omData.filter(om => om.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredOms(filtered);
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
            <div className='container-om'>
                {filteredOms.map(om => (
                    <OmItem key={om.name} data={om} />
                ))}
            </div>
        </div>
    );
}

function OmItem(props) {
    const { data } = props;

    return (
        <div className="objet-item" >
            <div className='objet-header'>
            <h4 className="objet-name">{data.name}<span className='objet-desc'> ({data.type})</span></h4>
            <p className="objet-desc">{data.points}pts</p>
            </div>
            
            
            <p className="objet-desc">{data.description}</p>
            {data.type==='Arme' ? (<OmTab data={data} />) : <p className="objet-effect">{data.effet}</p> }
           

        </div>
    );
}

function OmTab(props) {
    const { data } = props;

    return (
        <table className='tableom'>
            <thead>
                <tr><th>P</th><th>F</th><th>PA</th><th>Règle</th></tr>
            </thead>
            <tbody>
                <tr >
                    <td>{data.stats.range}</td>
                    <td>{data.stats.strength}</td>
                    <td>{data.stats.armour_piercing}</td>
                    <td>{data.stats.special_rules.map((rule, index) => (<RulePopup ruleName={rule} />))}</td>
                </tr>
            </tbody>
            <tfoot>{data.notes && (<tr><td colSpan={4}>Notes : {data.notes}</td></tr>)}</tfoot>
        </table>
    );
}

function RulePopup({ ruleName }) {
    const [showPopup, setShowPopup] = useState(false);
    const [ruleEffect, setRuleEffect] = useState('');

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        const lowercaseRuleName = ruleName.toLowerCase().split('(');
        
        const rule = regleData.find(rule => rule.nom.toLowerCase().includes(lowercaseRuleName[0]));
        console.log(lowercaseRuleName[0])
        if (rule) {
            setRuleEffect(rule.effet);
        } else {
            setRuleEffect("Aucun effet trouvé pour cette règle spéciale.");
        }
    }, [ruleName]);

    return (
        <>
            <div className="omrule-content" onClick={togglePopup}>{ruleName}</div>
            {showPopup && (
                <div className="popup" onClick={togglePopup}>
                    <div className="popup-content">
                        <h3 className='omrule-title'>{ruleName}</h3>
                        <p className='omrule-effect'>{ruleEffect}</p>
                    </div>
                </div>
            )}
        </>
    );
}




export default Objetm;
