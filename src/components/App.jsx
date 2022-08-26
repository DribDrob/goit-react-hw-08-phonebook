import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Login />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};
