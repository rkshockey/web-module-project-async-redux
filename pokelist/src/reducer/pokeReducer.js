import { FETCHING_LIST_START, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAIL, FETCHING_POKE_START, FETCHING_POKE_SUCCESS, FETCHING_POKE_FAIL, SELECT_POKE } from "../action/pokeActions"

const initialState = {
    selectedPokeUrl: '',
    selectedPoke: null,
    isCallingPoke: false,
    errorPoke: '',
    builtPoke: [],
    pokeValues: {
        name: '',
        level: 1,
        hpIV: 0,
        attIV: 0,
        defIV: 0,
        spAttIV: 0,
        spDefIV: 0,
        speedIV: 0
    },
    pokeList: [{name: null, url: null}],
    isCallingList: false,
    errorList: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_LIST_START:
            return ({
                ...state,
                isCallingList: true,
                errorList: ''
            })
        case FETCHING_LIST_SUCCESS:
            return ({
                ...state,
                isCallingList: false,
                pokeList: action.payload
            })
        case FETCHING_LIST_FAIL:
            return ({
                ...state,
                isCallingList: false,
                errorList: action.payload
            })
        case FETCHING_POKE_START:
            return ({
                ...state,
                isCallingPoke: true,
                errorPoke: ''
            })
        case FETCHING_POKE_SUCCESS:
            return ({
                ...state,
                isCallingPoke: false,
                selectedPoke: action.payload
            })
        case FETCHING_POKE_FAIL:
            return ({
                ...state,
                isCallingPoke: false,
                errorPoke: action.payload
            })
        case SELECT_POKE:
            return ({
                ...state,
                selectedPokeUrl: action.payload
            })

        default:
            return state
    }
}

export default reducer