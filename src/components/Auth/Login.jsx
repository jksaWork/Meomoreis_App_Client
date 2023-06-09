import React from "react";
import { login_image } from "../../assets";
import { Field, Form, Formik } from "formik";
import { LoginValidator } from "../../validators/LoginValidator";
import CustomFiled from "../CustomFiled";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const responseGoogle = (res) => console.log(res);

import { GoogleLogin } from "@leecheuk/react-google-login";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/users";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginWithServe = (values) => {
    console.log(values);
    dispatch(LoginAction(values)).then(() => {
      navigate("/");
    });
    console.log("done");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="card bg-card rounded-md w-[350px] p-5 max-w-[90%] ">
        {" "}
        {/* image Container */}
        <div className="flex flex-col items-center">
          <div className="text-center bg-white inline-block rounded-[50%]">
            <img src={login_image} className="w-[120px] h-[100%]" />
          </div>
          <div className="text-2xl font-cairo font-bold mt-3">
            Wellcome Back
          </div>
          {/* Login Page */}
          <div className="w-full">
            <div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginValidator}
                onSubmit={LoginWithServe}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      component={CustomFiled}
                      className="p-2 w-full bg-transparent border-solid border-[1px] border-gray rounded-md"
                      name="email"
                      id="name"
                    />
                    <Field
                      component={CustomFiled}
                      className="p-2 w-full bg-transparent  border-solid border-[1px] border-gray rounded-md"
                      name="password"
                      id="name"
                    />
                    <div className="btn_home_di mt-3">
                      <button
                        type="submit"
                        className="w-full py-2 gap-2  flex items-center justify-center rounded-md text-center bg-IndigoColor text-md mt-3"
                      >
                        <span>
                          <MdOutlineLock />
                        </span>{" "}
                        <span>Login</span>
                      </button>

                      <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Contuino With Google"
                        className="w-full rounded-lg mt-2 text-center"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                      {/* <button className="w-full py-2 gap-2  flex items-center justify-center rounded-md text-center bg-IndigoColor text-md mt-3">
                        <span>
                          <FaGoogle color="red" />
                        </span>{" "}
                        <span>Contuino With Google</span>
                        
                      </button> */}
                      <div className="text-center underline mt-2">
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

export default Login;
