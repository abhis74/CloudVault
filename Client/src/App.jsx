import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DirectoryView from "./DirectoryView";
import Login from "./login";
import Register from "./Register";
import { store } from "./store/store";
import { Provider } from 'react-redux'


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
  return <Provider store={store}><RouterProvider router={router} /></Provider> ;
}

export default App;