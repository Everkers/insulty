import { useQuery } from "react-query"
import InsultsAPI from "./api"
import { useFilterContext } from "contexts/FilterCategories"
export const useInsultsQuery = (filters) => {
  const { state } = useFilterContext()
  return useQuery(["insults", state], () => InsultsAPI.all(filters), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
