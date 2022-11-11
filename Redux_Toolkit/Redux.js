import { x } from "@redux/toolkit"

// configureStore() hace todo automaticamente, recibe un objeto con el reducer

export default configureStore({
    reducer:{
        reducerOne: counterOne,
        reducerTwo: counterTwo
    }
})

// nos permite crear una accion:
createAction()  

// podemos crear un reducer con:

createReducer()

// Por ejemplo:


const increment = createAction('counter/increment')

const initialState = { value: 0, value2: 0}

const counterReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
          state.value ++
      })
})

// Un slice es la forma de tener varios reducers distintos para manejar nuestro store. La funcion acepta un obj de reducers,
// un nombre para el slice y un valor de estado inicial, y genera automaticamente un slice reducer con los actions creator y 
// action types correspondientes

// Por ejemplo

const initialStatee = { value: 0}

const counterSlice = createSlice({
    name: "counter",
    initialStatee,
    reducers:{
        increment(state){
            state.value++
        },
    }
})


export const { increment } = counterSlice.actions
export default counterSlice.reducer


// Otras funcionalidades 

createAsyncThunk()
/*
recibe un string con la action type y una funcion que devuelve una promesa, y genera un thunk que despacha action types
pending/fulfilled/rejected en funcion de esa promesa
*/
createEntityAdapter()
/*
 genera un conjunto de reductores y selectores reutilizables para administrar datos normalizados en el store
*/
createSelector()
/*
de la biblioteca de Reselect, reexportada para facilitar su uso
*/










// store.js:

import { configureStore } from "@reduxjs/toolkit"
import characters from "url"


export default configureStore({
    reducer:{
        characters: characters,
        episodes: episodes
    }
})



// App.js

import { Provider } from "react-redux"
import store from "url"

{/* 
<Provider store={store}>
    <App>
</Provider> 
*/}

// "reducer"   characterSlice.js

import { createSlice } from "@reduxjs/toolkit"


export const characterSlice = createSlice({
    name: "characters",
    initialState:{
        characters: [],
        detail: {}
    },
    reducers:{
        getAllCharacters: (state, action) => {
            state.characters = action.payload
        },
        getCharacterById: (state, action) => {
            state.detail = action.payload
        }
    }
})

export const { getAllCharacters, getCharacterById } = characterSlice.actions
export default characterSlice.reducer


// characterActions.js


import axios from "axios"
import { getAllCharacters, getCharacterById } from "url"

export const getChars = () => (dispatch) => {
    axios.get("url")
    .then(res => {
        dispatch(getAllCharacters(res.data.results))
    })
    .catch(e => console.log(e))
}
 

export function getChars2(){
    return function(dispatch){
        return axios.get("url")
        .then(res => {
            dispatch(getAllCharacters(res.data.results))
        })
        .catch(e => console.log(e))
    }
}