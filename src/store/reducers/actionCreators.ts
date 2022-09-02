import { AuthActionCreators } from "./auth/actionCreators"
import { LinkActionCreators } from "./shrink/actionCreators"

export const allActionCreators = {
    ...AuthActionCreators,
    ...LinkActionCreators,
}
