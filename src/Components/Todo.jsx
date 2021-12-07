import React from "react";
import TodoItem from "./TodoItem";
function Todo({data,itemdelete}) {
  return (
    <div className='container'>
      <h1 className='text-center my-3'>ToDo List</h1>
      {
          data.map((value)=>{
              return <TodoItem key = {value.id} todo = {value} ondelete={itemdelete}></TodoItem>
          })
      }
      
    </div>
  );
}

export default Todo;
