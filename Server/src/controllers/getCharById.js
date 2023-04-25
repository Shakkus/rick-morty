const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = (req,res) => {
    const {id} = req.params; //Asignamos parametros a la cosntanbte id

    axios(`${URL}/${+id}`) //Por default hace get
    .then(response => response.data)
    .then(({name,species,origin,image,gender}) => {cd
        if (name) {
            const character = {
                id,
                name,
                species,
                origin,
                image,
                gender
            } 
            return res.status(200).json(character)
        }

        return res.status(404).send('Not Found')
    })
    .catch(error => res.status(500).send(error.message))
    
}

module.exports = {getCharById}
