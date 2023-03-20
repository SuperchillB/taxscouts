import { createBrowserRouter } from 'react-router-dom';
// import Error from './pages/Error';
import HomePage from './pages/home-page';
import RootLayout from './layouts/root';
import BookDetailsPage from './pages/book-details-page';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'books/:id',
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export default router;
