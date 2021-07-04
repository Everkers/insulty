export const initialState = {
  category: "60d5e456b3440128f047081e",
}
export default function reducer(state, action) {
  switch (action.type) {
    case "set_category":
      return {
        ...state,
        category: action.payload,
      }

    default:
      throw new Error(`unknown action=${action.type}`)
  }
}
