import Toast from 'react-bootstrap/Toast';
import { useState, useEffect } from "react";
import Cards from './Card/Cards'
import Image from 'react-bootstrap/Image';
import Banner from '../assets/banner.png'
import Button from 'react-bootstrap/Button';


function Home (){
  const ULR_BASE_API = 'https://rickandmortyapi.com/api/character';
  const [personajes, setPersonajes] = useState([]);
  const [showElements, setShowElements] = useState(false);
  
  const  randomPj7 = async () =>{
    const numeros = [];
    for (var i = 0; i < 7; i++) {
      const id = Math.floor(Math.random() * 671) + 1;
      const respuesta = await fetch(`${ULR_BASE_API}/${id}`);
      const personaje = await respuesta.json();
      numeros.push(personaje);
    }
    setPersonajes(numeros)
  }
  
  useEffect(() => {
    randomPj7();
    
    console.log(personajes)
  }, [setPersonajes]);
 
  
    return(
    <div>
      <div className="home-container">
      <div className={`banner ${showElements ? 'fade-in' : 'fade-out'}`}></div>
      <h1 className={`h1Bienvenida ${showElements ? 'fade-in' : 'fade-out'}`}>Bienvenido al mundo de Rick & Morty</h1>
      <p className={`h1Bienvenida ${showElements ? 'fade-in' : 'fade-out'}`}>Creado por MarcoSavarino</p>
      <Button onClick={() => setShowElements(true)}>Get started</Button>
  </div>
     <div className="d-flex flex-wrap justify-content-center">
      {
        personajes.map((personaje,i)=>{
            return(
                
              <Cards image={personaje.image} name={personaje.name} status={personaje.status} id={personaje.id} />
            )
        })
    }
     </div>
    </div>
    )
}

export default Home