import React, { useReducer } from 'react';
import { DrawerContext } from './drawer.context';

const initailState = {
    isOpen: false,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    }
}

export  const DrawerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initailState);
    return (
        <DrawerContext.Provider value={{ state, dispatch }}>
            {children}
        </DrawerContext.Provider>
    );
}