import * as Yup from "yup"
import _ from "lodash"
import { useFormik } from "formik"
import { useRootContext, useInsultTypes } from "contexts/root-provider"
import { useFilterContext } from "contexts/FilterCategories"
import { useMutation, useQueryClient } from "react-query"
import InsultsAPI from "actions/insults/api"
import { notification, hideInsultModal } from "utils/dispatch"
export default function useInsultCreationForm(type, id) {
  const { state, dispatch } = useRootContext()
  const insultTypes = useInsultTypes()
  const { state: filters } = useFilterContext()
  const { mutateAsync: addInsult } = useMutation(InsultsAPI.add)
  const { mutateAsync: editInsult } = useMutation(InsultsAPI.edit)
  const queryClient = useQueryClient()
  return useFormik({
    initialValues: { game: state.insultModal.defaultGame, insult: "" },
    enableReinitialize: true,
    validationSchema: () =>
      Yup.object({
        game: Yup.string(),
        insult: Yup.string().required(),
      }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      try {
        hideInsultModal(dispatch)
        const data =
          type === insultTypes.ADD
            ? await addInsult(values)
            : await editInsult({ values, id })
        const filter =
          filters.game !== undefined
            ? { ...filters, game: data.insult.game }
            : {}
        queryClient.setQueryData(["insults", filter], (oldData) => {
          if (type === insultTypes.EDIT) {
            const nextData = {
              ...oldData,
              Insult: oldData.Insult.map((item) =>
                item._id === data.insult._id ? data.insult : item
              ),
            }
            return nextData
          } else {
            const nextData = _.clone(oldData)
            nextData.Insult.push(data.insult)
            return nextData
          }
        })
      } catch (err) {
      } finally {
        resetForm({})
        notification(
          dispatch,
          `Insult have been ${type === insultTypes.EDIT ? "edited" : "created"}`
        )
        setSubmitting(false)
      }
    },
  })
}
