import { Outlet } from 'react-router-dom';

const ResponsibilityHome = () => {
  return (
    <div>
      <p>현재: 책임 중심 설계</p>
      <Outlet />
    </div>
  );
};

export default ResponsibilityHome;
