// src/components/Main.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'Spaghetti' }),
  })
);

test('renders Main component and fetches data', async () => {
  const { getByText } = render(<Main />);
  
  // Assert that the data is rendered correctly after fetching
  await waitFor(() => expect(getByText('Spaghetti')).toBeInTheDocument());
});