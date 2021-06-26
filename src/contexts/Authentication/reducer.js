export const AUTH_STATUS = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
  IDLE: "IDLE",
}

export const initialState = {
  error: null,
  user: null,
  status: AUTH_STATUS.IDLE,
  token: null,
  authenticated: false,
}

export default function reducer(state, action) {
  switch (action.type) {
    case "set_token":
      return {
        ...state,
        token: action.payload,
      }
    case "set_user":
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        status: AUTH_STATUS.RESOLVED,
      }
    case "set_pending":
      return {
        ...state,
        status: AUTH_STATUS.PENDING,
      }
    case "set_error":
      return {
        ...state,
        status: AUTH_STATUS.REJECTED,
        error: action.payload,
      }
    case "logout":
      return {
        ...initialState,
        status: AUTH_STATUS.RESOLVED,
      }
    default:
      return state
  }
}
