import { RouterProvider } from "react-router";
import router from "./app/routes/routes";


function App(): React.JSX.Element {
  return <RouterProvider router={router} />
}

export default App;