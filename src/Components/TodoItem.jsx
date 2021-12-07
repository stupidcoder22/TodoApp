import React from "react";

function TodoItem({ todo,ondelete }) {
  return (
    <>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>ondelete(todo)}>delete</button>
    </>
  );
}

export default TodoItem;
