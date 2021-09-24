import logo from 'media/dog_animal_icon_141845.ico';

const Header = () => {
    return(
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
        )
}

export default Header;