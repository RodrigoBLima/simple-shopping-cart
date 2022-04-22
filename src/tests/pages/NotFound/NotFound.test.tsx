import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundRoute from '../../../pages/NotFound';

test('text to user be redirected', () => {
  render(<NotFoundRoute />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(
    /Ooops! Esta página não foi encontrada/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('text to redirect to home', () => {
  render(<NotFoundRoute />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Ir para página inicial/i);
  expect(linkElement).toBeInTheDocument();
});

test('redirect to home after click link', () => {
  const { getByText } = render(<NotFoundRoute />, {
    wrapper: BrowserRouter
  });

  const link = getByText(/Ir para página inicial/);

  fireEvent.click(link);

  expect(window.location.pathname).toEqual('/');
});
