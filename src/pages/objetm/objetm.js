import React, { useState } from 'react';
import './objetm.css';
import omData from '../../om.json';
import OmItem from '../../components/omitem/OmItem';

function Objetm({ faction }) { // Ajoutez la prop "faction"
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

    // Function to group objects by faction
    const groupByFaction = () => {
        const groupedOms = {};
        filteredOms.forEach(om => {
            if (groupedOms[om.faction]) {
                groupedOms[om.faction].push(om);
            } else {
                groupedOms[om.faction] = [om];
            }
        });
        return groupedOms;
    };

    // Render the objects grouped by faction if faction is null or not defined
    // Otherwise, render objects only for the specified faction
    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Rechercher un objet.."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            
                {faction ? (
                    <div className='faction-container'>
                        
                        {filteredOms
                            .filter(om => om.faction === faction)
                            .map(om => (
                                <OmItem key={om.name} data={om} />
                            ))}
                    </div>
                ) : (
                    Object.entries(groupByFaction()).map(([faction, oms]) => (
                        <div key={faction} className='faction-container'>
                            <h2 className='title-faction'>{faction}</h2>
                            {oms.map(om => (
                                <OmItem key={om.name} data={om} />
                            ))}
                        </div>
                    ))
                )}
           
        </div>
    );
}

export default Objetm;
