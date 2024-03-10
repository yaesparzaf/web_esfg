import React from 'react';
import HoverRating from './HoverRating';

export default function FormComentarios() {
  return (
      <body className="p-3 m-0 border-0 bd-example m-0 border-0">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          </label>
          <input
            type="nombre"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre"
          />
        </div>
        <HoverRating/>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Ingresa un comentario
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button type="button" class="btn btn-outline-secondary">Comentar</button>
      </body>
  );
}
