import React from 'react';
import './TodoForm.css';

function TodoForm() {
  return (
    <form>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Estudiar mas" />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
