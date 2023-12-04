import { Home, HomeCliente, SignIn, SignUp} from 'pages'
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

const rota = createBrowserRouter ([
    {   
        path: '/',
        element: <Home />
    },
    {   
        path: '/home',
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
    {   
        path: '/homecliente',
        element: <HomeCliente />
    },
])


export default function AppRoutes() {
  return (
        <RouterProvider router={rota}/>
  );
}