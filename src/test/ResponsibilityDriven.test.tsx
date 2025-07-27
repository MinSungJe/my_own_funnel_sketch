import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('ResponsibilityDriven 퍼널 테스트', () => {
  const user = userEvent.setup();

  it('책임 중심 설계 화면에 들어오면 "현재: 책임 중심 설계"가 표시된다.', async () => {
    render(<App />);
    const responsibilityDrivenButton = screen.getByText('책임 중심 설계');
    await user.click(responsibilityDrivenButton);

    expect(screen.queryByText('현재: 책임 중심 설계')).not.toBeNull();
  });
});
