let result = document.querySelector(".table");


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
    },
    
];

table1.forEach(data =>{
    result.innerHTML = `
    <table>
            <thead class="header">
                <th>Name</th>
                <th>Price</th>
                <th>Product</th>
                <th>Add section</th>
                <th>Delete section</th>
            </thead>
            <tbody class="table">
                <td>${table1[0].name}</td>
                <td>${table1[0].price}</td>
                <td><img src="${table1[0].image}" loading="lazy" alt="${table1[0].name}"></td>
                <td><button> Add</button></td>
                <td><button> Delete</button></td>
            </tbody>
            <tbody class="table2">
                <td>${table1[1].name}</td>
                <td>${table1[1].price}</td>
                <td><img src="${table1[1].image}" loading="lazy" alt="${table1[1].name}"></td>
                <td><button> Add</button></td>
                <td><button> Delete</button></td>
            </tbody>
            <tbody class="table3">
                <td>${table1[2].name}</td>
                <td>${table1[2].price}</td>
                <td><img src="${table1[2].image}" loading="lazy" alt="${table1[2].name}"></td>
                <td><button> Add</button></td>
                <td><button> Delete</button></td>
            </tbody>
            <tbody class="table4">
                <td>${table1[3].name}</td>
                <td>${table1[3].price}</td>
                <td><img src="${table1[3].image}" loading="lazy" alt="${table1[3].name}"></td>
                <td><button> Add</button></td>
                <td><button> Delete</button></td>
            </tbody>
    </table>
    `
})



