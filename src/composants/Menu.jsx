import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';

export default function Menu() {
  return (
    <div className="Menu">
      <div class="titre">
        <img alt="Entrées/Snacks" src={menuIconPlats} />
        <p>
          <span class="fr">ENTRÉES</span>
          ·
          <span class="en">SNACKS</span>
        </p>
      </div>
      <Plat 
        nom_fr="Rouleau de printemps, smoked-meat de MTL &amp; crevettes" 
        nom_en="Fresh spring rolls with MTL smoked meat &amp; shrimps"
        prix="6"
      />
      <Plat 
        nom_fr="Rouleaux impériaux de M. Wu (porc ou végé)" 
        nom_en="Mr. Wu’s imperial rolls (pork or vegetarian)"
        prix="7"
      />
      <Plat 
        nom_fr="Salade de papaye épicée" 
        nom_en="Spicy papaya salad"
        prix="9"
      />
    </div>
  );
}