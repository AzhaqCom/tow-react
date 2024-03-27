import React, { useState, useEffect } from 'react';
import regleData from '../../regle.json';
function RulePopup({ ruleName }) {
    const [showPopup, setShowPopup] = useState(false);
    const [ruleEffect, setRuleEffect] = useState('');

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        const lowercaseRuleName = ruleName.toLowerCase().split('(');
        
        const rule = regleData.find(rule => rule.nom.toLowerCase().includes(lowercaseRuleName[0]));

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

export default RulePopup