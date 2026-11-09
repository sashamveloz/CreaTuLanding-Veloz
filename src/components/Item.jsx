function Item({ nombre, precio, imagen }) {
    return (
        <article className="item">
            <img className="itemImage" src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p className="itemPrice">
                {precio.toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                })}
            </p>
        </article>
    );
}

export default Item;
