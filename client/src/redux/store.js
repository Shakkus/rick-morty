import {createStore, applyMiddleware, compose} from 'redux'; 
import thunkMiddleware  from 'redux-thunk';
//Coontectamos proyecto al reduxdevtools

import reducer from './reducer' //Importamos el reducer

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Configuramos la extension de reduxdevtools

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    //Nos permite hacer peticiones a apis/servidores
)

export default store;
//Exportamos para trabajar en react