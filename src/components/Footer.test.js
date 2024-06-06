// src/components/Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Recipe')).toBeInTheDocument(); // Annahme, dass "Recipe" ein Text im Footer ist
});