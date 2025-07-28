import { useDataFunnelContext } from '../../contexts/useDataContext';

const DComplete = () => {
  const { dataFunnelData } = useDataFunnelContext();

  return (
    <div>
      <p>모든 입력이 완료되었습니다!</p>
      <p>{JSON.stringify(dataFunnelData)}</p>
    </div>
  );
};

export default DComplete;
