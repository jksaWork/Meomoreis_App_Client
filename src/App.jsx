import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AppDenied, AppBar, Posts } from "./components";

function App() {
  const [DeiedApp, setDeiedApp] = useState(false);
  useEffect(() => {
    const CheckIfAppDenied = (width) => {
      console.log(width);
      if (width > 700) setDeiedApp(true);
      else setDeiedApp(false);
    };
    window.addEventListener("resize", () =>
      CheckIfAppDenied(window.innerWidth)
    );
    CheckIfAppDenied(window.innerWidth);
  });

  if (DeiedApp == true) return <AppDenied />;
  return (
    <div className="container_app  bg-primary min-h-screen text-white w-full max-w-full">
      <AppBar />
      <Posts />
    </div>
  );
}

export default App;
