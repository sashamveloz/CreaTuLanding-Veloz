import Item from './Item'
import { Link, useParams } from 'react-router'
import hidratanteCerave from '../assets/hidratanteCerave.jpg'
import protectorIsdin from '../assets/protectorIsdin.jpg'
import serumOrdinary from '../assets/serumOrdinary.webp'
import eyeCreamClinique from '../assets/eyeCreamClinique.webp'
import yslParfum from '../assets/yslParfum.webp'
import idoleParfum from '../assets/idoleParfum.webp'
import chParfum from '../assets/chParfum.webp'
import missDiorParfum from '../assets/missDiorParfum.webp'
import dysonAirwrap from '../assets/dysonAirwrap.jpeg'
import cepilloGuerlain from '../assets/cepilloGuerlain.jpeg'
import planchaGHD from '../assets/planchaGHD.jpeg'
import secadorPhillips from '../assets/secadorPhillips.webp'

const productos = [
    {
        id: 'locion_cerave',
        categoria: 'cuidado_de_la_piel',
        nombre: 'Loción Hidratante CeraVe',
        precio: 18.50,
        imagen: hidratanteCerave,
    },
    {
        id: 'protector_isdin',
        categoria: 'cuidado_de_la_piel',
        nombre: 'Protector solar Isdin',
        precio: 19.99,
        imagen: protectorIsdin,
    },
    {
        id: 'serum_ordinary',
        categoria: 'cuidado_de_la_piel',
        nombre: 'Serum The Ordinary',
        precio: 8.50,
        imagen: serumOrdinary,
    },
    {
        id: 'eye_cream_clinique',
        categoria: 'cuidado_de_la_piel',
        nombre: 'Crema Hidratante de ojos Clinique',
        precio: 30.29,
        imagen: eyeCreamClinique,
    },
    {
        id: 'ysl_libre_150ml',
        categoria: 'fragancias',
        nombre: 'Yves Saint Laurent, EDP Libre 150ml',
        precio: 150.59,
        imagen: yslParfum,
    },
    {
        id: 'lancome_idole_100ml',
        categoria: 'fragancias',
        nombre: 'Lancome, Idole 100ml',
        precio: 99.89,
        imagen: idoleParfum,
    },
    {
        id: 'carolina_herrera_good_girl_150ml',
        categoria: 'fragancias',
        nombre: 'Carolina Herrera, Good Girl 150ml',
        precio: 193.00,
        imagen: chParfum,
    },
    {
        id: 'dior_miss_dior_50ml',
        categoria: 'fragancias',
        nombre: 'Dior, Miss Dior 50ml',
        precio: 109.89,
        imagen: missDiorParfum,
    },
    {
        id: 'dyson_airwrap',
        categoria: 'accesorios',
        nombre: 'Dyson Airwrap',
        precio: 445.00,
        imagen: dysonAirwrap,
    },
    {
        id: 'cepillo_guerlain',
        categoria: 'accesorios',
        nombre: 'Cepillo Guerlain',
        precio: 170.00,
        imagen: cepilloGuerlain,
    },
    {
        id: 'plancha_ghd',
        categoria: 'accesorios',
        nombre: 'Plancha de pelo GHD',
        precio: 206.00,
        imagen: planchaGHD,
    },
    {
        id: 'secador_phillips',
        categoria: 'accesorios',
        nombre: 'Secador de pelo Phillips',
        precio: 213.00,
        imagen: secadorPhillips,
    },
];

const categorias = [
    { id: 'cuidado_de_la_piel', nombre: 'Cuidado de la piel' },
    { id: 'maquillaje', nombre: 'Maquillaje' },
    { id: 'accesorios', nombre: 'Accesorios' },
    { id: 'fragancias', nombre: 'Fragancias' },
];

function ItemListContainer ({text}) {
    const { categoriaId } = useParams();
    const categoria = categorias.find((categoria) => categoria.id === categoriaId);
    const productosVisibles = categoriaId
        ? productos.filter((producto) => producto.categoria === categoriaId)
        : productos;

    if (categoriaId && !categoria) {
        return (
            <main className="itemListContainer">
                <h2>Categoría inexistente</h2>
                <p>La categoría que buscás no existe.</p>
                <Link to="/">Volver al inicio</Link>
            </main>
        );
    }

    return (
    <div className="itemListContainer">
        <h2>{categoria ? categoria.nombre : text}</h2>
        {productosVisibles.length === 0 && (
            <p>Todavía no hay productos en esta categoría.</p>
        )}
        <div className="itemList">
            {productosVisibles.map((producto) => (
                <Item
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    imagen={producto.imagen}
                />
            ))}
        </div>
    </div>
    );
};

export default ItemListContainer
