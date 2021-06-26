export const authStorage = {
  /**
   * Removes auth data (token & token expiration date)
   * from local storage
   */
  clear: () => {
    localStorage.removeItem("token")
  },

  /**
   * persist auth data (token & token expiration date) to
   * local storage
   */
  persist: (token) => {
    try {
      localStorage.setItem("token", token)
    } catch (err) {
      console.error(err)
    }
  },
  /**
   * gets persisted auth data from local storage.
   */
  get: () => {
    try {
      return {
        token: localStorage.getItem("token"),
        tokenExpDate: localStorage.getItem("tokenExpDate"),
      }
    } catch (err) {
      console.error(err)
      // since using destructuring on undefined or null
      // value will cause an error we return an empty object.
      return {}
    }
  },
}
export const createAction = (type, payload) => ({ type, payload })
