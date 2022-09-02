// types & models
import { IUser } from "models/auth"
import {
    AuthActions,
    SetAuthAction,
    SetUserAction,
    SetIsLoading,
    SetIsError,
} from "./types"

// store
import { AppDispatch } from "store"
// api
import { API } from "api"
import axios from "axios"

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActions.SET_USER,
        payload: user,
    }),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({
        type: AuthActions.SET_AUTH,
        payload: isAuth,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({
        type: AuthActions.SET_IS_LOADING,
        payload: isLoading,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: AuthActions.SET_IS_ERROR,
        payload: isError,
    }),
    register:
        (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            dispatch(AuthActionCreators.setIsLoading(true))
            try {
                let formData = new FormData()
                formData.append("username", username)
                formData.append("password", password)

                await axios
                    .post(
                        `${API}/register?username=${username}&password=${password}`,
                        {}
                    )
                    .then(({ data }) => {
                        localStorage.setItem("username", username)
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser(data.username))
                    })
                    .catch((err) => {
                        dispatch(AuthActionCreators.setIsError(err.detail))
                    })
            } catch (e) {
                dispatch(
                    AuthActionCreators.setIsError(
                        "Произошла ошибка при регистации"
                    )
                )
            }
        },
    login:
        (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            dispatch(AuthActionCreators.setIsLoading(true))
            try {
                let formData = new FormData()
                formData.append("username", username)
                formData.append("password", password)
                formData.append("grant_type", "password")

                await axios
                    .post(`${API}/login`, formData)
                    .then(({ data }) => {
                        localStorage.setItem("token", data.access_token)
                        localStorage.setItem("username", username)
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser(data.username))
                    })
                    .catch((err) => {
                        dispatch(AuthActionCreators.setIsError(err.detail))
                    })
            } catch (e) {
                dispatch(
                    AuthActionCreators.setIsError("Произошла ошибка при логине")
                )
            }
        },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    },
}
