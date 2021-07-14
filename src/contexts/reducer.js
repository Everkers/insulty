export const INSULT_TYPES = {
  ADD: "ADD",
  EDIT: "EDIT",
}
export const initialState = {
  notification: {
    show: false,
    message: null,
    authenticated: false,
  },
  insultModal: {
    type: INSULT_TYPES.ADD,
    show: false,
    insultId: null,
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
    case "set_insult_modal":
      return {
        ...state,
        insultModal: action.payload,
      }
    default:
      return state
  }
}
