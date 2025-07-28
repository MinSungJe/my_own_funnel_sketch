import { useNavigate } from 'react-router-dom';
import { useDataFunnelContext } from '../../contexts/useDataContext';

const DCheck = () => {
  const navigate = useNavigate();
  const { dataFunnelData } = useDataFunnelContext();
  const handleCheckNextButton = async () => {
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFunnelData),
      });
    } catch (error) {
      console.error('POST 요청 실패:', error);
    } finally {
      navigate('/data/complete');
    }
  };

  return (
    <div>
      <p>입력한 내용을 확인해주세요.</p>
      <p>{JSON.stringify(dataFunnelData)}</p>
      <button onClick={handleCheckNextButton}>확인</button>
    </div>
  );
};

export default DCheck;
