function TodoItem({completed, text}) {
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
