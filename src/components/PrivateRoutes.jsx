// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

// export default function PrivateRoutes({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.isLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to="login" />}
//     </Route>
//   );
// }

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoutes() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
}
