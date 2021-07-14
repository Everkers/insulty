import request from "utils/request"
import _ from "lodash"
const all = (filters) => {
  return request({
    url: "insult",
    method: "GET",
    // don't add filters if an object property is undefined
    params: _.values(filters).some((value) => value === undefined)
      ? ""
      : filters,
  })
}
const one = (id) => {
  return request({
    url: `insult/${id}`,
    method: "GET",
  })
}
const edit = ({ values, id }) => {
  return request({
    url: `insult/${id}`,
    method: "PATCH",
    data: values,
  })
}
const add = (insult) => {
  return request({
    url: "insult/new",
    method: "POST",
    data: insult,
  })
}

const InsultsAPI = {
  all,
  one,
  add,
  edit,
}
export default InsultsAPI
