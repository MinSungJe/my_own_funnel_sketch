import { Outlet, useNavigate } from 'react-router-dom';
import S from './DataHome.module.css';

const DataHome = () => {
  const navigate = useNavigate();

  return (
    <div className={S.wrapper}>
      <p className={S.title}>현재: 데이터 중심 설계</p>
      <button
        className={S.startButton}
        onClick={() => {
          navigate('name');
        }}>
        퍼널 시작
      </button>
      <Outlet />
    </div>
  );
};

export default DataHome;
