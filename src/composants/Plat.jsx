import './Plat.scss';

export default function Plat({nom_fr, nom_en, prix}) {
  return (
    <div className="Plat">
      <p class="fr">{nom_fr}</p>
      <p class="en">{nom_en}</p>
      <p class="prix">{prix}</p>
    </div>
  );
}