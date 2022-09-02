import { LinkAction, LinkActions, LinkState } from "./types"

const initialState: LinkState = {
    links: [],
    isError: "",
    search: "",
}

export default function LinkReduser(
    state = initialState,
    action: LinkAction
): LinkState {
    switch (action.type) {
        case LinkActions.SET_LINK:
            return {
                ...state,
                links: [...state.links, action.payload],
            }
        case LinkActions.SET_LINKS:
            return {
                ...state,
                links: action.payload,
            }
        case LinkActions.DELETE_LINK:
            return {
                ...state,
                links: state.links.filter(({ id }) => id !== action.payload),
            }
        case LinkActions.SET_IS_ERROR:
            return { ...state, isError: action.payload }
        case LinkActions.SET_SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}
