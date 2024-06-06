// src/components/Main.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import axios from 'axios'; // Importieren Sie axios

// Mocken Sie den axios-Import
jest.mock('axios');

test('renders Main component and fetches data', async () => {
  // Mocken Sie die Antwort von axios.get
  axios.get.mockResolvedValue({ data: 'Spaghetti' });

  const { getByText } = render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  
  // Überprüfen Sie, ob die Daten nach dem Laden korrekt gerendert werden
  await waitFor(() => expect(getByText('Spaghetti')).toBeInTheDocument());
});
