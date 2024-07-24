import { mainRoute } from "./routes/Router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
};
export default App;
