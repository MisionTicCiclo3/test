import './styles/App.css';
import borderCollie from './media/border collie.jpg';
import loboSiberiano from './media/lobo_siberiano.jpg';
import logo from './media/dog_animal_icon_141845.ico';

function App() {
  return (
    <div className="App">
  <header>
<ul className="navbar">
  <li>
    <img src={logo} alt="Imagen" className="logo"/>
  </li>
  <li>
    <button className="button mainbutton">Nuevo Post</button>
  </li>
  <li>
    <div className="buscar">
      <input placeholder="Buscar una raza" />
      <i className="fas fa-search button iconoBusqueda"></i>
    </div>
  </li>
  <li>
    <button className="button secondarybutton">Login</button>
  </li>
  <li>
    <button className="button mainbutton">Registro</button>
  </li>
</ul>
  </header>
  <main>
    <section>
      <h1>Razas de perros</h1>
      <ul className="breedcardcontainer">
        <li className="breedCard">
          <div className="contenedorImagen">
            <img src={borderCollie} alt="Border Collie"/>
          </div>
          <span className="breedTitle">
            Border Collie
          </span>
        </li>
        <li className="breedCard">
          <div className="contenedorImagen">
            <img src={loboSiberiano} alt="Border Collie"/>
          </div>
          <span className="breedTitle">
            Lobo Siberiano
          </span>
        </li>
      </ul>
    </section>
    <section></section>
  </main>
  <footer>

  </footer>
    </div>
  );
}

export default App;
