import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <Navbar /> }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
