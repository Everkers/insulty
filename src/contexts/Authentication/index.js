import React from "react"
import authAPI from "actions/auth/api"
import { authStorage, createAction } from "utils"
import reducer, { initialState } from "./reducer"

const AuthContext = React.createContext()

export const useAuthContext = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("You need to call useContext within provider")
  }

  return context
}

export const useUser = () => {
  const { user } = useAuthContext()
  return user
}

export const AuthProvider = ({ children }) => {
  const [{ error, user, status, token, authenticated }, dispatch] =
    React.useReducer(reducer, initialState)

  const login = React.useCallback(async (cords) => {
    try {
      const { token, user } = await authAPI.login(cords)
      dispatch(createAction("set_pending"))
      authStorage.persist(token)
      dispatch(createAction("set_user", user))
    } catch (err) {
      dispatch(createAction("set_error", err))
    }
  }, [])
  const register = React.useCallback(async (cords) => {
    try {
      const { token, user } = await authAPI.register(cords)
      authStorage.persist(token)
      dispatch(createAction("set_user", user))
    } catch (err) {
      dispatch(createAction("set_error", err))
    }
  }, [])
  const logout = React.useCallback(async () => {
    try {
      await authAPI.logout()
    } catch (err) {
      dispatch(createAction("set_error", err))
    } finally {
      authStorage.clear()
      dispatch(createAction("logout"))
    }
  }, [])

  React.useEffect(() => {
    const checkAuthState = async () => {
      const { token } = authStorage.get()
      if (!token) {
        // if there is no token we dispatch logout just incase
        await logout()
      } else {
        try {
          dispatch(createAction("set_pending"))
          const { user } = await authAPI.fetchUser()
          dispatch(createAction("set_user", user))
        } catch (err) {
          await logout()
        }
      }
    }
    checkAuthState()
  }, [login, logout])

  const value = React.useMemo(
    () => ({
      error,
      user,
      status,
      register,
      token,
      authenticated,
      login,
      logout,
    }),
    [authenticated, register, error, login, logout, status, token, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AUTH_STATUS } from "./reducer"

export default AuthProvider
