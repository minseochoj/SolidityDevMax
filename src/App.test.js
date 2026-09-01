// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityDevMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityDevMax/i);
    expect(titleElement).toBeInTheDocument();
});
