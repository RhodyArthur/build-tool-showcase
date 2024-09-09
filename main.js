const mainContainer = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', async () => {
    // fetching data
    try {
        const response = await fetch('./data.json');

        if(!response.ok) {
            throw new Error('Failed network status')
        }

        const data = await response.json();
        renderData(data);

    }
    catch(error) {
        console.error('Unable to fetch data:', error);
        return [];
    }
})

// render data
function renderData(data) {
    let htmlContent = ''
    data.forEach(item => {
        htmlContent += 
        `
                <img src="${item.icon}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p></p>
                <p></p>
        `
    });
    mainContainer.innerHTML = htmlContent;
}