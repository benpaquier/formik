import { useFormik } from 'formik'
import * as Yup from 'yup'

const App = () => {
  const formik = useFormik({
    initialValues: {
      username: "benoit",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(5, "Username est trop court")
        .required("Username est requis"),
      password: Yup.string()
        .min(3, "password trop court")
        .max(10, "password trop long")
    }),
    // validateOnChange: false
  })

  console.log(formik.errors)

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="enter username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username && <p>{formik.errors.username}</p>}
      <br />
      <input
        type="password"
        name="password"
        placeholder="enter password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password && <p>{formik.errors.password}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App