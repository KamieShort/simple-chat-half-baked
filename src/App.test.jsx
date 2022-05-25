import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('Should display messages', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByRole('link', { name: /💬 simple chat/i });
  });
});
