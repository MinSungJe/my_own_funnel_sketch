import { Outlet } from 'react-router-dom';
import S from './DataHome.module.css'

const DataHome = () => {
  return (
    <div>
      <p className={S.title}>현재: 데이터 중심 설계</p>
      <Outlet />
    </div>
  );
};

export default DataHome;
