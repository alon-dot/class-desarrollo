import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homes from './pages/Homes';
import Logins from './pages/Logins';
import Registros from './pages/Registros';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homes />,
  },
  {
    path: '/login',
    element: <Logins />,
  },
  {
    path: '/registro',
    element: <Registros />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;