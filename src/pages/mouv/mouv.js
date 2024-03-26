import React from 'react'
import { Link } from "react-router-dom";
import './mouv.css'
function mouv() {
  return (
    <div className='container-left'>
      <h1>Phase de Mouvement</h1>
      <p>La phase de Mouvement se décompose en 4 sous phases</p>
        <h5 className='h5'>1. Déclarer les Charges & Réactions aux Charges</h5>
        <p>Le jouer actif déclare ses charges, en indiquant lesquelles de ses unités chargent, et quelle unité ennemie chacune charge:</p>
        <ul>
            <li>Une unité qui charge doit pouvoir tracer une ligne de vue vers l'unité qu'elle veut charger</li>
            <li>Les unités en colonne de Marche, engagés en combat ou en fuite ne peuvent pas charger</li>
        </ul>
        <p><strong>Réactions aux charges :</strong>Quand elle est chargé, une unité peut déclarer une réaction à la charge:</p>
    <ul>
        <li><strong>Tenir sa position :</strong> L'unité s'apprête à recevoir la charge</li>
        <li><strong>Tenir sa position & Tirer :</strong> L'unité utilise ses armes de tir contre l'unité en charge. On ne peut pas déclarer cette réaction si la distance entre les unités est inférieur à la caractéristique de Mouvement de l'unité qui charge.</li>
        <li><strong>Fuite :</strong> L'unité fuit directement à l'opposé de l'unité en charge :
        <ul>
            <li>Faites pivoter l'unité sur son centre afin qu'elle soit orientée a l'opposé du centre de l'unité en charge.</li>
            <li>Après avoir pivoté, l'unité effectue un mouvement de fuite.</li>
            <li>Si une unité est déjà en fuite, elle doit déclarer cette réaction (notez qu'une unité ne peut pas effectuer plus d'une réaction aux charges par phase )</li>
            </ul>
        </li>
    </ul>


    <h5 className='h5'>2. Mouvements de Charge</h5>
    <p>Pour excuter une charge :</p>
    <p><strong>Déterminer la Portée de Charge :</strong> Jetez deux D6 et défaussez le plus bas pour obtenir le jet de Charge. Le jet de Charge, ajouté à la caractéristique de Mouvement de l'unité, donne la portée de Charge.</p>
    <p><strong>Déplacer l'unité en Charge :</strong> Si la portée de charge suffit à atteindre l'unité cible, effectuez un mouvement de charge.</p>
    <p><strong>Chrages Ratées :</strong> Si la portée de charge ne suffit pas à atteindre l'unité cible, l'unité en charge se déplace droit vers la cible d'une distance égale au jet de Charge.</p>
    <p><strong>Charger un Ennemi en Fuite :</strong> Quand on charge un ennemi en fuite:
    <ul>
        <li>Si l'unité en charge entre en contact avec l'unité en fuite, elles effectue une roue pour s'aligner et l'unité en fuite est détruit.L'unité en charge peut effectuer un test de Commandement pour tenter de se reformer</li>
        <li>Si l'unité en charge n'entre pas en contact avec l'unité en fuite, elle avance de l'intégralité de sa portée de charge.</li>
    </ul>
    </p>


    <h5 className='h5'>3. Mouvements Obligatoires</h5>
<p>Tous les mouvements obligatoires se font à cette sous phase.</p>


<h5 className='h5'>4. Mouvements Restants</h5>
<p>Les unités restantes peuvent se déplacer à cette sous phase.</p>
<p>Les Sorciers peuvent lancer des sorts de Transfert.</p>
<p><strong>Marche Forcée :</strong> Une unité en marche forcée peut doubler sa caractéristique de Mouvement( ou la tripler en colonne de marche) et peut faire une roue pour changer de direction, mais pas d'autres mavoeuvres. Pour effectuer une marche forcée à 8" d'une unité ennemie, il faut réussir un test de Cd.</p>
<p><strong>Manoeuvres : </strong>Durant son mouvement, une unité peut exécuter une des manoeuvres suivantes( notez qu'aucune figurine ne peut se déplacer de plus du double de sa caractéristique de mouvement):
<ul>
    <li><strong>Roue : </strong>Le front de l'unité avance tout en pivotant sur un de ses coin avant</li>
    <li><strong>Réorientation : </strong>Toutes les figurines demeurent en place mais pivotent de 90° ou 180° pour faire face au côté ou à l'arrière. Pour chaque tranche de 90° dont elle pivote, une unité utilise un quart de sa caractéristique de mouvement.</li>
    <li><strong>Recul : </strong>L'unité divise sa caractéristique de mouvement et recule.</li>
    <li><strong>Mouvement latéral : </strong>L'unité divise sa caractéristique de mouvement et se déplace latéralement.</li>
    <li><strong>Redresser les Rangs : </strong>L'unité utilise la moité de sa caractéristique de mouvement pour ajouter ou retirer jusqu'à cinq figurines à son rang frontal.</li>
    <li><strong>Reformation : </strong>L'unité utilise l'intégralité de sa caractéristique de mouvement pour exécuter une Réorientation en pivotant sur son centre tout en redressant ses rangs selon le besoin, ou bien pour adopter une nouvelle formation.</li>

</ul>
</p>

    <h2>La suite du tour</h2>
         <Link to="/strat" className='link'> 1. La Phase de Stratégie</Link>
         <Link to="/tir" className='link'> 3. La Phase de Tir</Link>
        <Link to="/combat" className='link'> 4. La Phase de Combat</Link>
    </div>
  )
}

export default mouv