import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.jpeg'

function NavBar (){
    return (
    <nav className="navbar">
        <Link to="/" className='title'>
            <img className="logo" src={logo} alt='Logo marca'/>
        <h1>MiTienda</h1>
        </Link>

        <ul className="sections">
        <li><NavLink to="/categoria/cuidado_de_la_piel" end>Cuidado de la piel</NavLink></li>
        <li><NavLink to="/categoria/maquillaje" end>Maquillaje</NavLink></li>
        <li><NavLink to="/categoria/accesorios" end>Accesorios</NavLink></li>
        <li><NavLink to="/categoria/fragancias" end>Fragancias</NavLink></li>
        </ul>

        
        <CartWidget/>

    </nav>
    );
};

export default NavBar;
