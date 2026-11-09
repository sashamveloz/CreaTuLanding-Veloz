import CartWidget from './CartWidget'
import { Link } from 'react-router'
import logo from '../assets/logo.jpeg'

function NavBar (){
    return (
    <nav className="navbar">
        <Link to="/" className='title'>
            <img className="logo" src={logo} alt='Logo marca'/>
        <h1>MiTienda</h1>
        </Link>

        <ul className="sections">
        <li><Link to="/categoria/cuidado_de_la_piel">Cuidado de la piel</Link></li>
        <li><Link to="/categoria/maquillaje">Maquillaje</Link></li>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
        <li><Link to="/categoria/fragancias">Fragancias</Link></li>
        </ul>

        
        <CartWidget/>

    </nav>
    );
};

export default NavBar;
