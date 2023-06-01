import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = (props) =>{
    var estado_cat 
    if(props.estado)
        estado_cat = "Disponible"
    else
        estado_cat = "No Disponible"

    return(
        <div className="card col-lg-4">
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{estado_cat}</p>
                <p className="card-text">{props.created_at}</p>
                <p className="card-text">{props.update_at}</p>
            </div>
        </div>
    )
}

export default Category;