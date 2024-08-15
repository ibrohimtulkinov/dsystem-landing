import { LangContextProvider } from "./contexts/langContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/index";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const App = () => {
  return (
    <LangContextProvider>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </div>

      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </LangContextProvider>
  );
};
