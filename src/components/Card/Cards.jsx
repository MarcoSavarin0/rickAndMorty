import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"; 

library.add(faCircle);

function Cartas(props){
    let icon;
    let color;
  
    if (props.status === 'Alive') {
      icon = ['fas', 'circle'];
      color = '#00ff04';
    } else if (props.status === 'Dead') {
      icon = ['fas', 'circle'];
      color = 'red';
    } else {
      icon = ['fas', 'circle'];
      color = 'gray';
    }
  
    return(
     
    <Card style={{ width: '10rem',margin: '10px'}}>
      <Link to={`/detail/${props.id}`} style={{textDecoration:'none'}}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
   
        <Card.Title style={{fontSize: '15px'}}>{props.name}</Card.Title>
        <FontAwesomeIcon icon={icon} fade  style={{ color: color }} />
        <p style={{ display: 'inline', marginLeft: '10px' }}>{props.status}</p>
        
    </Card.Body>
    </Link>
    </Card>
    )
    
}

export default Cartas