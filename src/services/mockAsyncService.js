/*-----------------------------BACK-END (API, database, servicio)-------------------------------*/
const databaseItems = [
    {
        title: "COLLAR PYTHON color verde",
        category: "Collar",
        stock: 7,
        price: 450,
        detail: "El mejor collar para tu perrito",
        imgurl: "/Assets/img/collar-python-verde.png"
    },
    {
        title:"PECHERA PYTHON color verde",
        category: "Pechera",
        stock: 7,
        price:600,
        detail: "La mejor pechera para tu perrito",
        imgurl: "/Assets/img/pechera-python-verde.png"
    },
    {
        title:"ARNES PYTHON color verde",
        category: "Arnes",
        stock: 7,
        price:500, 
        detail:"El mejor arnes para tu perrito", 
        imgurl:"/Assets/img/arnes-python-verde.png"
    },
    {
        title: "COLLAR PYTHON color nude",
        category: "Collar",
        stock: 7,
        price: 450,
        detail: "El mejor collar para tu perrito",
        imgurl: "/Assets/img/collar-python-nude.png"
    },
    {
        title:"PECHERA PYTHON color nude",
        category: "Pechera",
        stock: 7,
        price:600,
        detail: "La mejor pechera para tu perrito",
        imgurl: "/Assets/img/pechera-python-nude.png"
    },
    {
        title:"ARNES PYTHON color nude",
        category: "Arnes",
        stock: 7,
        price:500, 
        detail:"El mejor arnes para tu perrito", 
        imgurl:"/Assets/img/arnes-python-nude.png"
    },
    {
        title: "COLLAR PYTHON color camel",
        category: "Collar",
        stock: 7,
        price: 450,
        detail: "El mejor collar para tu perrito",
        imgurl: "/Assets/img/collar-python-camel.png"
    },
    {
        title:"PECHERA PYTHON color camel",
        category: "Pechera",
        stock: 7,
        price:600,
        detail: "La mejor pechera para tu perrito",
        imgurl: "/Assets/img/pechera-python-camel.png"
    },
    {
        title:"ARNES PYTHON color camel",
        category: "Arnes",
        stock: 7,   
        price:500, 
        detail:"El mejor arnes para tu perrito", 
        imgurl:"/Assets/img/arnes-python-camel.png"
    },
];

export default function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(databaseItems);
      }, 1);
    });
  }

export function getSingleItem(itemid) {
  // 3. Usamos find para encontrar el producto deseado
  let itemReq = databaseItems.find((item) => {
    //console.log(item, itemid);
    return item.id === parseInt(itemid);
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemReq !== undefined) resolve(itemReq);
      else reject("Item no encontrado en la base de datos.");
    }, 200);
  });
}

export function getItemsByCategory(categoryid) {
  let itemsCat = databaseItems.filter((item) => item.category === categoryid);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsCat);
    }, 200);
  });
};
