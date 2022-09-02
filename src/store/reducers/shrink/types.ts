import { ILink } from "models/link"

export interface LinkState {
    links: ILink[]
    isError: string
    search: string
}

export enum LinkActions {
    SET_LINK = "SET_LINK",
    SET_LINKS = "SET_LINKS",
    DELETE_LINK = "DELETE_LINK",
    SET_IS_ERROR = "SET_IS_ERROR",
    SET_SEARCH = "SET_SEARCH",
}

export interface SetLink {
    type: LinkActions.SET_LINK
    payload: ILink
}

export interface SetLinks {
    type: LinkActions.SET_LINKS
    payload: ILink[]
}

export interface DeleteLink {
    type: LinkActions.DELETE_LINK
    payload: string
}

export interface SetIsError {
    type: LinkActions.SET_IS_ERROR
    payload: string
}

export interface SetSearch {
    type: LinkActions.SET_SEARCH
    payload: string
}

export type LinkAction =
    | SetLink
    | SetLinks
    | DeleteLink
    | SetIsError
    | SetSearch
