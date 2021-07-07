import * as Yup from "yup"
import { useFormik } from "formik"
import { useAuthContext } from "contexts/Authentication"
export default function useLoginForm() {
  const { register } = useAuthContext()
  return useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: () =>
      Yup.object({
        username: Yup.string()
          .required()
          .min(6, "username length must be at least 6 characters long"),
        password: Yup.string()
          .required()
          .min(4, "password length must be at least 4 characters long"),
      }),

    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      await register(values)
      setSubmitting(false)
    },
  })
}
