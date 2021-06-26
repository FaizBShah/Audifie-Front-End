import { createContext, useContext, useReducer } from 'react';
import { SELECT_FILE, REMOVE_FILE } from './types';

const AppContext = createContext();

const initialState = {
  file: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_FILE:
      return {
        ...state,
        file: action.payload
      };
    
    case REMOVE_FILE:
      return {
        ...state,
        file: null
      };
    
    default:
      return state;
  }
}

export function AppWrapper({ children }) {
  const [sharedState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{sharedState, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}