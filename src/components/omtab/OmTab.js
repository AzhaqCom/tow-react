import React from 'react';
import RulePopup from '../rulepopup/RulePopup';
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
                    <td>{data.stats.special_rules.map((rule, index) => (<RulePopup key={rule} ruleName={rule} />))}</td>
                </tr>
            </tbody>
            {data.notes && (<tfoot><tr><td colSpan={4}>Notes : {data.notes}</td></tr></tfoot>)}
        </table>
    );
}

export default OmTab;