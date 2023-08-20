const initialState = {
    message: '',
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
            ...initialState,
            message : action.payload
        }
    
        default :
            return state;
    };
};

export default loginReducer;