import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Components/Home/Home";
import Industry from "./Components/Pages/Industry/Industry";
import About from "./Components/Pages/About/About";
import Error from "./Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/industry",
        element: <Industry />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
