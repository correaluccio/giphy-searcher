import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getGifs from  '../functions.js'
import '../style-sheets/GetGifs.css'

const GetGifs = () => {

  const [page, setPage] = useState(1)
  const [datos, setDatos] = useState([])
  const history = useNavigate()
  const params = useParams()

  const manejarInput = (event) =>{
    setDatos(event.target.value)
  }


  const onSubmit = (event) => {
    event.preventDefault()
    history(`/${datos}`)
  
  }
  
  const [gifs , setGifs] = useState(null)
  useEffect(()=>{getGifs(setGifs, params.id,page)},[ page, params.id]) 

  const atras = () =>{
    if(page>1){setPage(page-1)}
  }

  const adelante = () =>{
    setPage(page+1)
    console.log('hola')
  }




  return(
    <div>
        <div className="formulario">
          <form action="">
            <input type="text" 
                   name='search' 
                   placeholder="Inserte búsqueda" 
                   onChange={manejarInput}/> 
            <button onClick={onSubmit}>
                    Buscar
            </button>
          </form>
        </div>
        <button onClick={atras}>Atras</button><button onClick={adelante}>Adelante</button>
      
      
      
      <div className="gifs">{gifs != null ? gifs.map(gif=>(<img key={gif.id} className='gif' src={gif.images.downsized.url}></img>)) : 'no hay gifs'}</div>
    </div>
  )

}

export default GetGifs