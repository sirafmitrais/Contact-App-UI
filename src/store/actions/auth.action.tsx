import { ResponseType } from 'axios'

import {
    AuthAction
}
from '../action-types/auth.types'

import {
    LOGIN,
    REGISTER
} from '../action-constant'

import AuthService from '../../services/Auth.service'

type DispatchList = (args: AuthAction) => AuthAction

export const register = (dataRequest: any) => {
    return (dispatch: DispatchList) => {
        return AuthService.register(dataRequest)
            .then((response:any) => {
                dispatch({
                    type: REGISTER,
                    payload: response.data
                })
            })
    }
}

export const login = (dataRequest: any) => {
    return (dispatch: DispatchList) => {
        return AuthService.login(dataRequest)
            .then((response: any) => {
                dispatch({
                    type: LOGIN,
                    payload: response.data
                })
            })
    }
}