


let table1 = [
    {
        id: 1,
        name: "Playstation 4",
        price: "6999",
        image: "https://i.postimg.cc/zBWppPPg/ps4-slim-image-block-01-en-24jul20.webp"
    },
    {
        id: 2,
        name: "Playstation 5",
        price: "11299",
        image:"https://i.postimg.cc/fyc2WgcN/comparison-consoles-xl-2x.webp"
    },
    {
        id: 3,
        name: "Horizon Forbidden West",
        price: "R999",
        image:"https://i.postimg.cc/rwnhp4rK/horizon-forbidden-west-ps5-launch-box-front.webp"
    },
    {
        id: 4,
        name: "Gran-Turismo 7",
        price: "R999",
        image:"https://i.postimg.cc/L86CRDhc/gran-turismo-7-ps4-box-front.webp"
    }
    
];

let result = document.querySelector("#products");
table1.forEach((data)=>{
    result.innerHTML +=`
     <tr>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td><img src="${data.image}" loading="lazy" alt="${data.name}"></td>
        <td><button> Add</button></td>
        <td><button> Delete</button></td>
     </tr>
    `
})
