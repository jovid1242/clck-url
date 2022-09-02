import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { allActionCreators } from "./../store/reducers/actionCreators"

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}
