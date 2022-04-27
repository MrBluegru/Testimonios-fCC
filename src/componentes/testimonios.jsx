import React from "react";
import '../stylesheets/Testimonios.css'


function Testimonio(props) {

  return(

    <div className='contenedor-testimonio'>

      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt='Foto' />

      <div className='contenedor-texto-testimonio'>

        <p className='nombre'>
          <strong>{props.nombre}</strong> en {props.pais}</p>

        <p className='cargo'>
          {props.cargo} en <strong>{props.empresa}</strong></p>

        <p className='texto'>
          "{props.testimonio}"</p>

      </div>


    </div>
  );
}

export default Testimonio;