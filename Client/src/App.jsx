import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DirectoryView from "./DirectoryView";
import Login from "./login";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <DirectoryView />
      </Layout>
    ),
  },
  {
    path: "/directory/:id",
    element: (
      <Layout>
        <DirectoryView />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;