import React, {useState, useEffect} from 'react';



function DetalleProducto() {
    const [producto, setProducto] = useState({
        nombre: null,
        descripcion: null,
        price: 0,
        isActive: false,
        category: null,

    });


    useEffect(()=> {
        fetch("https://ecomerce-master.herokuapp.com/api/v1/item/")
        .then((response) => response.json())
        .then((data) => setProducto(data));
    });

    return(
        <div>
            <h3>Detalle del producto</h3>
            <div>
            <h4>{producto.producto_name}</h4>
            <p>{producto.description}</p>
            <p>{producto.price}.00</p>
            <p>{producto.category}</p>
            <img src={producto.image}/>
            {producto.isActive ? <button>Comprar</button> : <p>Agotado</p>}

            </div>
        </div>
    );
}

export default DetalleProducto;