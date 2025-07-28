import { useNavigate } from 'react-router-dom';

const DName = () => {
  const navigate = useNavigate();

  const handleNameNextButton = () => {
    navigate('/data/date');
  };

  return (
    <div>
      <p>이름을 입력해주세요.</p>
      <input placeholder="이름 입력" />
      <button onClick={handleNameNextButton}>다음</button>
    </div>
  );
};

export default DName;
