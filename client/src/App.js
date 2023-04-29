import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewVideo from "./pages/NewVideo.jsx";
import NewCategory from "./pages/NewCategory.jsx";
import Error404 from "./pages/Error404.jsx";
import Edit from "./pages/Edit.jsx";
import GlobalStyle from "./global.js";
import { DataProvider } from "./Context/DataContext.js";

function App() {
  const Layout = () => {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/newVideo", element: <NewVideo /> },
        { path: "/newCategory", element: <NewCategory /> },
        { path: "/edit/:id", element: <Edit /> },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);

  return (
    <>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  );
}

export default App;
