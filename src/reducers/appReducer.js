import { UCITAJ_POSTOVE, UCITAJ_KATEGORIJE, LOG_IN, NEW_POST, EDIT_POST, DODAJ_KATEGORIJU, LOG_OUT } from "../actions/types";

const initialState = {
    postovi:[],
    kategorije:[],
    user: {},
    is_logged: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {...state, user: action.payload, is_logged: true}
        case LOG_OUT:
            return initialState;
        case UCITAJ_POSTOVE:
            return {...state, postovi: [...action.payload]}
        case UCITAJ_KATEGORIJE:
            return {...state, kategorije: [...action.payload]}
        case NEW_POST:
            return {...state, postovi: [...state.postovi, action.payload]}
        case EDIT_POST:
            let tmp = [...state.postovi];
            tmp = tmp.map((post) => {
                if(post.id !== action.payload.id) {
                    return post
                } else {
                    return action.payload
                }
            });
            return {...state, postovi: [...tmp] }
        case DODAJ_KATEGORIJU:
            return {...state, kategorije: [...state.kategorije, action.payload]}
        default: 
            return state;
    }
}