import {AuthState} from '../context/AuthContext';

export type AuthAction =
  | {type: 'removeAlert'}
  | {type: 'addAlert'; payload: string}
  | {type: 'isLoggedIn'; payload: boolean};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'removeAlert':
      return {
        ...state,
        alertMessage: '',
        isAlert: false,
      };
    case 'addAlert':
      return {
        ...state,
        alertMessage: action.payload,
        isAlert: true,
      };
    case 'isLoggedIn':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
