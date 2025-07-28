import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import DataHome from '../data-driven/Home/DataHome';
import ResponsibilityHome from '../responsibility-driven/Home/ResponsibilityHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'data',
        element: <DataHome />,
      },
      {
        path: 'responsibility',
        element: <ResponsibilityHome />,
      },
    ],
  },
]);

export default router;
