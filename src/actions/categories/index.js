import { useQuery } from "react-query"
import categoriesAPI from "./api"
export const useCategoriesQuery = () => {
  return useQuery("categories", () => categoriesAPI.all())
}
