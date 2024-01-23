import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/MyRouter";

import Navbar from "./component/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
