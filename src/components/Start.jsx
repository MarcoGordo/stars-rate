import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/start.css';

export default function Start({ onClick, color, id }){
    return(
        <div>
            <i className={!color ? "bi bi-star-fill": "bi bi-star-fill start-color" }
                onClick={onClick} id={id} ></i>
        </div>
    );
}