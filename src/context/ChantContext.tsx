import {createContext, useReducer} from 'react';
import {chantReducer} from '../reducer/chantReducer';

export interface ChantState {
  chantsFav: string;
  chantsRemove: string;
  chantsFavArray: string[];
}

export interface ChantContextProps {
  chantState: ChantState;
  addChant: (chant: string) => void;
  removeChant: (chant: string) => void;
  addChantArray: (chant: string[]) => void;
  removeChantArray: (chant: string) => void;
}

export const initialStateChant: ChantState = {
  chantsFav: '',
  chantsRemove: '',
  chantsFavArray: [],
};

export const ChantContext = createContext({} as ChantContextProps);

export const ChantProvider = ({children}: any) => {
  const [chantState, dispatch] = useReducer(chantReducer, initialStateChant);

  const addChant = (chant: string) => {
    dispatch({type: 'addChant', payload: chant});
  };

  const removeChant = (chant: string) => {
    dispatch({type: 'removeChant', payload: chant});
    dispatch({type: 'removeChantArray', payload: chant});
  };

  const addChantArray = (chant: string[]) => {
    dispatch({type: 'addChantArray', payload: chant});
  };

  const removeChantArray = (chant: string) => {
    dispatch({type: 'removeChantArray', payload: chant});
  };

  return (
    <ChantContext.Provider
      value={{
        chantState,
        addChant,
        removeChant,
        addChantArray,
        removeChantArray,
      }}>
      {children}
    </ChantContext.Provider>
  );
};
