import * as Yup from "yup";

export const LoginValidator = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .email("Type Valid Email"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const RegisterValidator = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .email("Type Valid Email"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
