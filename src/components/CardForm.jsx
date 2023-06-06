import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { openModalFun, closeModalFun } from "../redux/actions/settings";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/post";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  tags: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  creator: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const ValidationSchemaExample = () => {
  const [baseValue, setbaseValue] = useState({});
  const dispatch = useDispatch();
  () => toast("Wow so easy!")();
  const SubmitFun = (values) => {
    try {
      values.file = baseValue;
      console.log(values);
      dispatch(createPost(values));
      dispatch(closeModalFun());
      Swal.fire("Good job!", "Your Message is Saves Sucess", "success");
    } catch (err) {}
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            title: "",
            message: "",
            tags: "",
            creator: "",
            file: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={SubmitFun}
        >
          {({ errors, touched }) => (
            <Form className="px-3">
              <Field
                name="title"
                className="bg-secondary mt-3 mb-2  border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   
            dark:focus:border-blue-500"
              />
              {errors.title && touched.title ? (
                <div className="text-[#e11d48]">{errors.title}</div>
              ) : null}
              <Field
                name="creator"
                className="bg-secondary mt-3 mb-2  border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   
            dark:focus:border-blue-500"
              />
              {errors.creator && touched.creator ? (
                <div className="text-[#e11d48]">{errors.creator}</div>
              ) : null}
              <Field
                name="message"
                type="text"
                className="bg-secondary mt-3 mb-2  border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   
              dark:focus:border-blue-500"
              />
              {errors.message && touched.message ? (
                <div className="text-[#e11d48]">{errors.message}</div>
              ) : null}
              <Field
                name="tags"
                type="text"
                className="bg-secondary mt-3 mb-2  border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   
              dark:focus:border-blue-500"
              />
              {errors.tags && touched.tags ? (
                <div className="text-[#e11d48]">{errors.tags}</div>
              ) : null}
              <FileBase64
                multiple={false}
                onDone={(val) => {
                  console.log(val);
                  setbaseValue(val);
                }}
              />
              <br />
              <div className="flex items-center justify-end p-6 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => dispatch(closeModalFun())}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  //    onClick={() => console.log("Hello World")}
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ValidationSchemaExample;
