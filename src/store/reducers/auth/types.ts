import { IUser } from "models/auth"

export interface AuthState {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    isError: string
}

export enum AuthActions {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_IS_ERROR = "SET_IS_ERROR",
}

export interface SetAuthAction {
    type: AuthActions.SET_AUTH
    payload: boolean
}

export interface SetIsLoading {
    type: AuthActions.SET_IS_LOADING
    payload: boolean
}

export interface SetIsError {
    type: AuthActions.SET_IS_ERROR
    payload: string
}

export interface SetUserAction {
    type: AuthActions.SET_USER
    payload: IUser
}

export type AuthAction =
    | SetAuthAction
    | SetUserAction
    | SetIsLoading
    | SetIsError
