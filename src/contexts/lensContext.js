import React, { useState, useContext, useMemo, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LensStateContext = createContext();

function LensProvider(props) {
  const [price, setPrice] = useLocalStorage('price', 0);
  const value = useMemo(() => [price, setPrice], [price]);
  return <LensStateContext.Provider value={value} {...props} />;
}

function useLens() {
  const context = useContext(LensStateContext);
  if (context === undefined) {
    throw new Error('useLens must be used within a LensProvider');
  }
  return context;
}

export { LensProvider, useLens };
