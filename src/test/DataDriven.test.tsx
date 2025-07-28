import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('DataDriven 퍼널 테스트', () => {
  let user: ReturnType<typeof userEvent.setup>;
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    user = userEvent.setup();
    mockFetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );
    global.fetch = mockFetch as unknown as typeof fetch;
  });

  const navigateToFunnel = async () => {
    render(<App />);
    await user.click(screen.getByText('데이터 중심 설계'));
  };

  it('진입 시 "현재: 데이터 중심 설계"가 표시된다.', async () => {
    await navigateToFunnel();
    expect(screen.queryByText('현재: 데이터 중심 설계')).not.toBeNull();
  });

  it('퍼널이 단계별로 정상 진행된다.', async () => {
    await navigateToFunnel();

    await user.click(screen.getByText('퍼널 시작'));

    expect(screen.getByText('이름을 입력해주세요.')).toBeInTheDocument();
    await user.click(screen.getByText('다음'));

    expect(screen.getByText('날짜를 입력해주세요.')).toBeInTheDocument();
    await user.click(screen.getByText('다음'));

    expect(screen.getByText('입력한 내용을 확인해주세요.')).toBeInTheDocument();
    await user.click(screen.getByText('확인'));

    expect(screen.getByText('모든 입력이 완료되었습니다!')).toBeInTheDocument();
  });

  it('확인 시 입력 데이터를 포함한 POST 요청을 보낸다.', async () => {
    await navigateToFunnel();

    await user.click(screen.getByText('퍼널 시작'));
    await user.type(screen.getByPlaceholderText('이름 입력'), '민성제');
    await user.click(screen.getByText('다음'));

    await user.type(screen.getByPlaceholderText('YYYY-MM-DD'), '2025-07-28');
    await user.click(screen.getByText('다음'));

    await user.click(screen.getByText('확인'));

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      '/api/submit',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: '민성제',
          date: '2025-07-28',
        }),
      })
    );
  });
});
