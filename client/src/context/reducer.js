import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './action'
const reducer = (state, action) => {
  console.log(action.type)
  if (action.type == DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values',
    }
  }
  if (action.type == CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: '', alertType: '' }
  }
  if (action.type == REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type == REGISTER_USER_SUCCESS) {
    const { user, token, location } = action.payload
    return {
      ...state,
      isLoading: false,
      token: token,
      user: user,
      userLocation: location,
      jobLocation: location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User created ! Redirecting...',
    }
  }
  if (action.type == REGISTER_USER_ERROR) {
    const { user, token, location } = action.payload
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type == LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type == LOGIN_USER_SUCCESS) {
    const { user, token, location } = action.payload
    return {
      ...state,
      isLoading: false,
      token: token,
      user: user,
      userLocation: location,
      jobLocation: location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login SuccessFull...',
    }
  }
  if (action.type == LOGIN_USER_ERROR) {
    const { user, token, location } = action.payload
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  console.log('ml', action.type)
  throw new Error(`no such action: ${action.type} `)
}
export { reducer }
