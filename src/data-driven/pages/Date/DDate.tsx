import { useNavigate } from 'react-router-dom';

const DDate = () => {
  const navigate = useNavigate();

  const handleDateNextButton = () => {
    navigate('/data/complete');
  };

  return (
    <div>
      <p>날짜를 입력해주세요.</p>
      <input placeholder="YYYY-MM-DD" />
      <button onClick={handleDateNextButton}>다음</button>
    </div>
  );
};

export default DDate;
