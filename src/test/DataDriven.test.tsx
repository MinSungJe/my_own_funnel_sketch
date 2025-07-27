import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('DataDriven 퍼널 테스트', () => {
  const user = userEvent.setup();

  it('데이터 중심 설계 화면에 들어오면 "현재: 데이터 중심 설계"가 표시된다.', async () => {
    render(<App />);
    const dataDrivenButton = screen.getByText('데이터 중심 설계');
    await user.click(dataDrivenButton);

    expect(screen.queryByText('현재: 데이터 중심 설계')).not.toBeNull();
  });
});
