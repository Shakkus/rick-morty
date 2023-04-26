import './App.css';

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'

import axios from 'axios';

import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/favorites/Favorites';

//DATOS VALIDACION
const email = 'seba@gmail.com'
const pass = '1234'

//DATOS API
const URL_LOGIN = 'http://localhost:3001/rickandmorty/login/'

function App() {
   
   let [characters,setCharacters] = useState([]); //Inicializamos el estado
   const location = useLocation();
   const navigate = useNavigate();
   const [access,setAccess] = useState(false);


   // const login = async (userData) => {
   //    try {
   //       const { email, password } = userData;
   //       const {data} = await axios(URL + `?email=${email}&password=${password}`)
   //       const { access } = data;

   //       setAccess(data);
   //       access && navigate('/ho me');
   //    } catch (error) {
   //       console.log(error.message);
   //    }      
   // }

   // useEffect(()=> {
   //    !access && navigate('/')
   // },[access]) //recordar que debe ir con su array de dependencia

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rick_and_morty/character/${id}`)

         if (data.name) setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }}
      

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== id)
      setCharacters(charactersFiltered)
   };

   return (
      <div className='App'>

         {
            location.pathname !== "/" && 
            <Nav 
               onSearch={onSearch} 
               setAccess={setAccess}
            />
         }

         <Routes className='links'>
            {/* <Route path='/' element={<Form login={login} />}/> */}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} key={characters.id}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
