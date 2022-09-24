import React from 'react';
import { getByRole, getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // render(<App />);

  // get tem que encontrar
  // query não falha se não encontrar
  // find cria uma promise (async await)

  const { getByText } = render(<App />);
  
  const linkElement = getByText(/Hello/i);
  const linkElement2 = screen.getByTestId("teste1");
  const headers = screen.getAllByRole('header');

  expect(linkElement).toHaveAttribute('class', 'test');
  expect(linkElement2).toBeInTheDocument();
});
