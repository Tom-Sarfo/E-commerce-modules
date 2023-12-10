import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import Product from "./ProductComponents/Product.jsx";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Cart from "./CartComponents/Cart.jsx";
import ShippingOutlet from "./ShippingComponents/ShippingOutlet.jsx";
import OrderSummary from "./OrderSummaryComponents/OrderSummary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      {
        path: "/cart",
        element: <ShippingOutlet />
      },
      {
        path: "/cart/summary",
        element: <OrderSummary />
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
