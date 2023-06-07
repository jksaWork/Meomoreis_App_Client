import React from "react";
import { login_image } from "../../assets";
import { Field, Form, Formik } from "formik";
import {
  LoginValidator,
  RegisterValidator,
} from "../../validators/LoginValidator";
import CustomFiled from "../CustomFiled";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/users";

function Register() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const LoginWithServe = (values) => {
    dispacth(registerAction(values));
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="card bg-card rounded-md w-[450px] p-5 max-w-[90%] ">
        {" "}
        {/* image Container */}
        <div className="flex flex-col items-center">
          <div className="text-center bg-white inline-block rounded-[50%]">
            <img src={login_image} className="w-[120px] h-[100%]" />
          </div>
          <div className="text-2xl font-cairo font-bold mt-3">Sign Up</div>
          {/* Login Page */}
          <div className="w-full">
            <div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={RegisterValidator}
                onSubmit={LoginWithServe}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="grid grid-cols-2 gap-2">
                      <Field
                        component={CustomFiled}
                        class="p-2 w-full bg-transparent border-solid border-[1px] border-gray rounded-md"
                        name="first_name"
                        id="first_name"
                      />
                      <Field
                        component={CustomFiled}
                        class="p-2 w-full bg-transparent  border-solid border-[1px] border-gray rounded-md"
                        name="last_name"
                        id="last_name"
                      />
                    </div>
                    <Field
                      component={CustomFiled}
                      class="p-2 w-full bg-transparent  border-solid border-[1px] border-gray rounded-md"
                      name="email"
                      id="email"
                    />
                    <Field
                      component={CustomFiled}
                      class="p-2 w-full bg-transparent  border-solid border-[1px] border-gray rounded-md"
                      name="password"
                      id="password"
                    />
                    <Field
                      component={CustomFiled}
                      class="p-2 w-full bg-transparent  border-solid border-[1px] border-gray rounded-md"
                      name="password_confirm"
                      id="password_confirm"
                    />
                    <div className="btn_home_di mt-3">
                      <button
                        type="submit"
                        className="w-full py-2 gap-2  flex items-center justify-center rounded-md text-center bg-IndigoColor text-md mt-3"
                      >
                        <span>
                          <MdOutlineLock />
                        </span>{" "}
                        <span>register</span>
                      </button>

                      <button className="w-full py-2 gap-2  flex items-center justify-center rounded-md text-center bg-IndigoColor text-md mt-3">
                        <span>
                          <FaGoogle color="red" />
                        </span>{" "}
                        <span>Contuino With Google</span>
                      </button>
                      <div className="text-center underline">
                        <Link to="/register">You Don't Have Account ?</Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
