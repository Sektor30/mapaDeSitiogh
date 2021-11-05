import './App.css';
import Listamapa from './Componentes/Listamapa';
import Listanosotros from './Componentes/Listanosotros';
import Listamenu from './Componentes/Listamenu';
import Listaservicios from './Componentes/Listaservicios';
import Listacontactos from './Componentes/Listacontactos';


function App() {
  return (
    <div className="app container ">
      
      <div className="servicios  text-center mb-5">
        <h1><span className="text-primary">Map</span>a del sitio</h1>
    </div >
        <div className="container  text-center  "> 
         <div className="row"> 
        
                    <div className="col">     <Listamapa /> </div>  
                    <div className="col">  <Listanosotros /> </div> 
                    <div className="col">   <Listamenu /> </div> 
                    <div className="col">  <Listaservicios />  </div>  
                    <div className="col">  <Listacontactos /> </div> 
        </div>        

       </div> 
       

    </div>


  );
}

export default App;
