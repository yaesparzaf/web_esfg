import React from "react";
import Comentarios from "./Comentarios";
import FormComentarios from "./FormComentarios";

export default function Inicio() {
  return (
    <main className="main-inicio">
      <article>
        <h1>Terapias emocionales</h1>
        <p>
          En un mundo donde el estrés y la ansiedad parecen ser moneda
          corriente, las terapias emocionales emergen como faros de luz, guiando
          a las personas a través de las turbulentas aguas de sus emociones.
          Estas terapias no solo ofrecen un refugio seguro para explorar y
          comprender sentimientos profundos, sino que también brindan las
          herramientas necesarias para navegar por ellos de manera saludable y
          constructiva.
        </p>
      </article>
      <div className="form-cont">
        <FormComentarios />
      </div>
      <div className="comentarios-cont">
        <Comentarios />
      </div>
    </main>
  );
}
