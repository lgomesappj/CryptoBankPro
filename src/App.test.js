// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoBankPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoBankPro/i);
    expect(titleElement).toBeInTheDocument();
});
