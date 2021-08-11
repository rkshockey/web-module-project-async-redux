import axios from 'axios'

export const FETCHING_LIST_START = 'FETCHING_LIST_START'
export const FETCHING_LIST_SUCCESS = 'FETCHING_LIST_SUCCESS'
export const FETCHING_LIST_FAIL = 'FETCHING_LIST_FAIL'
export const FETCHING_POKE_START = 'FETCHING_POKE_START'
export const FETCHING_POKE_SUCCESS = 'FETCHING_POKE_SUCESS'
export const FETCHING_POKE_FAIL = 'FETCHING_POKE_FAIL'
export const SELECT_POKE = 'SELECT_POKE'
export const ADD_BUILT = 'ADD_BUILT'

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const fetchList = () => (dispatch) => {
    dispatch({type:FETCHING_LIST_START});
    axios.get(apiUrl)
        .then(res => {dispatch({type: FETCHING_LIST_SUCCESS, payload: res.data.results})})
        .catch(err => {dispatch({type: FETCHING_LIST_FAIL, payload: `${err.response.status}: ${err.response.data}`})})
}

export const selectPoke = (url) => {
    return ({type: SELECT_POKE, payload: url})
}

export const fetchPoke = (url) => (dispatch) => {
    dispatch({type:FETCHING_POKE_START});
    axios.get(url)
        .then(res => {dispatch({type: FETCHING_POKE_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: FETCHING_POKE_FAIL, payload: `${err.response.status}: ${err.response.data}`})})
}

export const addBuilt = (pokeObj) => {
    return({type: ADD_BUILT, payload: pokeObj})
}