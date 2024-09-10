const mainContainer = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', async () => {
    // fetching data
    try {
        const response = await fetch('data.json');

        if(!response.ok) {
            throw new Error('Failed network status')
        }

        const data = await response.json();
        console.log(data)
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
        const {name, description, url, icon} = item;
        htmlContent += 
        `
                <img src="${icon}" alt="${name}">
                <h3 class="name">${name}</h3>
                <p class="description">${description}</p>
                <a href="${url}">Learn more</a>
        `
    });
    mainContainer.innerHTML = htmlContent;
}