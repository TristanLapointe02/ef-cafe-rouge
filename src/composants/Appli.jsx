import './Appli.scss';
import logo from '../images/logo.png';
import Menu from './Menu';

export default function Appli() {
  return (
    <div className="Appli">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>Café rouge</h3>
          <h5>Cuisine combodgienne - Saveurs d'ailleurs</h5>
        </div>
      </header>
      <Menu/>
      <footer>
        <div className="adresse">1234 rue Fournier, Shefford, Québec J7Y 1B4</div>
        <div className="tel">+1 (321) 987 6543</div>
      </footer>
    </div>
  );
}
