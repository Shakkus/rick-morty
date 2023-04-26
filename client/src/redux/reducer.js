import { ADD_CARD, ADD_FAV, REMOVE_FAV, REMOVE_CARD, ADD_CARD_DETAIL, 
    CLEAN_CARD_DETAIL, FILTER, ORDER } from "./actions/action-types"

const initialState = {
    myFavorites: [],
    characterDetails: {},
    characters:[],
    allCharactersFav: []
}

const reducer = (state= initialState,{type,payload}) => {
    switch(type){
        case ADD_FAV: 
            return {
                ...state, //Devolvemos una copia del estado anterior
                //myFavorites: [...state.allCharactersFav, payload],
                mtFavorites: payload,
                //allCharacters: [...state.allCharactersFav, payload]
                allCharacters:payload
            }   
        
        case REMOVE_FAV: 
            return {
                ...state,
                //myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
                myFavorites:payload,
                allCharactersFav: payload,
            }
        case REMOVE_CARD:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload),
                allCharactersFav: state.myFavorites.filter(char => char.id !== payload),
                characters: state.characters.filter(char => char.id !== payload)
            }    

        case ADD_CARD_DETAIL:
            return{
                ...state,
                characterDetails: payload
            }    

        case CLEAN_CARD_DETAIL:
            return{
                ...state,
                characterDetails: {}
            }  

        case ADD_CARD:
            const characterFilter = state.characters.filter(char => char.id === payload.id);
            if (payload.name){
                if (!characterFilter === payload.id) {
                    return {
                        ...state,
                        characters: [...state.characters,payload]
                    }
                }
            }
            else alert('Ya hay personaje con este id')

        case FILTER:
            const characterFiltered = state.allCharactersFav.filter(character => 
            character.gender === payload)
            const filterCheck = () => {
                if (payload === 'All' && !characterFiltered.length) return state.allCharactersFav
                else return characterFiltered
            }

            return {
                ...state,
                myFavorites: filterCheck()
            }
        
        case ORDER:
            const allCharactersFavCopy = [...state.myFavorites]

            return{
                ...state,
                myFavorites:payload === 'A'
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
            }
        default:  
            return {...state}
    }
}

export default reducer;