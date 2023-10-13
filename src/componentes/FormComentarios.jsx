import React from 'react';

export default function FormComentarios() {
  return (
    <>
      <div>FormComentarios</div>
    
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
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Ingresa un comentario
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ resize: "none" }} // Establecer la propiedad de redimensionamiento a "none"
          ></textarea>
        </div>
      </body>
    </>
  );
}
