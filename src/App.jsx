import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemlistContainer'

function App() {
  const { pathname } = useLocation();
return (
    <div className="App">
      <NavBar />
      <div key={pathname} className="routeContent">
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
    </div>
  );
}

export default App
