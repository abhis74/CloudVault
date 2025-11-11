import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainContent from "./components/Layout/MainContent/MainContent";
import HomePage from "./pages/HomePage/HomePage";
import VaultPage from "./pages/VaultPage/VaultPage";
import SharedPage from "./pages/SharedPage/SharedPage";
import StarredPage from "./pages/StarredPage/StarredPage";
import RecentsPage from "./pages/RecentsPage/RecentsPage";
import TrashPage from "./pages/TrashPage/TrashPage";
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
        <MainContent>
          <HomePage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <MainContent>
          <HomePage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/vault",
    element: (
      <Layout>
        <MainContent>
          <VaultPage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/shared",
    element: (
      <Layout>
        <MainContent>
          <SharedPage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/starred",
    element: (
      <Layout>
        <MainContent>
          <StarredPage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/recents",
    element: (
      <Layout>
        <MainContent>
          <RecentsPage />
        </MainContent>
      </Layout>
    ),
  },
  {
    path: "/trash",
    element: (
      <Layout>
        <MainContent>
          <TrashPage />
        </MainContent>
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
  return <Provider store={store}><RouterProvider router={router} /></Provider>;
}

export default App;