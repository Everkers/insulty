import * as Yup from "yup"
import _ from "lodash"
import { useFormik } from "formik"
import { useRootContext } from "contexts/root-provider"
import { useFilterContext } from "contexts/FilterCategories"
import { useMutation, useQueryClient } from "react-query"
import InsultsAPI from "actions/insults/api"

export default function useInsultCreationForm() {
  const { dispatch } = useRootContext()
  const { state: filters } = useFilterContext()
  const { mutateAsync: addInsult } = useMutation(InsultsAPI.add)
  const queryClient = useQueryClient()
  return useFormik({
    initialValues: { game: "60d5e456b3440128f047081e", insult: "" },
    validationSchema: () =>
      Yup.object({
        game: Yup.string(),
        insult: Yup.string().required(),
      }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      try {
        const data = await addInsult(values)
        queryClient.setQueryData(
          [
            "insults",
            filters.game !== undefined
              ? { ...filters, game: data.insult.game }
              : {},
          ],
          (oldData) => {
            const nextData = _.clone(oldData)
            nextData.Insult.push(data.insult)
            return nextData
          }
        )
      } catch (err) {
        console.log(err)
      } finally {
        resetForm({})
        dispatch({
          type: "set_notification",
          payload: { message: "Insult have been created", show: true },
        })
        dispatch({
          type: "set_insult_modal",
          payload: false,
        })
        setSubmitting(false)
      }
    },
  })
}
