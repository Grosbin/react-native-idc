import {ChantState} from '../context/ChantContext';

export type ChantAction =
  | {type: 'addChant'; payload: string}
  | {type: 'removeChant'; payload: string}
  | {type: 'addChantArray'; payload: string[]}
  | {type: 'removeChantArray'; payload: string};

export const chantReducer = (
  state: ChantState,
  action: ChantAction,
): ChantState => {
  switch (action.type) {
    case 'addChant':
      return {
        ...state,
        chantsFav: action.payload,
      };
    case 'removeChant':
      return {
        ...state,
        chantsFav: action.payload,
      };
    case 'addChantArray':
      return {
        ...state,
        chantsFavArray: action.payload,
      };
    case 'removeChantArray':
      return {
        ...state,
        chantsRemove: action.payload,
      };

    default:
      return state;
  }
};
