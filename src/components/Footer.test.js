// src/components/Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Footer')).toBeInTheDocument(); // Annahme, dass "Footer" ein Text im Footer ist
});
