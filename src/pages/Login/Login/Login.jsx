import { useFormik } from "formik";
import { MyForm } from "../../../styles/my-form.s";
import { LoginBlock, LoginCard } from "./login.s";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const Login = () => {
  // form validation
  const authForm = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Text input is required")
        .test(
          "checkSpace",
          "Text must not start with a space",
          function (item) {
            return !/^[\s]/.test(item);
          }
        ),
      email: Yup.string()
        .required("Text input is required")
        .email("Email must be a valid email")
        .test(
          "checkLatin",
          "Text must contain only latin letters",
          function (item) {
            return /^[a-zA-Z0-9@._-]+$/.test(item);
          }
        )
        .test(
          "checkSpace",
          "Text must not start with a space",
          function (item) {
            return !/^[\s]/.test(item);
          }
        ),
      key: Yup.string()
        .required("Text input is required")
        .test(
          "checkLatin",
          "Text must contain only latin letters",
          function (item) {
            return /^[a-zA-Z0-9@._-]+$/.test(item);
          }
        ),
      secret: Yup.string()
        .required("Text input is required")
        .min(8, "Minimum length must be 8")
        .test(
          "checkSpace",
          "Text must contain only latin letters",
          function (item) {
            return /[\s]/.test(item);
          }
        ),
    }),
    onSubmit: (val) => {
      console.log(val);
    },
  });
  return (
    <>
      <LoginBlock>
        <LoginCard>
          <MyForm onSubmit={authForm.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              value={authForm.values.name}
              onChange={authForm.handleChange}
              onBlur={authForm.handleBlur}
              error={
                authForm.touched.name && authForm.errors.name ? true : false
              }
              helperText={authForm.touched.name && authForm.errors.name}
            />

            <Button>hello</Button>
          </MyForm>

          <h1>login pages</h1>
        </LoginCard>
      </LoginBlock>
    </>
  );
};

export default Login;
