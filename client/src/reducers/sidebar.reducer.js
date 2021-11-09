import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actions/action.types";

const initialState = {
    sidebarState: true
}

const sidebar_reducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
           return {sidebarState: true}
    
        case CLOSE_SIDEBAR:
            return{sidebarState: false}
        default:
            return state;
    }
}

export {sidebar_reducer}