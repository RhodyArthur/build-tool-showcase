import './styles.scss';

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
        `<div class="item">
                <h2 class="name">${name}</h2>
                <img src="${icon}" alt="${name}">
                <p class="description">${description}</p>
                <a href="${url}" target="_blank">Learn more</a>
        </div>
        `
    });
    mainContainer.innerHTML = htmlContent;
}

export {renderData};