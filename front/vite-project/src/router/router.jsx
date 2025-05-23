import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Wish from "../pages/wish/Wish";
import Admin from "../dashboard/Admin";
import NotFound from "../pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wish", element: <Wish /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
