import request from "utils/request"

const login = (cords) => {
  return request({
    url: "user/login",
    method: "POST",
    data: cords,
  })
}

const register = (cords) => {
  return request({
    url: "user/register",
    method: "POST",
    data: cords,
  })
}
export const fetchUser = () => {
  return request({
    url: "user/profile",
    method: "GET",
  })
}

const authAPI = {
  login,
  register,
  fetchUser,
}
export default authAPI
