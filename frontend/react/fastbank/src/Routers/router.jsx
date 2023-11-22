import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const rota = createBrowserRouter ([
    {   
        path: '/',
        element: <Home />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {   
        path: '/signup',
        element: <SignUp />
    },
])


export default function RouterProject() {
  return (
        <RouterProvider router={rota}/>
  );
}
