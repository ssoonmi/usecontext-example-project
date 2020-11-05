import { createContext, useContext, useState } from 'react';

const ExampleContext = createContext();

export default function ExampleProvider({ children, initialValue }) {
  const [value, setValue] = useState(initialValue);
  return (
    <ExampleContext.Provider value={[value, setValue]}>
      {children}
    </ExampleContext.Provider>
  )
}

export function useExample() {
  return useContext(ExampleContext);
}
