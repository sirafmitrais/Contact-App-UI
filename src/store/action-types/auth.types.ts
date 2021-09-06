import {
    LOGIN,
    REGISTER
} from '../action-constant'

export interface register {
    type: typeof REGISTER
    payload: string
}

export interface login {
    type: typeof LOGIN
    payload: string
}

export type AuthAction = register | login