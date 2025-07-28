import { Outlet } from 'react-router-dom';
import S from './ResponsibilityHome.module.css';

const ResponsibilityHome = () => {
  return (
    <div>
      <p className={S.title}>현재: 책임 중심 설계</p>
      <Outlet />
    </div>
  );
};

export default ResponsibilityHome;
