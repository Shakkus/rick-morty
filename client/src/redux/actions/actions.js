import { REMOVE_CARD,ADD_CARD,REMOVE_FAV,ADD_FAV, FILTER,ORDER, ADD_CARD_DETAIL, CLEAN_CARD_DETAIL } from "./action-types"
const axios = require('axios')

const URL_BASE='http://localhost:3001/rickandmorty/character'

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch)=> {
        try {
            const {data} = await axios.post(endpoint, character);

            if (!data.length) throw Error ('No hay favoritos') 
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch)=> {
        try {
            const {data} = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const removeCard = (id) => {
    return {type: REMOVE_CARD, payload:id}
}

export const getCharacterDetail = (id)=>{
    return function(dispatch){
        fetch(`${URL_BASE}/${id}`)
        .then(response => response.json())
        .then(data => {
            return dispatch ({type: ADD_CARD_DETAIL,payload: data})
        })
    }
}

export const cleanCharacterDetail = () => {
    return {type: CLEAN_CARD_DETAIL}
}

export const getCharacters = (id) => {
    if(!id) throw Error ('ID not received')

    return async function(dispatch){
        try{
            const response = await axios (`${URL_BASE}/${id}`);
            const data = response.data

            return dispatch({type: ADD_CARD,payload: data})
        }
        catch(error){
            console.log(error);
        }
    }
}
export const filterCards = (gender) => {
    return{type: FILTER,
    payload: gender}
}
export const orderCards = (order) => {
    return {type: ORDER,
    payload: order
    }
}