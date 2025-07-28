import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import DataHome from '../data-driven/pages/Home/DataHome';
import ResponsibilityHome from '../responsibility-driven/Home/ResponsibilityHome';
import DName from '../data-driven/pages/Name/DName';
import DDate from '../data-driven/pages/Date/DDate';
import DComplete from '../data-driven/pages/Complete/DComplete';
import DataContextProvider from '../data-driven/contexts/DataContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'data',
        element: (
          <DataContextProvider>
            <DataHome />
          </DataContextProvider>
        ),
        children: [
          {
            path: 'name',
            element: <DName />,
          },
          {
            path: 'date',
            element: <DDate />,
          },
          {
            path: 'complete',
            element: <DComplete />,
          },
        ],
      },
      {
        path: 'responsibility',
        element: <ResponsibilityHome />,
      },
    ],
  },
]);

export default router;
