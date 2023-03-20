import React from 'react';
import { GlobalStyles } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
