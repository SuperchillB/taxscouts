import HeaderLayout from '../header';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { StyledMainContainer } from './root-layout.styles';

export default function RootLayout() {
  return (
    <div>
      <HeaderLayout />

      <StyledMainContainer>
        <Outlet />
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </StyledMainContainer>
    </div>
  );
}
