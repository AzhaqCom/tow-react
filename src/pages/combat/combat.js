import React from 'react'
import './combat.css'
import { Link } from "react-router-dom";
function combat() {
    return (
        <div className='container-left'>
            <h1>Phase de Combat</h1>
            <p>La phase de Combat se décompose en 4 sous phases</p>
            <h5 className='h5'>1. Choisir & Livrer les Combats (page 145)</h5>
            <h5 className='h5'>1.1 Choisir les combats & Déterminer qui peut combattre </h5>
            <p>Le joueur actif choisit l'ordre de résolution des combats. Chaque combat doit être résolu avant de passer au suivant. Chaque combat de résout dans l'ordre d'Initiative. Les figurines d'une unité en charge gagnent un bonus à leur Initiative pour le reste du tour, selon la distance parcourue :
                <ul>
                    <li><strong>Charger l'Arc Frontal d'un Ennemi :</strong> +1 en Initiative par pouce complet parcouru, jusqu'à un maximum de +3</li>
                    <li><strong>Charger l'Arc Latéral ou Arrière d'un Ennemi :</strong> +1 en Initiative par pouce complet parcouru, jusqu'à un maximum de +4</li>

                </ul>
                Chaque Figurine du rang combattant peut attaquer, bien que les figurines qui ne sont pas en contact socle à socle avec l'unité ennemie ne puissent effectuer qu'une attaque chacune, quelle que soit la valeur de leur caractéristique d'attaques.
            </p>
            <h5 className='h5'>1.2 Jet de Touche : </h5>
            <p>Faites un jet de touche pour chaque figurine attaquant en comparant sa capacité de combat à celle de la figurine cible :</p>
            <br></br>
            <table className='tableau-touche' cellpadding="0" cellspacing="0">
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
            <br></br>
            <h5 className='h5'>1.3 Jet de Blessure & Sauvegarde d'armure : </h5>
            <p>Pour chaque touche faites un jeu de blessure et un jet de sauvegarde d'armure</p>

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
            <br></br>
            <h5 className='h5'>1.4 Retrait des pertes : </h5>
            <p>On retire les pertes normalement du rang arrière de l'unité, pour representer les membres des rangs arrière s'avançant pour combler les brèches.
                Une figurine ne peut pas attaquer lors d'une phase à laquelle elle fait un pas en avant, comme décrit page 150.
            </p>
            <br></br>
            <h5 className='h5'>2. Calculer le Résultat du combat (page 151)</h5>

            <table className='combat'>
                <tr><td className='bld'>Blessures non sauvegardées</td><td>1 point chacune</td></tr>
                <tr><td className='bld'>Bonus de Rang</td><td>+1 point/rang</td></tr>
                <tr><td className='bld'>Bannière</td><td>+1 point</td></tr>
                <tr><td className='bld'>Grande Bannière</td><td>+1 point</td></tr>
                <tr><td className='bld'>Attaque de flanc</td><td>+1 point</td></tr>
                <tr><td className='bld'>Attaque de dos</td><td>+2 points</td></tr>
                <tr><td className='bld'>Position dominante</td><td>+1 point</td></tr>
                <tr><td className='bld'>Carnage</td><td>+1 point/blessure en excès</td></tr>
                <tr><td className='bld'>Autre bonus</td><td>Selon les cas</td></tr>
            </table>
        <br></br>
            <h5 className='h5'>3. Test de Moral (page 154)</h5>
            <p>Chaque unité du camp perdant doit effectuer un test de Moral. Pour ce faire, jetez 2D6 et modifiez le résultat en ajoutant la différence entre les scores de combat.
                Comparez le résultat à la caractéristique de Commandement de l'unité :
                <ul>
                    <li>Si le résultat du jet naturel est supérieur au Cd de l'unité, celle ci est démoralisée et fuit.</li>
                    <li> SI le résultat du jet naturel est inférieur ou égal au Cd de l'unité, mais que le résultat modifié est supérieur au Cd de l'unité, l'unité se Replie en Bon Ordre.</li>
                    <li>Si le résultat modifié est inférieur ou égal au Cd de l'unité, ou si le résultat est un double 1 naturel, l'unité Cède du Terrain.</li>
                </ul>
            </p>
            <h5 className='h5'>4. Suite & Poursuite  (page 156)</h5>
            <p>une fois les test de Moral effectués, mais avant que les unités du camp vaincu Cèdent du Terrain ou effectuent un jet de Fuite, les unités gagnant doivent décider ce qu'elles font ensuite:
                <ul>
                    <li><strong>Retenue & reformation :</strong> Une unité qui souhaite se retenir & se reformer effecture un test de commandement. En cas de réussite, l'unité reste où elle est et effectue une reformation gratuite, en cas d'échec, elle doit suivre ou poursuivre.</li>
                    <li><strong>Suivre :</strong> Si l'ennemi Cède du terrain, l'unité victorieuse avance pour se remettre en contact. Avant de suivre, une unité peut exécuter une manoeuvre de réorientation gratuite ( de 90° ou 180°).</li>
                    <li><strong>Poursuivre :</strong> Si l'ennemi se Replie en Bon Ordre ou fuit, l'unité victorieuse peut poursuivre comme décrit page 156</li>
                    <li><strong>Percée :</strong> Si une unité détruit totalement son ennemi, elle peut percer en exécutant un mouvement de poursuite droit devant.</li>

                </ul>
            </p>

            <h2>La suite du tour</h2>
            <Link to="/strat" className='link'> 1. La Phase de Stratégie</Link>
            <Link to="/mouv" className='link'> 2. La Phase de Mouvement</Link>
            <Link to="/tir" className='link'> 3. La Phase de Tir</Link>
        </div>
    )
}

export default combat