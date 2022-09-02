// store
import { AppDispatch } from "store"

// api
import axios from "axios"
import { API } from "api"

// types & models
import { ILink } from "models/link"
import {
    LinkActions,
    SetLinks,
    SetLink,
    DeleteLink,
    SetIsError,
    SetSearch,
} from "./types"

export const LinkActionCreators = {
    setLink: (link: any): SetLink => ({
        type: LinkActions.SET_LINK,
        payload: link as ILink,
    }),
    setLinks: (links: ILink[]): SetLinks => ({
        type: LinkActions.SET_LINKS,
        payload: links,
    }),
    removeLink: (id: string): DeleteLink => ({
        type: LinkActions.DELETE_LINK,
        payload: id,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: LinkActions.SET_IS_ERROR,
        payload: isError,
    }),
    setIsSearch: (search: string): SetSearch => ({
        type: LinkActions.SET_SEARCH,
        payload: search,
    }),
    addLinkAsync:
        (key: string, link: string) => async (dispatch: AppDispatch) => {
            const token = localStorage.getItem("token")
            try {
                axios
                    .post(
                        `${API}/squeeze?link=${link}`,
                        {},
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    .then((res) => {
                        const newLink = {
                            key: key,
                            link: link,
                            number: res.data.counter,
                            short: res.data.short,
                        }
                        dispatch(LinkActionCreators.setLink(newLink))

                        if (localStorage.getItem("links")) {
                            let addNewLink: any[] = [
                                ...JSON.parse(
                                    localStorage.getItem("links") + ""
                                ),
                                newLink,
                            ]
                            localStorage.setItem(
                                "links",
                                JSON.stringify(addNewLink)
                            )
                        } else {
                            localStorage.setItem(
                                "links",
                                JSON.stringify([newLink])
                            )
                        }
                    })
            } catch (e) {
                dispatch(
                    LinkActionCreators.setIsError(
                        "Произошла ошибка при добавление"
                    )
                )
            }
        },
    removeLinkAsync: (key: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                if (localStorage.getItem("links")) {
                    let arrlinks: any[] = JSON.parse(
                        localStorage.getItem("links") + ""
                    )
                    let index = arrlinks.findIndex((link) => link.key === key)
                    arrlinks.splice(index, 1)

                    localStorage.setItem("links", JSON.stringify(arrlinks))
                    dispatch(LinkActionCreators.removeLink(key))
                }
            }, 1000)
        } catch (e) {
            dispatch(
                LinkActionCreators.setIsError("Произошла ошибка при удаление")
            )
        }
    },
    getLink: () => async (dispatch: AppDispatch) => {
        if (localStorage.getItem("links")) {
            let arrLinks: any[] = JSON.parse(
                String(localStorage.getItem("links"))
            )
            dispatch(LinkActionCreators.setLinks(arrLinks))
        }
    },
}
