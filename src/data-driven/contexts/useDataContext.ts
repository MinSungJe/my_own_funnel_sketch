import { createContext, useContext } from 'react';

interface DataFunnelContext {
  dataFunnelData: DataFunnelData;
  setDataFunnelData: React.Dispatch<React.SetStateAction<DataFunnelData>>;
}

interface DataFunnelData {
  name?: string;
  date?: string;
}

export const DataFunnelContext = createContext<DataFunnelContext | null>(null);

export const useDataFunnelContext = () => {
  const context = useContext(DataFunnelContext);
  if (!context) throw new Error('useDataContext는 DataContextProvider 내에서 사용해야 합니다.');
  return context;
};
