import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import Weather from "./pages/Weather.tsx";
//import Board from "./pages/Board.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import EditTicket from "./pages/EditTrip.tsx";
import CreateTicket from "./pages/CreateTrip.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Weather />,
      },
      {
        path: "/edit",
        element: <EditTicket />,
      },
      {
        path: "/create",
        element: <CreateTicket />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/clima",
        element: <Weather />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
