import request from "utils/request"

const login = (cords) => {
  return request({
    url: "user/login",
    method: "POST",
    data: cords,
  })
}

const register = (params) => {
  return request({
    url: "user/register",
    method: "POST",
    params: { params },
  })
}
export const fetchUser = () => {
  return request({
    url: "user/profile",
    method: "GET",
  })
}

export default {
  login,
  register,
  fetchUser,
}
