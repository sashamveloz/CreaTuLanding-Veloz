import Item from './Item'
import hidratanteCerave from '../assets/hidratanteCerave.jpg'
import protectorIsdin from '../assets/protectorIsdin.jpg'
import serumOrdinary from '../assets/serumOrdinary.webp'
import eyeCreamClinique from '../assets/eyeCreamClinique.webp'

const productos = [
    {
        id: 'locion_cerave',
        nombre: 'Loción Hidratante CeraVe',
        precio: 18.50,
        imagen: hidratanteCerave,
    },
    {
        id: 'protector_isdin',
        nombre: 'Protector solar Isdin',
        precio: 19.99,
        imagen: protectorIsdin,
    },
    {
        id: 'serum_ordinary',
        nombre: 'Serum The Ordinary',
        precio: 8.50,
        imagen: serumOrdinary,
    },
    {
        id: 'eye_cream_clinique',
        nombre: 'Crema Hidratante de ojos Clinique',
        precio: 30.29,
        imagen: eyeCreamClinique,
    },
];

function ItemListContainer ({text}) {
    return (
    <div className="itemListContainer">
        <h2>{text}</h2>
        <div className="itemList">
            {productos.map((producto) => (
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
