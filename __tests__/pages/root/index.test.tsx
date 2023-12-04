import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '@/app/page';
import '@testing-library/jest-dom';

describe('Our dashboard page', () => {
  it('Should render properly', () => {
    render(<Root />);

    const header = screen.getByRole('heading');
    const headerText = 'Hello world';

    expect(header).toHaveTextContent(headerText);
  });

  it('Should have disable button', () => {
    render(<Root />);

    const buttonElement = screen.getByTestId('my-btn-test');
    expect(buttonElement).toBeDisabled();
  });

  it('Should have p tag with className of blue', () => {
    render(<Root />);

    const pElement = screen.getByTestId('paragraph-blue');
    expect(pElement).toHaveClass('blue');
    expect(pElement).toHaveTextContent('our paragraph');
  });

  it('should render a Button component with a specific title prop', () => {
    render(<Root />);
    expect(screen.getByTestId('my-el')).toContainElement(
      screen.getByRole('button', { name: /submit here!/i }),
    );
  });
});

describe('Testing to be in the document', () => {
  it('Should be rendered in document', () => {
    render(<Root />);

    const el = screen.getByTestId('my-el');
    expect(el).toBeInTheDocument();
  });
});
