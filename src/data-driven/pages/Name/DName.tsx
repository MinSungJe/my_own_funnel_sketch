import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataFunnelContext } from '../../contexts/useDataContext';

const DName = () => {
  const { dataFunnelData, setDataFunnelData } = useDataFunnelContext();
  const navigate = useNavigate();
  const [name, setName] = useState(dataFunnelData.name ?? '');

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameNextButton = () => {
    navigate('/data/date');
    setDataFunnelData((prev) => ({ ...prev, name }));
  };

  return (
    <div>
      <p>이름을 입력해주세요.</p>
      <input placeholder="이름 입력" value={name} onChange={handleChangeName} />
      <button onClick={handleNameNextButton}>다음</button>
    </div>
  );
};

export default DName;
