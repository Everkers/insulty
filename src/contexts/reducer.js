export const initialState = {
  notification: {
    show: false,
    message: null,
    authenticated: false,
  },
  insultModalShow: false,
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
    case "set_insult_modal":
      return {
        ...state,
        insultModalShow: action.payload,
      }
    default:
      return state
  }
}
