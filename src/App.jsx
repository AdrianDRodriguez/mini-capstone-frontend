import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { OrdersIndex } from "./OrdersIndex";
import { OrdersNew } from "./OrdersNew";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { ProductsNew } from "./ProductsNew";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/orders",
        element: <OrdersIndex />,
      },
      {
        path: "/orders/new",
        element: <OrdersNew />,
      },
      {
        path: "/products/new",
        element: <ProductsNew />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;