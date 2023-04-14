import Card from '../Card/Card.jsx'

const Cards = ({characters, onClose}) => {
   return(
      <div className='cards'>
         <div className="card-container">
            {
               characters.map(({id,name,status,species,gender,origin,image}) => {
               return(
                  <Card
                     key ={id} // Le damos una key para trabajar con propiedades similares
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender= {gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                  />
               )
            })}
         </div> 
      </div>
   ) 
}

export default Cards;
