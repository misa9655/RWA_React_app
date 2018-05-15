

export default (state={text:'text'}, action) => {
    switch(action.type) {
        case 'TEST':
            return {...state, text: action.payload};
        default: 
            return state;
    }
}