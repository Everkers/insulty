import * as Yup from "yup"
import { useFormik } from "formik"
import { useAuthContext } from "contexts/Authentication"
export default function useLoginForm() {
  const { login } = useAuthContext()
  return useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: () =>
      Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string().required(),
      }),

    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      await login(values)
      setSubmitting(false)
    },
  })
}
