import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext()


const INITIAL_THEME_STATE = {
    darkMode: true,
    themeColor: ''
}

const themeReducer = (state, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return {
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}

export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_THEME_STATE)
    return (
        <ThemeContext.Provider 
        value={{
            theme: state,
            dispatch
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}