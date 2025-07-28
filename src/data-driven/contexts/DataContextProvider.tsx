import { useState, type ReactNode } from 'react';
import { DataFunnelContext } from './useDataContext';

const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [dataFunnelData, setDataFunnelData] = useState({});

  return (
    <DataFunnelContext.Provider value={{ dataFunnelData, setDataFunnelData }}>
      {children}
    </DataFunnelContext.Provider>
  );
};

export default DataContextProvider;
