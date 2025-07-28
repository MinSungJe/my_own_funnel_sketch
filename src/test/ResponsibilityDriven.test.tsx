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

  // it('퍼널을 통해 단계가 진행된다.', async () => {
  //   render(<App />);
  //   const dataDrivenButton = screen.getByText('책임 중심 설계');
  //   await user.click(dataDrivenButton);

  //   const funnelStartButton = screen.getByText('퍼널 시작');
  //   await user.click(funnelStartButton);

  //   expect(screen.queryByText('이름을 입력해주세요.')).not.toBeNull();

  //   const nameNextButton = screen.getByText('다음');
  //   await user.click(nameNextButton);

  //   expect(screen.queryByText('날짜를 입력해주세요.')).not.toBeNull();

  //   const dateNextButton = screen.getByText('다음');
  //   await user.click(dateNextButton);

  //   expect(screen.queryByText('모든 입력이 완료되었습니다!')).not.toBeNull();
  // });

  // it('날짜까지 모두 입력하고 퍼널의 다음을 누르면 이름과 날짜를 담은 정보를 담은 POST 요청을 보내는 fetch 함수가 실행된다.', async () => {
  //   const mockFetch = vi.fn(() =>
  //     Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve({ success: true }),
  //     })
  //   );
  //   global.fetch = mockFetch as unknown as typeof fetch;

  //   render(<App />);

  //   const dataDrivenButton = screen.getByText('책임 중심 설계');
  //   await user.click(dataDrivenButton);

  //   const funnelStartButton = screen.getByText('퍼널 시작');
  //   await user.click(funnelStartButton);

  //   expect(screen.getByText('이름을 입력해주세요.')).toBeInTheDocument();

  //   const nameInput = screen.getByPlaceholderText('이름 입력');
  //   await user.type(nameInput, '민성제');

  //   const nameNextButton = screen.getByText('다음');
  //   await user.click(nameNextButton);

  //   expect(screen.getByText('날짜를 입력해주세요.')).toBeInTheDocument();

  //   const dateInput = screen.getByPlaceholderText('YYYY-MM-DD');
  //   await user.type(dateInput, '2025-07-28');

  //   const dateNextButton = screen.getByText('다음');
  //   await user.click(dateNextButton);

  //   expect(mockFetch).toHaveBeenCalledTimes(1);
  //   expect(mockFetch).toHaveBeenCalledWith(
  //     '/api/submit',
  //     expect.objectContaining({
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: '민성제',
  //         date: '2025-07-28',
  //       }),
  //     })
  //   );
  // });
});
