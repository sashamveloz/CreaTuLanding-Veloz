import { useLayoutEffect, useRef } from 'react';

function Item({ nombre, precio, imagen, girada, onAbrir, onCerrar }) {
    const botonDetalles = useRef(null);
    const botonVolver = useRef(null);
    const focoPendiente = useRef(false);
    const precioFormateado = precio.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
    });

    useLayoutEffect(() => {
        if (focoPendiente.current) {
            focoPendiente.current = false;
            const destino = girada ? botonVolver : botonDetalles;
            destino.current?.focus({ preventScroll: true });
        }
    }, [girada]);

    function abrir() {
        focoPendiente.current = true;
        onAbrir();
    }

    function cerrar() {
        focoPendiente.current = true;
        onCerrar();
    }

    return (
        <article className={`item${girada ? ' itemFlipped' : ''}`} aria-label={nombre}>
            <div className="itemInner">
                <div className="itemFace itemFront" inert={girada} aria-hidden={girada}>
                    <img className="itemImage" src={imagen} alt={nombre} />
                    <h3>{nombre}</h3>
                    <p className="itemPrice">{precioFormateado}</p>
                    <button type="button" className="itemButton" onClick={abrir}
                        ref={botonDetalles} aria-label={`Ver detalles de ${nombre}`}>
                        Ver detalles
                    </button>
                </div>
                <div className="itemFace itemBack" inert={!girada} aria-hidden={!girada}>
                    <h3>{nombre}</h3>
                    <p className="itemPrice">{precioFormateado}</p>
                    <p>Descubrí {nombre}, una opción para acompañar tu rutina de cuidado y estilo. Descripción de ejemplo.</p>
                    <button type="button" className="itemButton" onClick={cerrar}
                        ref={botonVolver} aria-label={`Volver a la imagen de ${nombre}`}>
                        Volver
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Item;
