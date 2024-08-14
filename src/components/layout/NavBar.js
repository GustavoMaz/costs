import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/newproject">Novo projeto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar