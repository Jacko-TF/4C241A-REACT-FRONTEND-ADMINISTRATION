import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) =>{
    var estado_cat 
    if(props.estado)
        estado_cat = "Disponible"
    else
        estado_cat = "No Disponible"

    var personalizable 
        if(props.personalizable)
            personalizable = "Personalizable"
        else
        personalizable = "No Personalizable"
    
    return(
        <div className="card col-lg-6">
            <div class="row">
                <div className="col-7">
                    <img className="card-img-top" src={props.imagen} alt="img_product"></img>
                </div>
                <div className="card-body col-5">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Nombre</th>
                                <td>{props.nombre}</td>
                            </tr>
                            <tr>
                                <th scope="row">Descripcion</th>
                                <td>{props.descripcion}</td>
                            </tr>
                            <tr>
                                <th scope="row">Detalles</th>
                                <td>{props.detalles}</td>
                            </tr>
                            <tr>
                                <th scope="row">Estado</th>
                                <td>{props.estado_cat}</td>
                            </tr>
                            <tr>
                                <th scope="row">Categoria</th>
                                <td>{props.categoria}</td>
                            </tr>
                            <tr>
                                <th scope="row">Personalizable</th>
                                <td>{props.personalizable}</td>
                            </tr>
                            <tr>
                                <th scope="row">Precio</th>
                                <td>{props.precio}</td>
                            </tr>
                            <tr>
                                <th scope="row">Tamaño Caja</th>
                                <td>{props.tamaño_caja}</td>
                            </tr>
                            <tr>
                                <th scope="row">Tamaño Funko</th>
                                <td>{props.tamaño_funko}</td>
                            </tr>
                            <tr>
                                <th scope="row">Created_at</th>
                                <td>{props.created_at}</td>
                            </tr>
                            <tr>
                                <th scope="row">Update_at</th>
                                <td>{props.update_at}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="{props.url}"></a>
                </div>    
            </div>
        </div>
    )
}

export default Product;