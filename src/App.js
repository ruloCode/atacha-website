import React from 'react'
import './App.css';
// import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

import ReactTypingEffect from 'react-typing-effect';

import logo from "./assets/logo.svg"
import whatsappIcon from "./assets/whatsapp.png"
import videohero from "./assets/herovideo.mp4"

function App() {
  return (
    <div className="app">
      <div className='overlay'></div>

      <header>
        <img src={logo} alt='logo' />
      </header>
      <a href='https://wa.me/+573156753404' target='_blank' className='whatsapp' rel="noreferrer">
      <img height={60} width={60} src={whatsappIcon} alt='logo' />

      </a>
      <footer>
        
        <a className='social'  rel="noreferrer" href='https://www.instagram.com/atacha.com.co' target="_blank" >
          
          <i className="fa-brands fa-instagram"></i>
          atacha.com.co
        </a>
      
     </footer>
      <video src={videohero} autoPlay loop muted />

     <div className='content'>

      <ReactTypingEffect
      speed={100}
      eraseDelay={1000}
      eraseSpeed={0}
      typingDelay={2500}
        text={[ "Bienvenido a Atacha",  "Te ayudamos a hacer tu sueño realidad", "Cubrimiento de Eventos", "Producción Multimedia","Marketing Digital", "Desarrollo Web"]}
      />
     </div>

    </div>
  );
}

export default App;
