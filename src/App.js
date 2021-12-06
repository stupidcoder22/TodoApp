import './App.css';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import Todos from './Components/Todos';

function App() {
  return (
      <>
      <NavigationBar></NavigationBar>
      <Todos></Todos>
      <Footer></Footer>
      </>
  );
}

export default App;
