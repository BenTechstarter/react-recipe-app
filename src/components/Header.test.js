// src/components/Header.test.js

// Importiere die benötigten Module
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importiere MemoryRouter
import '@testing-library/jest-dom'; // Importiere jest-dom
import '@testing-library/jest-dom/extend-expect'; // Importiere extend-expect
import Header from './Header';

// Schreibe deine Tests wie gewohnt
test('renders Header component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(getByText('Home')).toBeInTheDocument(); // Annahme, dass "Home" ein Text im Header ist
});
