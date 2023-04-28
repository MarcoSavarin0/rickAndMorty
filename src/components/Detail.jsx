import { useState, useEffect, useRef } from "react";
import Cards from './Card/Cards'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from "react-bootstrap";


function Detail(){
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const ULR_BASE_API = 'https://rickandmortyapi.com/api/character/';
    const [personaje, setPersonaje] = useState({});
    
  
    useEffect(() => {
        console.log('se monto la api');
        fetch(ULR_BASE_API + id)
          .then(response => response.json())
          .then(data => {
            setPersonaje(data);
          })
          .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        console.log('Se actualizo');
    }, []);

    useEffect(() => {
        return () => console.log('se desmonto');
    }, []);

    return(
        <Container className="my-5">
      <Row>
        <Col xs={12} md={4}>
          <Image src={personaje.image} roundedCircle  />
        </Col>
        <Col xs={12} md={8}>
          <h1>{personaje.name}</h1>
          <p className="lead">
            {personaje.status} - {personaje.species}
          </p>
          <hr className="my-4" />
          <h4>Details</h4>
          <p>Gender: {personaje.gender}</p>
          <p>
            Origin:{" "}
            {personaje.origin && personaje.origin.url ? (
              <a href={personaje.origin.url}>{personaje.origin.name}</a>
            ) : (
              "Unknown"
            )}
          </p>
          <p>
            Location:{" "}
            {personaje.location && personaje.location.url ? (
              <a href={personaje.location.url}>{personaje.location.name}</a>
            ) : (
              "Unknown"
            )}
          </p>
          <p>
            Episodes:{" "}
            {personaje.episode ? (
              <Badge pill variant="primary">
                {personaje.episode.length}
              </Badge>
            ) : (
              "Unknown"
            )}
          </p>
        </Col>
      </Row>
    </Container>
    )
}


export default Detail