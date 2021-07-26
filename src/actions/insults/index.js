import { useQuery, useMutation, useQueryClient } from "react-query"
import InsultsAPI from "./api"
import { useFilterContext } from "contexts/FilterCategories"
export const useInsultsQuery = (filters) => {
  const { state } = useFilterContext()
  return useQuery(["insults", state], () => InsultsAPI.all(filters), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    suspense: true,
  })
}
export const useInsultQuery = (id) => {
  return useQuery(["insults", id], () => InsultsAPI.one(id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
  })
}

export const useDeleteMutation = (filter, callback = () => {}) => {
  const queryClient = useQueryClient()
  return useMutation(InsultsAPI.remove, {
    onMutate: (id) => {
      queryClient.setQueryData(["insults", filter], (oldData) => {
        return {
          ...oldData,
          Insult: oldData.Insult.filter((item) => item._id !== id),
        }
      })
    },
    onSuccess: () => callback(),
  })
}
export const useLikeMutation = (filter, callback = () => {}) => {
  const queryClient = useQueryClient()
  return useMutation(InsultsAPI.like, {
    onMutate: (id) => {
      queryClient.setQueryData(["insults", filter], (oldData) => {
        return {
          ...oldData,
          Insult: oldData.Insult.map((item) =>
            item._id === id ? { ...item, liked: !item.liked } : item
          ),
        }
      })
    },
    onSuccess: () => callback(),
  })
}
