import {
    AuthAction
} from '../action-types/auth.types'

import {
    LOGIN,
    REGISTER
} from '../action-constant'

const initialState = {
    token_jwt: ""
}

const reducer = (state = initialState, action: AuthAction) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                ...{token_jwt: action.payload}
            }
        case REGISTER:
            return {
                ...state,
                ...{token_jwt: action.payload}
            }
    }
}

export {
    reducer as authReducer
}