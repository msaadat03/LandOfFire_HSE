import React, { createContext, useContext, useReducer } from 'react'

const BgImageContext = createContext();

const initialValues = {
    bgImage: '/buta.svg',
}

export const bgImageActions = {
    change: "CHANGE",
}
export const BgImageReducer = (state, action) => {
    switch (action.type) {
        case bgImageActions.change: {
            return {
                bgImage: action.payload
            }
        }
    }
}

export const BgImageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BgImageReducer, initialValues);

    return (
        <BgImageContext.Provider value={{ state, dispatch }}>
            {children}
        </BgImageContext.Provider>
    )
}

export const useBgImage = ()=> useContext(BgImageContext);