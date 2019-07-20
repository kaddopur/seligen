import React, { useContext, useMemo, createContext, useReducer } from 'react';

const LensStateContext = createContext();
const LensDispatchContext = createContext();

// constants
const UPDATE_PRICE = 'UPDATE_PRICE';

function lensReducer(state, action) {
  switch (action.type) {
    case UPDATE_PRICE: {
      return { ...state, price: action.payload.price };
    }
    default: {
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
    }
  }
}

function LensProvider({ children }) {
  const [state, dispatch] = useReducer(lensReducer, { price: 0 });
  return (
    <LensStateContext.Provider value={state}>
      <LensDispatchContext.Provider value={dispatch}>{children}</LensDispatchContext.Provider>
    </LensStateContext.Provider>
  );
}

function useLensState() {
  const context = useContext(LensStateContext);
  if (context === undefined) {
    throw new Error('useLensState must be used within a LensProvider');
  }
  return context;
}

function useLensDispatch() {
  const context = useContext(LensDispatchContext);
  if (context === undefined) {
    throw new Error('LensDispatchContext must be used within a LensProvider');
  }
  return context;
}

// updaters
function updatePrice(dispatch, price) {
  dispatch({ type: UPDATE_PRICE, payload: { price } });
}

export { LensProvider, useLensState, useLensDispatch, updatePrice };
