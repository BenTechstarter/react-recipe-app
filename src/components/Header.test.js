// src/components/Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Home')).toBeInTheDocument(); // Annahme, dass "Home" ein Text im Header ist
});
