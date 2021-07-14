import React from 'react';
import Recomendados from './Recomendados/Recomendados';
import DetalleProducto from './DetalleProducto/DetalleProducto'

function Home(){
    return(
        <section>
            <DetalleProducto/>
            <Recomendados/>
        </section>
    );
}

export default Home;