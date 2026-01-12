import CartWidget from './CartWidget'
import logo from '../assets/logo.jpeg'

function NavBar (){
    return (
    <nav className="navbar">
        <div className='title'>
            <img className="logo" src={logo} alt='Logo marca'/>
        <h1>MiTienda</h1>
        </div>

        <ul className="sections">
        <li><a href="#">Cuidado de la piel</a></li>
        <li><a href="#">Maquillaje</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Fragancias</a></li>
        </ul>

        
        <CartWidget/>

    </nav>
    );
};

export default NavBar;