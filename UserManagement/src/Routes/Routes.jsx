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
        element: <Home />,
        loader: () => fetch('http://localhost:4232/all-user')
      },
      {
        path: '/add-user',
        element: <AddUser/>
      },
      {
        path: '/update-user/:id',
        element: <UpdateUser/>,
        loader: ({params}) => fetch(`http://localhost:4232/update-user/${params.id}`)
      }
    ]
  },
]);
