import React, { useContext, useMemo, createContext, useReducer } from 'react';

const LensStateContext = createContext();
const LensDispatchContext = createContext();

// constants
const UPDATE_ACTION = 'UPDATE_ACTION';
const UPDATE_PRICE = 'UPDATE_PRICE';

// initial state
const initialState = {
  action: 'sell',
  price: 0,
  location: '',
  name: '',
  model: '',
  buyDate: '2015-03',
  fromDealer: true,
  underWarranty: true,
  fullPackaged: true,
  hasReceipt: true,
  note: ''
};

function lensReducer(state, action) {
  console.log('#####: lensReducer -> state', state);
  console.log('#####: lensReducer -> action', action);
  switch (action.type) {
    case UPDATE_ACTION: {
      return { ...state, action: action.payload.action };
    }
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
  const [state, dispatch] = useReducer(lensReducer, initialState);
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
function updateAction(dispatch, action) {
  dispatch({ type: UPDATE_ACTION, payload: { action } });
}

function updatePrice(dispatch, price) {
  dispatch({ type: UPDATE_PRICE, payload: { price } });
}

export { LensProvider, useLensState, useLensDispatch, updateAction, updatePrice };
