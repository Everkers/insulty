export const initialState = {
  game: undefined,
}
export default function reducer(state, action) {
  switch (action.type) {
    case "set_category":
      return {
        ...state,
        game: action.payload,
      }

    default:
      throw new Error(`unknown action=${action.type}`)
  }
}
