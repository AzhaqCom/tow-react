import React from 'react'
import { Link } from "react-router-dom";
import './home.css'
function home() {
  return (
    <div className='container-left'>
      <h1>Résumé d'un tour</h1>
      <ol>
        <li > <Link to="/strat" className='link'> La Phase de Stratégie</Link></li>
        <li > <Link to="/mouv" className='link'> La Phase de Mouvement</Link></li>
        <li > <Link to="/tir" className='link'> La Phase de Tir</Link></li>
        <li > <Link to="/combat" className='link'> La Phase de Combat</Link></li>
      </ol>
      <h2>Petite aide rapide</h2>
      <h4>Jet de touche au tir</h4>
      <table className='tableau-touche' cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr><td><strong>capacité de tir</strong></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
        <tr><td><strong>Jet de tir d'un D6</strong></td><td>6+</td><td>5+</td><td>4+</td><td>3+</td><td>2+</td></tr>
        </tbody>
      </table>
      <div className='malus-touche'>
        <h4>Malus à la touche</h4>
        <ul>
          <li>Se déplacer et Tirer -1</li>
          <li>Tirer à longue Portée -1</li>
          <li>Tenir sa Position et Tirer -1</li>
          <li>Cible Derrière un couvert léger -1</li>
          <li>Cible Derrière un couvert lourd -2</li>
        </ul>
      </div>
      <h4>Jet de touche au cac</h4>
      <table className='tableau-touche' cellPadding={0} cellSpacing={0}>
        <thead>
          <tr><td>A\T</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>4+</td><td>4+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td></tr>
          <tr><td>2</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td></tr>
          <tr><td>3</td><td>2+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>5+</td><td>5+</td><td>5+</td><td>5+</td></tr>
          <tr><td>4</td><td>2+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>5+</td><td>5+</td></tr>
          <tr><td>5</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td></tr>
          <tr><td>6</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td></tr>
          <tr><td>7</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td><td>4+</td></tr>
          <tr><td>8</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td><td>4+</td></tr>
          <tr><td>9</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>3+</td><td>3+</td><td>4+</td><td>4+</td></tr>
          <tr><td>10</td><td>2+</td><td>2+</td><td>2+</td><td>2+</td><td>3+</td><td>3+</td><td>3+</td><td>3+</td><td>3+</td><td>4+</td></tr>
        </tbody>
      </table>

      
      <div className='tableau-bless'>
        <h4>Tableau de blessure</h4>
        <table >
          <tbody>
          <tr className='bold'><td>F/E</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
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
       
          </tbody>
         </table>
      </div>
      <div className='resultat-combat'>
        <h4>Tableau de Résultat du Combat</h4>
        <table>
          <tbody>
          <tr><td className='bld'>Blessures non sauvegardées</td><td>1 point chacune</td></tr>
          <tr><td className='bld'>Bonus de Rang</td><td>+1 point/rang</td></tr>
          <tr><td className='bld'>Bannière</td><td>+1 point</td></tr>
          <tr><td className='bld'>Grande Bannière</td><td>+1 point</td></tr>
          <tr><td className='bld'>Attaque de flanc</td><td>+1 point</td></tr>
          <tr><td className='bld'>Attaque de dos</td><td>+2 points</td></tr>
          <tr><td className='bld'>Position dominante</td><td>+1 point</td></tr>
          <tr><td className='bld'>Carnage</td><td>+1 point/blessure en excès</td></tr>
          <tr><td className='bld'>Autre bonus</td><td>Selon les cas</td></tr>
          </tbody>
        </table>

      </div>

      <h4>Tableau des fiascos</h4>
      <table className='tableau-fiasco'  cellPadding={0} cellSpacing={0}>
        <tbody>
        <tr><td><strong>2D6</strong></td><td>Résultat</td></tr>
        <tr><td><strong>2-4</strong></td><td><strong>Cascade Dimensionnelle :</strong> Placez un gabarit de 5" csur le sorcier. Toute figurine sous le gabarit subit un touche de F10 avec PA -4</td></tr>
        <tr><td><strong>5-6</strong></td><td><strong>Déflagration calamiteuse :</strong> Placez un gabarit de 3" csur le sorcier. Toute figurine sous le gabarit subit un touche de F6 avec PA -2</td></tr>
        <tr><td><strong>7</strong></td><td><strong>Conjuration imprudente :</strong>Le Sorcier subit un touche de F4 avec PA -1</td></tr>
        <tr><td><strong>8-9</strong></td><td><strong>Pouvoir à peine contrôlé :</strong>Le sort est lancé, à sa valeur de lancement pour des tentatives de dissipation. Vous ne pouvez pas lancer d'autre sort pendant le reste du tour en cours</td></tr>
        <tr><td><strong>10-12</strong></td><td><strong>Drain de magie :</strong>Le sort est lancé avec une invocation parfaite. Vous ne pouvez pas lancer d'autre sort pendant le reste du tour en cours</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default home