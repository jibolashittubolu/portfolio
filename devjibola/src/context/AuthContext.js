import { createContext, useContext, useEffect, useReducer, useState } from 'react'
// import authReducer from './AuthReducer'

const authReducer = (state, action) => {
  switch (action.type) {
      case "LOGIN_START":
          return {
              ...state,
              currentUser: null,
              isLoading: true,
              error: false,
          }
      case "LOGIN_SUCCESS":
        // console.log(state)
          return {
              currentUser: action.payload,
              isLoading: false,
              error:  false,
              register_pending: false
          }
      case "LOGIN_FAILURE":
          return {
              ...state,
              currentUser: null,
              isLoading: false,
              error: true,
          }
      case "LOGOUT":
          return {
              currentUser: null,
              isLoading: false,
              error: false,
              register_pending: false
          }
      default:
          return state;
  }
}

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    isLoading: false,
    error: false,
    register_pending: false
}
export const AuthContext = createContext(INITIAL_STATE)


export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(state.currentUser))
}, [state.currentUser])

  return (
    <AuthContext.Provider
    value={{
        currentUser: state.currentUser,
        isFetching: state.isLoading,
        error:state.error,
        register_pending: state.register_pending,
        dispatch,
    }}>
        {!state.isLoading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext