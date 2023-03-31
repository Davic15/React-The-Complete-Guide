import { render, screen } from '@testing-library/react';
import { Async } from './Async';

describe('Async Component', () => {
    test('renders posts if request succeeds', async() => {
        //* Mock function to test async code.
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First post'}]
        });

        // Arrange
        render(<Async />);

        // Act
        // .. nothing
    
        // Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})