import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

export const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
