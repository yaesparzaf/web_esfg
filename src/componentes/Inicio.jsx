import React from 'react';
import Comentarios from './Comentarios';
import FormComentarios from './FormComentarios';

export default function Inicio() {
  return (
    <>
    <br></br>
    <br></br>
    <div>Inicio</div>
    <div className='seccion-comentarios'>
    <FormComentarios/>

    </div>
    
    <Comentarios/>
    </>
  )
}
