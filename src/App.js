import './App.css';
// import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

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
      <video src={videohero} autoPlay loop muted />
      
     
      {/* <WhatsAppWidget CompanyIcon={Icono} phoneNumber="+573156753404" /> */}

     <div className='content'>
      {/* <h1>Captamos</h1> */}
      <p>Te ayudamos a construir tu sueño</p>
     </div>
    </div>
  );
}

export default App;
