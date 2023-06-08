import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { openModalFun, closeModalFun } from "../redux/actions/settings";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../redux/actions/post";

import { MessageFromSchema } from "../validators/MessageFormValidator";

export const ValidationSchemaExample = () => {
  const [baseValue, setbaseValue] = useState({});
  const dispatch = useDispatch();
  const { form, update_post_id } = useSelector((s) => s.posts);
  const SubmitFun = (values) => {
    try {
      values.selectedFiled = baseValue.base64;
      if (update_post_id == null) dispatch(createPost(values));
      else dispatch(updatePost(values, update_post_id));
      dispatch(closeModalFun());
      Swal.fire("Good job!", "Your Message is Saves Sucess", "success");
    } catch (err) {}
  };
  return (
    <>
      <div>
        <Formik
          initialValues={form}
          validationSchema={MessageFromSchema}
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
                {update_post_id == null ? (
                  <button
                    className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Update
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ValidationSchemaExample;
