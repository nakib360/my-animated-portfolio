import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

const routs = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default routs;
