import About from '@/app/about/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing for about page', () => {
  it('Should has about page', () => {
    render(<About />);
    screen.getByText('About page');
  });

  it('Should has a button', () => {
    render(<About />);
    const btn = screen.getByRole('button', { name: 'click me' });
    expect(btn).toBeInTheDocument();
  });

  it('Should has input with id randomTxt', () => {
    render(<About />);

    const input = screen.getByRole('textbox');
    const lblTxt = screen.getByLabelText(/Enter random text/);

    expect(input).toBeInTheDocument();
    expect(lblTxt).toBeInTheDocument();
  });
});
