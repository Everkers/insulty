export const initialState = {
  notification: {
    show: false,
    message: null,
    authenticated: false,
  },
}
export default function reducer(state, action) {
  switch (action.type) {
    case "set_notification":
      return {
        ...state,
        notification: action.payload,
      }
    case "set_authenticated":
      return {
        ...state,
        authenticated: action.payload,
      }
    default:
      return state
  }
}
