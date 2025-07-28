import { Outlet, useNavigate } from 'react-router-dom';
import S from './DataHome.module.css';
import { useDataFunnelContext } from '../../contexts/useDataContext';

const DataHome = () => {
  const navigate = useNavigate();
  const { setDataFunnelData } = useDataFunnelContext();

  const handleClickStart = () => {
    navigate('name');
    setDataFunnelData({});
  };

  return (
    <div className={S.wrapper}>
      <p className={S.title}>현재: 데이터 중심 설계</p>
      <button className={S.startButton} onClick={handleClickStart}>
        퍼널 시작
      </button>
      <Outlet />
    </div>
  );
};

export default DataHome;
