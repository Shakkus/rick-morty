const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = async (req,res) => {
    try {
        const {id} = req.params; //Asignamos parametros a la cosntanbte id
        const {data} = await axios(`${URL}/${+id}`);

        if (!data.name) throw new Error(`ID: ${id} not found`)

        const character = {
            data: data.id,
            data: data.name,
            data: data.species,
            data: data.origin,
            data: data.image,
            data: data.gender
        }   
        return res.status(200).json(character)
        // return res.status(404).send('Not Found')
    } catch (error) {
        error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)  
    }
}

module.exports = {getCharById}
