import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
]);

export default router
