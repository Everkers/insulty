import * as Yup from "yup"
import { useFormik } from "formik"
export default function useInsultCreationForm() {
  return useFormik({
    initialValues: { game: "60d5e456b3440128f047081e", insult: "" },
    validationSchema: () =>
      Yup.object({
        game: Yup.string(),
        insult: Yup.string().required(),
      }),

    onSubmit: async (values, { setSubmitting }) => {
      console.log(values)
    },
  })
}
