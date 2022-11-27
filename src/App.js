import './App.css';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import { useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks +1);
  }  

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp'></img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
         texto = 'Click' 
         esBotondeClick={true}
         manejarClick={manejarClick} />
         <Boton
         texto = 'Reiniciar'
         esBotondeClick={false}
         manejarClick={reiniciarContador} />  
      </div>
    </div>
  );
}

export default App;