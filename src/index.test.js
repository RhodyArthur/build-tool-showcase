import { renderData } from './index';

// Mock the DOM and the global fetch API
beforeEach(() => {
    document.body.innerHTML = '<section class="content"></section>';

    // Mock the global fetch API
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks;
})

describe('index.js functionality', () => {


    it('should fetch data and render it correctly', async () => {
        // Mock data to be returned by the fetch
        const mockData = [
            {
                name: 'Tool 1',
                description: 'Description of Tool 1',
                url: 'https://example.com/tool1',
                icon: 'https://example.com/icon1.png'
            },
            {
                name: 'Tool 2',
                description: 'Description of Tool 2',
                url: 'https://example.com/tool2',
                icon: 'https://example.com/icon2.png'
            }
        ];

        // Mock fetch response
        global.fetch = jest.fn(() => 
            Promise.resolve({
                ok:true,
                json: () => Promise.resolve(mockData)
            })
        )


        // Import the module to trigger the DOMContentLoaded event handler
        require('./index');

        // Wait for the DOMContentLoaded event handler to complete
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Select the elements rendered by the function
        const items = document.querySelectorAll('.item');

        // Debug log to check if items are present
        console.log('Number of items:', items.length);
        console.log('Items:', items);

        // Check if the number of items matches
        expect(items.length).toBe(2);

        // Check the content of the first item
        const firstItem = items[0];
        expect(firstItem.querySelector('.name').textContent).toBe('Tool 1');
        expect(firstItem.querySelector('.description').textContent).toBe('Description of Tool 1');
        expect(firstItem.querySelector('img').src).toBe('https://example.com/icon1.png');
        expect(firstItem.querySelector('a').href).toBe('https://example.com/tool1/');

        // Check the content of the second item
        const secondItem = items[1];
        expect(secondItem.querySelector('.name').textContent).toBe('Tool 2');
        expect(secondItem.querySelector('.description').textContent).toBe('Description of Tool 2');
        expect(secondItem.querySelector('img').src).toBe('https://example.com/icon2.png');
        expect(secondItem.querySelector('a').href).toBe('https://example.com/tool2/');
    });

    it('should handle fetch errors gracefully', async () => {
        fetch.mockResolvedValueOnce({
            ok: false
        });

        require('./index');

        await new Promise((resolve) => setTimeout(resolve, 0));

        // Check if no items are rendered
        const items = document.querySelectorAll('.item');
        expect(items.length).toBe(0);
    });
});
