import React, { useContext, createContext, useReducer } from 'react';

const useCreateContext = (defaultValue, reducer) => {
    const defaultDispatch = () => defaultValue;
    const stateCtx = createContext(defaultValue);
    const dispatchCtx = createContext(defaultDispatch);

    const useStateCtx = (property) => {
        const state = useContext(stateCtx);
        return property ? state[property] : state;
    }

    const useDispatchCtx = () => useContext(dispatchCtx);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        return (
            <dispatchCtx.Provider value={dispatch}>
                <stateCtx.Provider value={state}>
                    {children}
                </stateCtx.Provider>
            </dispatchCtx.Provider>
        );
    }
}

export default useCreateContext;