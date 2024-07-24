import { createBrowserRouter } from "react-router-dom";
import MyHook from "../hooks/MyHooks";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MyHook />,
  },
]);
