import { LangContextProvider } from "./contexts/langContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/index"
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  
]);

export const App = () => {

  return <LangContextProvider>
      <Layout>
       <RouterProvider router={router} />
       </Layout>
    </LangContextProvider>

}
