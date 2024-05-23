import { createContext, useState } from "react";

export const WebContext = createContext({});

export default function WebContextProvider({ children }) {
    const ctxValue = {};

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}