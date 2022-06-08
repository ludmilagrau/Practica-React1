import './App.css';
import Lugar from './componentes/Lugar';

function App() {
  return (
    <div className="App">
      <div className= 'contenedor-principal'>
      <h1>Lugares que quiero visitar:</h1>
      <Lugar 
      nombre='Berlín'
      descripcion='Berlín es la ciudad capital de la República Federal de Alemania y una de las ciudades más bellas, liberales y cosmopolitas del mundo.'
      imagen='berlin.png' />

      <Lugar
      nombre='Londres'
      descripcion='Londres es uno de los destinos turísticos más importantes del mundo. La ciudad es el hogar de una gran variedad de lugares de interés turístico, la misma es una de las más visitadas mundialmente por turistas.'
      imagen='londres.webp' />

      <Lugar
      nombre='Tokio'
      descripcion='Tokio es la ciudad más poblada del planeta. Ya sea por su sorprendente cultura, por su animada vida nocturna, por probar su exótica gastronomía o por ir de compras en una de las ciudades más apropiadas para ello, cualquier razón es buena para visitarla.'
      imagen='tokio.jpg' />
    </div>
      </div>
  );
}

export default App;
