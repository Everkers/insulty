import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
})

instance.interceptors.request.use(
  (config) => {
    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
    if (config.baseURL === BASE_API_URL && !config.headers.Authorization) {
      // we get the token from local storage if it exists
      // and we set it to the Authorization header
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

// response interceptor
instance.interceptors.response.use(
  ({ data: res, ...response }) => {
    // if is a "success" status code
    if (response.status > 100 && response.status < 400) {
      return res
    } else {
      throw new Error(res.message || "Error occured")
    }
  },
  (error) => Promise.reject(error)
)

export default instance
