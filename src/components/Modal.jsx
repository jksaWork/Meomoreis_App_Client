import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalFun, closeModalFun } from "../redux/actions/settings";
import CardForm from "./CardForm";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const { openModal } = useSelector((s) => s.settings);
  const dispatch = useDispatch();

  // console.log(settings, "s_______ettings");
  return (
    <>
      {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[95%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-primary outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5   rounded-t">
                  <h3 className="text-1xl font-semibold text-white">
                    Add Memories
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <CardForm />
                {/* End Modal Body */}
                {/*footer*/}
                {/*  Rmove Footer To Form */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
