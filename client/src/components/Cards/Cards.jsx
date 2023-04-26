import Card from '../Card/Card.jsx'
import {useSelector,useDispatch} from 'react-redux';
import {removeCard} from '../../redux/actions/actions.js'
import { useLocation } from 'react-router-dom';

const Cards = ()=> {

   const characters = useSelector(state => state.characters);
   const dispatch = useDispatch();
   const location = useLocation();
   const isFavorite = location.pathname;
   
   const pjs = characters?.map(char =>{
      const onClose =(id)=>{
      alert('Desea eliminar esto?')
      .then((willDelete)=>{
         if(willDelete) {
            dispatch(removeCard(id))
            alert("¡La carta ha sido eliminada!")
         } 
         else{
            alert('qcio ');
         }
      });
   }
   
   return (
      <Card
      key={char.id}
      id={char.id}
      name={char.name}
      status={char.status}
      species={char.species}
      gender={char.gender}
      origin={char.origin.name}
      image={char.image}
      onClose={onClose} 
      />
)})

   return (
      <div className='Cards'>{pjs}</div>
   );
}
export default Cards;