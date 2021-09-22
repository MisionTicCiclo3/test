import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from 'media/border collie.jpg';
import loboSiberiano from 'media/lobo_siberiano.jpg';
import logo from 'media/dog_animal_icon_141845.ico';

function Index() {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="imagen" className="logo" />
          </li>
          <li>
            <button className="button mainbutton">Nuevo post</button>
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
          <h1>Razas de Perros</h1>
          <ul className="breedcardcontainer">
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={loboSiberiano} />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;
