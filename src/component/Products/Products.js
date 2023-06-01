// Import the react JS packages
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product";

// Define the Login function.
export const Products = () => {
     const [productos, setProductos] = useState([]);
     useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
         (async () => {
           try {
             const response = await axios.get(   
                            'http://localhost:8000/products/', {
                             headers: {
                                'Content-Type': 'application/json'
                             }}
                           );
             setProductos(response.data);
             console.log(productos)
             console.log(response);
          } catch (e) {
            console.log(e)
          }
         })()};
     }, []);
    return ( //Se muestran los productos de la API en pantalla
    <div className="row">
      {productos.map((producto) =>{
        return <Product key={producto.id} 
                url={producto.url} 
                nombre={producto.nombre} 
                descripcion={producto.descripcion}
                imagen = {producto.imagen}
                detalles = {producto.detalles}
                estado = {producto.estado}
                precio = {producto.precio}
                personalizable = {producto.personalizable}
                caja_personalizable = {producto.caja_personalizable}
                categoria = {producto.categoria.nombre}
                tamaño_caja = {producto.tamaño_caja}
                tamaño_funko = {producto.tamaño_funko}
                created_at = {producto.created_at}
                update_at = {producto.update_at}/>;
        })}
      
    </div>
  );
}
