import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default routs;
