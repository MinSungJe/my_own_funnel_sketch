import { Outlet } from 'react-router-dom';

const DataHome = () => {
  return (
    <div>
      <p>현재: 데이터 중심 설계</p>
      <Outlet />
    </div>
  );
};

export default DataHome;
