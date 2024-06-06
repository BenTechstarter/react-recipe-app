// src/components/Footer.test.js

// Importiere die benötigten Module
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importiere jest-dom
import '@testing-library/jest-dom/extend-expect'; // Importiere extend-expect
import Footer from './Footer';

// Schreibe deine Tests wie gewohnt
test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('© 2024 Recipe App')).toBeInTheDocument(); // Annahme, dass "Recipe" ein Text im Footer ist
});
