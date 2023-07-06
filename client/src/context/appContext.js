import { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { reducer } from './reducer'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from './action'

const AppContext = createContext()

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const location = localStorage.getItem('location')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: location || '',
  jobLocation: location || '',
  showSidebar: false,
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
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  const registerUser = async (currentUser) => {
    console.log('register 2')
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      // console.log(response)
      const { user, token, location } = response.data
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.err },
      })
    }
    clearAlert()
  }

  const loginUser = async (currentUser) => {
    console.log('login ml')
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post('/api/v1/auth/login', currentUser)
      // console.log(response)
      const { user, token, location } = data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.err },
      })
    }
    clearAlert()
  }

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
