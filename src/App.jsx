import { useEffect, useState } from "react";
import { AppDenied, AppBar, Posts, Home, Login, Register } from "./components";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/post";
import Modal from "./components/Modal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const [DeiedApp, setDeiedApp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
    const CheckIfAppDenied = (width) => {
      console.log(width);
      if (width > 700) setDeiedApp(true);
      else setDeiedApp(false);
    };
    window.addEventListener("resize", () =>
      CheckIfAppDenied(window.innerWidth)
    );
    CheckIfAppDenied(window.innerWidth);
    dispatch(getPosts());
    console.log("affter Response");
  });

  if (DeiedApp == true) return <AppDenied />;
  return (
    <div className="container_app  bg-primary min-h-screen text-white w-full max-w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
