import { useState } from 'react';
import './App.css';
import Addtask from './Components/Addtask';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import Todo from './Components/Todo';


function App() {

  function additeminlist(title,desc){
    let id = state[state.length-1].id + 1;
    const latest = {
      id : id,
      title : title,
      desc: desc
    }
    setstate([...state,latest])
  }

  const [state, setstate] = useState([
    {
      id:1,
      title:'Go to market',
      desc:'you have to go market and get fish'
    },
    {
      id:2,
      title:'Go to pond',
      desc:'you have to go pond and get some water'
    },
    {
      id:3,
      title:'Go to mall',
      desc:'you have to go mall and get some fresh air'
    }
  ]);

  function ondelete(todo){
    var newdata = state.filter((val)=>{
      return val.id !== todo.id;
    })
    setstate(newdata);
  }

  
  return (
      <>
      <NavigationBar title = 'My Todo List'></NavigationBar>
      <Addtask list = {additeminlist}></Addtask>
      {state.length ===0 ? "No todo to display": <Todo data = {state} itemdelete = {ondelete}></Todo>}
      <Footer></Footer>
      </>
  );
}

export default App;
