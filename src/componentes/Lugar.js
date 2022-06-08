import React from 'react';
import '../style-sheets/Lugar.css';

function Lugar(props) {
  return (
    <div className='contenedor-lugar'>
      <img className='imagen-lugar' src={require(`../imagenes/lugar-${props.imagen}`)} alt='Berlin'/>
      <div className='contenedor-texto-lugar'>
        <p className='nombre-lugar'>{props.nombre}</p>
        <p className='descripcion-lugar'>{props.descripcion}</p>
      </div>
    </div>
  
  );
}

export default Lugar;