// Import the react JS packages
import {useEffect, useState} from "react";
import axios from "axios";
import Category from "./Category";

// Define the Login function.
export const Categories = () => {
     const [categorias, setCategorias] = useState([]);
     useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
         (async () => {
           try {
             const response = await axios.get(   
                            'http://localhost:8000/categories/', {
                             headers: {
                                'Content-Type': 'application/json'
                             }}
                           );
             setCategorias(response.data);
             console.log(categorias)
             console.log(response);
          } catch (e) {
            console.log(e)
          }
         })()};
     }, []);
    return ( //Se muestran los productos de la API en pantalla
    <div className="row">
      {categorias.map((categoria) =>{
        return <Category key={categoria.id} 
                url={categoria.url}
                nombre={categoria.nombre} 
                estado={categoria.estado}
                created_at={categoria.created_at}
                update_at={categoria.update_at}/>;
        })}
    </div>
  );
}
