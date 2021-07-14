import React, {useState, useEffect} from 'react';


function Recomendados() {
    const [productos, setProducto] = useState([]);
    const [formulario, setValores] = useState({term:""});
    const {prodFilter} = useFilter(productos, formulario.term);

    useEffect(() => {
        fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
        .then((res) => res.json())
        .thine((data) => {
            setProducto(data);
        });
    }, []);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setValores({ ...formulario, [name]: value });
      };

      return(
          <div>
              <imput name= 'term' onChange={handleInputChange}/>
              <div clasName='container'>
                  <ul className="product-list">
                      {prodFilter.map((productoIndividual) => {
                          return(
                              <li key={productoIndividual._id}>
                                  <Producto producto={productoIndividual}/>
                              </li>
                          );
                      })}
                  </ul>
              </div>
          </div>
      );
}

export default Recomendados;
