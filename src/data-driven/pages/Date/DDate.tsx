import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataFunnelContext } from '../../contexts/useDataContext';

const DDate = () => {
  const { dataFunnelData, setDataFunnelData } = useDataFunnelContext();
  const navigate = useNavigate();
  const [date, setDate] = useState(dataFunnelData.date ?? '');

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleDateNextButton = () => {
    navigate('/data/check');
    setDataFunnelData((prev) => ({ ...prev, date }));
  };

  return (
    <div>
      <p>날짜를 입력해주세요.</p>
      <input placeholder="YYYY-MM-DD" value={date} onChange={handleChangeDate} />
      <button onClick={handleDateNextButton}>다음</button>
    </div>
  );
};

export default DDate;
