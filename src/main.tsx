//* dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

//* styling
import "./style/style.css";

//* routes/components
import AnimatedRouter from "./components/AnimatedRouter";
import Navbar from "./components/Navbar";
import CookieDisclaimer from "./components/CookieDisclaimer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRouter />
        <CookieDisclaimer />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]); */

/* 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 */
