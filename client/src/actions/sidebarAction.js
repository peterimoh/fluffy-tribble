import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./action.types";


const openSidebar = () => async (dispatch) => {
    dispatch({ type: OPEN_SIDEBAR });
}

const closeSidebar = () => (dispatch) => {
    dispatch({type: CLOSE_SIDEBAR})
}

export {openSidebar, closeSidebar}