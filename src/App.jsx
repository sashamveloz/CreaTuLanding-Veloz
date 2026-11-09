import './App.css'
import { Link, Route, Routes } from 'react-router'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemlistContainer'

function App() {
return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer text="¡Bienvenidos a MiTienda, el mejor lugar para tu piel!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="*" element={
          <main className="itemListContainer">
            <h2>No encontrada</h2>
            <p>La página que buscás no existe.</p>
            <Link to="/">Volver al inicio</Link>
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App
