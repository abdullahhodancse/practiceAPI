
const loadAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            displayProducts(data);
        });
};
//product display
const displayProducts = (products) => {
    const productContainer = document.getElementById("product-container");
    

    products.forEach((product) => {
        console.log(product);

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img class="card-img" src="${product.image}" alt="" />
            <h5>${product.title.slice(0, 10)}</h5>
            <h3>Price: $${product.price}</h3>
            <p>${product.description.slice(0, 50)}</p>
            <button>Details</button>
            <button onclick="handleAddToCart('${product.title}','${product.price}')">Add To Card</button>
        `;
        productContainer.appendChild(div);
    });
};
//card 

const handleAddToCart = (name, price) => {
    const cardcount=document.getElementById("count").innerText;
    let convertedCount=parseInt(cardcount);
    convertedCount=convertedCount+1;
    document.getElementById("count").innerText=convertedCount;
    const container = document.getElementById("card-main-container");
    

    const div = document.createElement("div");
    div.classList.add("card_info");
    div.innerHTML = `

    <p>${name.slice(0,5)}</p>
    <h3 class="price">${price}</h3>
    `;
    container.appendChild(div);
    updateTotal();
};
//card er total
const updateTotal=()=>{
    const allPrice=document.getElementsByClassName("price");
    let count=0;
    for(const element of allPrice)
        {
            count=count+parseFloat(element.innerText);

        }
        document.getElementById("total").innerText=count;

}

loadAllProducts();
