import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className="spinner-border text-dark Loading" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
    );
};

export default Loading;