import { IUser } from "models/auth"
import { AuthAction, AuthActions, AuthState } from "./types"

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    isError: "",
}

export default function authReduser(
    state = initialState,
    action: AuthAction
): AuthState {
    switch (action.type) {
        case AuthActions.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }
        case AuthActions.SET_USER:
            return { ...state, user: action.payload }
        case AuthActions.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case AuthActions.SET_IS_ERROR:
            return { ...state, isError: action.payload, isLoading: false }
        default:
            return state
    }
}
