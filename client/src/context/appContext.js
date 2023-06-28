import { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'
import { DISPLAY_ALERT, CLEAR_ALERT } from './action'

const AppContext = createContext()
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
