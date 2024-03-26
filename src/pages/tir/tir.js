import React from 'react'
import { Link } from "react-router-dom";
import './tir.css'
function tir() {
    return (
        <div className='container-left'>
            <h1>Phase de Tir</h1>
            <p>La phase de Tir se décompose en 4 sous phases</p>
            <h5 className='h5'>1. Choisir l'unité & déclarer la cible </h5>
            <p>Une unité est choisie pour tirer et sa cible est déclarée.</p>

            <h5 className='h5'>2. Jet de touche </h5>
            <p>Pour voir si vos figurines touchent, effectuez un jet de touche en consultant le tableau ci-dessous, selon leur capacité de tir :</p>
            <table className='tableau-touche' cellpadding="0" cellspacing="0">
                <tr> <td><strong>capacité de tir</strong></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                <tr> <td><strong>Jet de tir d'un D6</strong></td><td>6+</td><td>5+</td><td>4+</td><td>3+</td><td>2+</td></tr>
            </table>
            <br></br>
            <p>Un ou plusieurs des modificateurs suivants peuvent s'appliquer à vos jets de touche :</p>
            <ul>
                <li>Se déplacer et Tirer -1</li>
                <li>Tirer à longue Portée -1</li>
                <li>Tenir sa Position et Tirer -1</li>
                <li>Cible Derrière un couvert léger -1</li>
                <li>Cible Derrière un couvert lourd -2</li>
            </ul>
            <h5 className='h5'>3. Jets de blessure & sauvegarde d'armure</h5>
            <p>Pour chaque touche, faites un jet de Blessure, en recoupant la Force de l'arme et l'Endurance de la cible sur le tableau ci dessous</p>
            <div className='tableau-bless'>
                <h4>Tableau de blessure</h4>
                <table >
                    <tr className='bold'><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
                    <tr><td className='bold'>1</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td><td>6+</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td className='bold'>2</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td><td>6+</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td className='bold'>3</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td><td>6+</td><td>-</td><td>-</td></tr>
                    <tr><td className='bold'>4</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td><td>6+</td><td>-</td></tr>
                    <tr><td className='bold'>5</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td><td>6+</td></tr>
                    <tr><td className='bold'>6</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td><td>6+</td></tr>
                    <tr><td className='bold'>7</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td><td>6+</td></tr>
                    <tr><td className='bold'>8</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td><td>6+</td></tr>
                    <tr><td className='bold'>9</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td><td>5+</td></tr>
                    <tr><td className='bold'>10</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>4+</td></tr>
                </table>
            </div>
            <p>Pour chaque blessure votre adversaire peut faire un jet de Sauvegarde d'armure (voir page 141)</p>

            <h5 className='h5'>4. Retrait des pertes & tests de Panique</h5>
            <p><strong>Retrait des pertes : </strong>Les blessures non sauvegardées sont appliquées à l'unité cible, chacune faisant perdre 1PV à une figurine. Une figurine réduite a 0PV est retirée comme perte.</p>
            <p><strong>Tests de Panique : </strong>Si, au cours d'une même phase de Tir une unité perd plus du quart (25%) des figurines qu'elle contenait au début de cette phase de Tir, elle doit immédiatement effectuer un test de Panique comme décrit page 160.</p>
            <h4>Tableau d'Incidents de Tir'</h4>
            <p>Si vous botenez un "Misfire" sur un dé D'Artillerie faite un jet d'incident</p>
            <br></br>
            <h5 className='h5'>Incidents de Tir de Catapultes</h5>
            <table className='tableau-touche' cellpadding="0" cellspacing="0">
                <tr> <td><strong>D6</strong></td><td><strong>Résultat</strong></td></tr>
                <tr> <td><strong>1</strong></td><td><strong>Détruite :</strong>La figurine est détruite et immédiatement retirée du jeu</td></tr>
                <tr> <td><strong>2-4</strong></td><td><strong>Défaillance :</strong>Les servants perdent 1 PV, la figurine rate son tir à ce tour et ne peut pas tirer avant la fin du prochain round.</td></tr>
                <tr> <td><strong>5-6</strong></td><td><strong>Twang :</strong>La figurine rate sont tir à ce tour</td></tr>
            </table>
            <br></br>

            <h5 className='h5'>Incidents de Tir des machines à poudre</h5>
            <table className='tableau-touche' cellpadding="0" cellspacing="0">
                <tr> <td><strong>D6</strong></td><td><strong>Résultat</strong></td></tr>
                <tr> <td><strong>1</strong></td><td><strong>Détruite :</strong>La figurine est détruite et immédiatement retirée du jeu</td></tr>
                <tr> <td><strong>2-4</strong></td><td><strong>Défaillance :</strong>Les servants perdent 1 PV, la figurine rate son tir à ce tour et ne peut pas tirer avant la fin du prochain round.</td></tr>
                <tr> <td><strong>5-6</strong></td><td><strong>Pschitt :</strong>La figurine rate sont tir à ce tour</td></tr>
            </table>
            <h2>La suite du tour</h2>
            <Link to="/strat" className='link'> 1. La Phase de Stratégie</Link>
            <Link to="/mouv" className='link'> 2. La Phase de Mouvement</Link>
            <Link to="/combat" className='link'> 4. La Phase de Combat</Link>
        </div>
    )
}

export default tir