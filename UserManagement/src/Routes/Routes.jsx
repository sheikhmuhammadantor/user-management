import { createBrowserRouter } from "react-router-dom";
import { AddUser, ErrorPage, Home, MainLayout, UpdateUser } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-user',
        element: <AddUser/>
      },
      {
        path: '/update-user',
        element: <UpdateUser/>
      }
    ]
  },
]);
