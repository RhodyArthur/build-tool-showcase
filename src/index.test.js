import { renderData } from './index';

describe('renderData', () => {
    let contentSection;

    beforeEach(() => {
        // Set up the DOM for each test
        document.body.innerHTML = `
            <header>
                <h1>Build Tool Showcase</h1>
            </header>
            <main>
                <section class="content"></section>
            </main>
            <footer>&copy; 2024</footer>
        `;
        contentSection = document.querySelector('.content');
    });

    it('should render data correctly into the content section', () => {
        const sampleData = [
            {
                name: 'Item 1',
                description: 'Description 1',
                url: 'http://example.com/1',
                icon: 'http://example.com/icon1.png'
            },
            {
                name: 'Item 2',
                description: 'Description 2',
                url: 'http://example.com/2',
                icon: 'http://example.com/icon2.png'
            }
        ];

        renderData(sampleData, contentSection);

        const expectedHTML = `
            <div class="item">
                <img src="http://example.com/icon1.png" alt="Item 1">
                <div class="text">
                    <h2 class="name">Item 1</h2>
                    <p class="description">Description 1</p>
                    <a href="http://example.com/1" target="_blank">Learn more</a>
                </div>
            </div>
            <div class="item">
                <img src="http://example.com/icon2.png" alt="Item 2">
                <div class="text">
                    <h2 class="name">Item 2</h2>
                    <p class="description">Description 2</p>
                    <a href="http://example.com/2" target="_blank">Learn more</a>
                </div>
            </div>
        `;

        const renderedHTML = contentSection.innerHTML.trim();
        const normalizedExpectedHTML = expectedHTML.trim().replace(/\s+/g, ' ');

        expect(renderedHTML).toBe(normalizedExpectedHTML);
    });
});
