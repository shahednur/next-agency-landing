export const initailState = {
    isSticky: false,
    isSidebarSticky: false,
}

const reducer = (state, { type}) => {
    switch(type) {
        case 'SET_STICKY':
            return {
                ...state,
                isSticky: true,
            };
        case 'REMOVE_STICKY':
            return {
                ...state,
                isSticky: false,
            };
        case 'SET_SIDEBAR_STICKY':
            return {
                ...state,
                isSidebarSticky: true,
            };
        case 'REMOVE_SIDEBAR_STICKY':
            return {
                ...state,
                isSidebarSticky: false,
            };
        default:{
            throw new Error(`Unhandled action type: ${type}`);
        }
    }
}

export default reducer;