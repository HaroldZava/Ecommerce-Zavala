/*-----------------------------BACK-END (API, database, servicio)-------------------------------*/
const databaseItems = [

];

function getItems () {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(databaseItems);

        }, 2000);
    });
}

export default getItems;