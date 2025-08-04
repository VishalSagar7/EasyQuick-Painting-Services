import router from "./Routing/router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;
