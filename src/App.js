import { useEffect, useState } from "react";
import Addtask from "./Components/Addtask";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Todo from "./Components/Todo";


function App() {
  let initdata;
  if (localStorage.getItem("state") === null) {
    initdata = [];
  } else {
    initdata = JSON.parse(localStorage.getItem("state"));
    // localStorage.clear()
  }

  function additeminlist(title, desc) {
    let id;
    if (state.length === 0) {
      id = 0;
    } else {
      id = state[state.length - 1].id + 1;
    }

    const latest = {
      id: id,
      title: title,
      desc: desc,
    };
    setstate([...state, latest]);
  }

  function ondelete(todo) {
    var newdata = state.filter((val) => {
      return val.id !== todo.id;
    });
    setstate(newdata);
    localStorage.setItem("state", JSON.stringify(state));
  }
  const [state, setstate] = useState(initdata);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state])
  return (
    <>
      <NavigationBar title="My Todo List"></NavigationBar>
      <Addtask list={additeminlist}></Addtask>
      {state.length === 0 ? (
        <h1 className="text-center my-5">No Task to display</h1>
      ) : (
        <Todo data={state} itemdelete={ondelete}></Todo>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
