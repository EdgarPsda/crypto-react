import Form from "./Form";
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock de fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            Data: [
                { CoinInfo: { Name: 'USD', FullName: 'US Dollar' } },
                { CoinInfo: { Name: 'EUR', FullName: 'Euro' } },
            ],
        }),
    })
);

describe('Form Component', () => {
    let setCurrenciesMock;

    beforeEach(() => {
        setCurrenciesMock = jest.fn();
        fetch.mockClear(); // Limpiar los mocks de fetch antes de cada test
    });

    test('should render the form correctly', async () => {
        render(<Form setCurrencies={setCurrenciesMock} />);

        await waitFor(() => {
            expect(screen.getByTestId('Select Currency')).toBeInTheDocument();
        });
    });

    test('should render the submit button with text', async () => {
        render(<Form setCurrencies={setCurrenciesMock} />);
        await waitFor(() => {
            expect(screen.getByText('Quote')).toBeInTheDocument();
        });
    });
});