import React from 'react';
import OmTab from '../omtab/OmTab';
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
export default OmItem;