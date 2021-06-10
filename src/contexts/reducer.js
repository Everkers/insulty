export const initialState = {
  notification: {
    show: false,
    message: null,
  },
}
export default function reducer(state, action) {
  switch (action.type) {
    case "set_notification":
      return {
        ...state,
        notification: action.payload,
      }
    default:
      return state
  }
}
