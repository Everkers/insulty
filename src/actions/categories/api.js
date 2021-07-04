import request from "utils/request"

const all = () => {
  return request({
    url: "games",
    method: "GET",
  })
}
const CategoriesAPI = {
  all,
}
export default CategoriesAPI
