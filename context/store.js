import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export function AppWrapper({ children }) {
  const [sharedState, dispatch] = useReducer(reducer, {});

  return (
    <AppContext.Provider value={sharedState, dispatch}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}