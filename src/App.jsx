import router from "./Routing/router";
import { RouterProvider } from "react-router-dom";
import WhatsappButton from "./components/WhatsappButton";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsappButton />
    </>
  )
}

export default App;
