import React from 'react';
import honneurData from '../../honneur.json';

function HonneurItem() {
    return (
        <div className='container-honneur'>
            {honneurData.map((item, index) => (
                <div className="honneur-item" key={index}>
                    <div className='objet-header'>
                        <h3 className='objet-name'>{item.name}</h3>
                        {item.points >0 ? (<p className='objet-desc'>{item.points} pts</p>) : <p className='objet-desc'>gratuit</p> }
                        
                    </div>
                    <p className='objet-desc'>{item.description}</p>
                    <p className='objet-effect' >{item.effect}</p>
                </div>
            ))}
        </div>
    );
}

export default HonneurItem;
