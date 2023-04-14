import { NavLink } from 'react-router-dom'
import { addFav,removeFav } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';

import './Card.css'

const Card = ({id,name,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}) => {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav (false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id,name,species,gender,origin,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='card'>
        <div className="btns-card">
            <button className='like' onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            <button className='close' onClick={()=> onClose(id)}> X </button>
        </div>
         
         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
         </NavLink>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      //Siempre queremos el return por eso se la llama
      addFav: (character) => {dispatch(addFav(character))}, 
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Card);
