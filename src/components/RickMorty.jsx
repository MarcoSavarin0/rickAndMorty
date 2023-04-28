import { useState, useEffect,useRef } from "react";
import Button from 'react-bootstrap/Button';
import Cards from './Card/Cards'
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import ReactPaginate from "react-paginate";


function RickMorty(){
    const ULR_BASE_API = 'https://rickandmortyapi.com/api/character';
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [aliveFilter, setAliveFilter] = useState('');
    const buttonRefAlive = useRef(null);
    const buttonRefDead = useRef(null);
    const buttonAll = useRef(null)
    const [totalPages,setTotalPage] = useState(1)
    const [pageNumber, setPageNumber] = useState(0);
  
    useEffect(() => {
      console.log('se monto la api');
      fetch(ULR_BASE_API)
        .then(response => response.json())
        .then(data => {
          setPersonajes(data.results);
        })
        .catch(error => console.log(error));
    }, []);
  
    useEffect(() => {
      console.log('Se actualizo');
      filtrado();
    }, [aliveFilter]);
  
    useEffect(() => {
      return () => console.log('se desmonto');
    }, []);
   
  
    const cargarMas = async () => {
      const newPage = pagina + 1;
      const url = `${ULR_BASE_API}?page=${newPage}&status=${aliveFilter}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.results);
        setTotalPage(data.info.pages);
        setPagina(() => newPage); 
      } catch (error) {
        console.log(error);
      }
    };
    const handlePageClick = (data) => {
      const selectedPage = data.selected;
      setPageNumber(selectedPage);
      cargarMas();
    };
      
  
    const click = value => {
      setAliveFilter(value);
      if(value === 'Alive'){
        buttonRefAlive.current.style.backgroundColor = '#007bff';
        buttonRefAlive.current.style.color = '#fff';
        buttonRefDead.current.style.backgroundColor = '#fff';
        buttonRefDead.current.style.color = '#007bff';
      }else if(value === 'Dead'){
        buttonRefDead.current.style.backgroundColor = '#007bff';
      buttonRefDead.current.style.color = '#fff';
      buttonRefAlive.current.style.backgroundColor = '#fff';
      buttonRefAlive.current.style.color = '#007bff';
      }else {
        buttonRefAlive.current.style.backgroundColor = '#007bff';
        buttonRefAlive.current.style.color = '#fff';
        buttonRefDead.current.style.backgroundColor = '#007bff' ;
        buttonRefDead.current.style.color = '#fff';
      }
      
    };
  
    const filtrado = async () => {
        fetch(`${ULR_BASE_API}?page=${pagina}&status=${aliveFilter}`)
          .then(response => response.json())
          .then(data => {
            setPersonajes(data.results);
            console.log(data);
            setPagina(1);
            setTotalPage(data.results.length)
          })
          .catch(error => console.log(error));
    };
   

    return(
        <>
        <div style={{ minHeight: 'calc(100vh - 120px)' }}> 
        <h2 style={{textAlign: 'center'}}>Characters</h2>
        <hr />
        <div className="d-flex justify-content-start" style={{marginTop: '20px'}}>
      <Button ref={buttonAll} onClick={() => click('')} style={{marginLeft: '20px'}} >All</Button>
    <Button ref={buttonRefAlive} onClick={() => click('Alive')} style={{marginLeft: '20px'}} >Vivos</Button>
    <Button ref={buttonRefDead} onClick={() => click('Dead')} variant="primary" className="align-self-center" style={{marginLeft: '20px'}}>Muertos</Button>
    </div>
        <div className="d-flex justify-content-center align-items-center">
        <div className="card-deck d-flex flex-wrap" style={{margin: '20px'}}>
            {
                personajes.map((personaje,i)=>{
                  if(personaje.status == 'Alive'){ 
                    return(
                        
                        <Cards image={personaje.image} name={personaje.name} status={personaje.status} id={personaje.id} />
                      
                    )
                  }else if(personaje.status == 'Dead'){
                    return(
                      <Cards image={personaje.image} name={personaje.name} status={personaje.status} id={personaje.id}/>
                    )
                  }else{
                    return(
                      <Cards image={personaje.image} name={personaje.name} status={personaje.status} id={personaje.id}/>
                    )
                  }
                })
            }
       
       </div>
       
  </div>
 

      
  <div className="pagination">
          <ReactPaginate
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
          previousLabel="«"
          nextLabel="»"
          breakLabel="..."
        />
</div>
</div>
        </>
    )
}


export default RickMorty