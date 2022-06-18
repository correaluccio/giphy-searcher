import axios from 'axios';

const getGifs = async (state, search,page)=>{

  const url = `https://api.giphy.com/v1/gifs/search?api_key=8JSMOc1a4R3ICoT1Fpxxr6Noc7vgr7VW&q=${search}&limit=10&offset=${10*page}&rating=r&lang=en.json`
  const peticion = await axios(url)
  state(peticion.data.data)
  //[0].images.original.url

  
}

export default getGifs