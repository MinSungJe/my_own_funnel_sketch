import { Outlet, useNavigate } from 'react-router-dom';
import S from './Layout.module.css';

const Layout = () => {
  const navigate = useNavigate();

  const handleDataDrivenButton = () => {
    navigate('/data');
  };

  const handleResponsibilityDrivenButton = () => {
    navigate('/responsibility');
  };

  return (
    <main className={S.wrapper}>
      <header className={S.header}>
        <h2>퍼널 테스트</h2>
        <section className={S.buttonContainer}>
          <button onClick={handleDataDrivenButton}>데이터 중심 설계</button>
          <button onClick={handleResponsibilityDrivenButton}>책임 중심 설계</button>
        </section>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;
