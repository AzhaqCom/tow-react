import React from 'react'
import { Link } from "react-router-dom";
import './strat.css'
function strat() {
  return (
    <div className='mwith'>
      <div className='container-left'>
        <h1>Phase de Stratégie</h1>
        <p>La phase de Stratégie se décompose en 4 sous-phases.</p>
        <h5 className='h5'>1. Début du Tour</h5>
        <p>Résolvez les actions spéciales et/ou effectuez les tests à résoudre ou à effectuer au début du tour.</p>
        <h5 className='h5'>2. Commandement</h5>
        <p>Résolvez les aptitudes des personnages n'étant pas en fuite qui s'utilisent à la sous-phase de Commandement.</p>
        <h5 className='h5'>3. Conjuration</h5>
        <p>Les Sorciers contrôlés par le joueur actif peuvent lancer des sorts d'enchantement ou de maléfice.</p>
        <h5 className='h5'>4. Rallier les Troupes en Fuite</h5>
        <p>Le joueur actif tente de rallier ses unités en fuite. Celles qui échouent continuent à fuir.</p>


        <h2>La suite du tour</h2>
        <Link to="/mouv" className='link'> 2. La Phase de Mouvement</Link>
        <Link to="/tir" className='link'> 3. La Phase de Tir</Link>
        <Link to="/combat" className='link'> 4. La Phase de Combat</Link>
      </div>
    </div>
  )

}

export default strat