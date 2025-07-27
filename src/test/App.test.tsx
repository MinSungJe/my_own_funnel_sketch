import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App 테스트', () => {
  it('App.tsx가 렌더되면 화면에 글자가 표시된다.', () => {
    render(<App />);
    const AppText = screen.queryByText('메인 페이지임');
    expect(AppText).not.toBeNull();
  });
});
