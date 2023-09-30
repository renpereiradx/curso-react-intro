import './CreateTodoButton.css';

let clickCounter = (event) => {
  console.log(event.target);
};


function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" onClick={clickCounter}>
      +
    </button>
  );
}

export { CreateTodoButton };
