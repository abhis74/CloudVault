import {createBrowserRouter, RouterProvider} from "react-router-dom";

import DirectoryView from "./DirectoryView";
import Login from "./login";
import Register from "./Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DirectoryView />,
    //  children: [{ path: "*", element: <Dashboard /> }]
  },
  {
    path: "/directory/:id",
    element: <DirectoryView />,
    //  children: [{ path: "*", element: <Dashboard /> }]
  },
  {
    path: "/login",
    element: <Login />,
    //  children: [{ path: "*", element: <Dashboard /> }]
  },
  {
    path: "/register",
    element: <Register />,
    //  children: [{ path: "*", element: <Dashboard /> }]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App