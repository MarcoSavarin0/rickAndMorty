import { useState, useEffect, useRef } from "react";
import Cards from './Card/Cards'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactPaginate from "react-paginate";



function Search(){
const inputCap = useRef()
const [keyword, setKeyword] = useState('')
const [personajes, setPersonajes] = useState([])
const [pagina, setPagina] = useState(1);
const [totalPages,setTotalPage] = useState(1)
const [pageNumber, setPageNumber] = useState(0);
const ULR_BASE_API = 'https://rickandmortyapi.com/api/character'


const getInputData = (e)=>{
    e.preventDefault()
    setKeyword(inputCap.current.value)
    setPagina(1)
}
useEffect(()=>{
    async function search() { 
    const urlApi = `${ULR_BASE_API}?name=${keyword}&page=${pagina}`
    const response = await fetch(urlApi);
    const data = await response.json();
    setPersonajes(data.results)
    setTotalPage(data.info.pages)
}
if (keyword) {
    search()
  } else {
    setPersonajes([])
    setTotalPage(1)
  }


}, [keyword,pagina])
useEffect(()=>{
    console.log('se actualizo');
},[personajes])
useEffect(()=>{
    return()=> console.log('se desmonto');
},[])
const cargarMas = async () => {
    const newPage = pagina + 1;
    const url = `${ULR_BASE_API}?page=${newPage}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPersonajes(data.results);
      setTotalPage(data.info.pages); 
      
      setPagina(newPage);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; 
    setPagina(selectedPage);
    cargarMas();
  };
return(
    <>
   <div style={{ minHeight: 'calc(100vh - 120px)' }}>
        <form  method="get" onSubmit={getInputData} className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center formulario">
                <input className="inputSearch form-control" type="text" ref={inputCap} placeholder="Busca tu personaje favorito!" />
                <button type="submit"   className="align-self-center botonSearch" ><i class="fa-solid fa-magnifying-glass"></i></button>
           </div> 
        </form>
        
        <div className="d-flex justify-content-center align-items-center">
        <div className="card-deck d-flex flex-wrap" style={{margin: '20px'}}>
           
        {
            Array.isArray(personajes)> 0 && personajes.map((personaje,i)=>{
                    return(
                        <Cards image={personaje.image} name={personaje.name} status={personaje.status} id={personaje.id} />
                        )}) 
        }
        
   

       
      </div> 
      </div> 
      {personajes.length > 0 &&  <div className="pagination">
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
    </div>}
    </div>
    </>
    
    
)

}

export default Search