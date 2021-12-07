import React from "react";
import TodoItem from "./TodoItem";
function Todo({data,itemdelete}) {
  return (
    <div className='container'>
      <h1 className='text-center my-3'>ToDo List</h1>
      {
          data.map((value)=>{
              return( 
              <div key={value.id}>
              <TodoItem todo = {value} ondelete={itemdelete}>
              </TodoItem>
              <hr/>
              </div>
              )
          })
      }
      
    </div>
  );
}

export default Todo;
