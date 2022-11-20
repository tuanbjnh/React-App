import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Table from './Table';

// jest.mock('axios', () => ({
//     ...jest.requireActual('axios'),
//     post: jest.fn(),
//     get: jest.fn()
// }));

beforeEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.clearAllMocks();
});

it('should render loading first', function () {
    render(<Table />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
});

// it('should render table', async function () {
//     const listPost = [
//         {
//             id: 1,
//             title: 'title 1',
//             body: 'body 1'
//         },
//         {
//             id: 2,
//             title: 'title 2',
//             body: 'body 2'
//         },
//         {
//             id: 3,
//             title: 'title 3',
//             body: 'body 3'
//         }
//     ];
//     render(<Table />);
//     const items = await screen.findByText('title 1');
//     expect(items).toBeInTheDocument();
// });
