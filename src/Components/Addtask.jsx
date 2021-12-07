import React, { useState } from "react";

function Addtask({list}) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  function adddata(e) {
      e.preventDefault();
      if(!title || !desc){
          alert('Title and description cannot be empty')
      }
      list(title,desc)
  }
  return (
    <div className="container ">
      <h2 className="text-center my-3">Add Something</h2>
      <form onSubmit={adddata}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input 
          value={desc}
          onChange={(e)=>setdesc(e.target.value)}
          className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default Addtask;
