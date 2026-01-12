import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemlistContainer'

function App() {
return (
    <div className="App">
      <NavBar />
      <ItemListContainer text="¡Bienvenidos a MiTienda, el mejor lugar para tu piel!" />
    </div>
  );
}

export default App
