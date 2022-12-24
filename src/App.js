import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


import logo from "./assets/logo.png"
import Icono from "./assets/icono.png"
// import videohero from "./assets/barco.mp4"

function App() {
  return (
    <div className="app">
      <div className='overlay'></div>

      <header>
        <img src={logo} alt='logo' />
      </header>
      {/* <video src={videohero} autoPlay loop muted /> */}
      <FloatingWhatsApp avatar={Icono} chatMessage='Hola!
      En qué podemos ayudarte?'	 accountName='Atacha' phoneNumber='+573156753404' />

     <div className='content'>
      {/* <h1>Captamos</h1> */}
      <p>Te ayudamos a construir tu sueño</p>
     </div>
    </div>
  );
}

export default App;
