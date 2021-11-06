const datos = [
{
    id: 1,
    title: 'Iron Man',
    year: 2008
},
{
    id: 2,
    title: 'Spiderman',
    year: 2017
},
{
    id: 3,
    title: 'Avengers',
    year: 2019
}];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

//Promises
/* 
getDatos()
    .then((datos) => console.log(datos)); 
*/

// Async await
async function fetchingData () {
    const datosFetched = await getDatos();
    console.log(datosFetched);
}

fetchingData();