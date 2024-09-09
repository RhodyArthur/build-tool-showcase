

// // fetching data using async /await
// export const fetchData = async function fetchData() {
//     try {
//         const response = await fetch('./data.json');

//         if(!response.ok) {
//             throw new Error('Failed newtwork status')
//         }

//         const data = await response.json();
//         return data;

//     }
//     catch(error) {
//         console.error('Unable to fetch data:', error);
//         return [];
//     }
// }

