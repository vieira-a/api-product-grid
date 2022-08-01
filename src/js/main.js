const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"

const productsContainer = document.querySelector("#products-container");
console.log(productsContainer)
//Get all products

async function getAllProducts() {
  const response = await fetch(url)

  //console.log(response)

  let data = await response.json()
  
  data = data.products
  
  console.log(data)

  data.map((product) => {
    //console.log(product.name)
    
    let divProductImage = document.createElement("div")
    let divproductContent = document.createElement("div")

    let productName = document.createElement("h3")
    let productOldPrice = document.createElement("h4")
    let productPrice = document.createElement("h2")

    productImage = new Image()
    productImage.src = product.image
    console.log(productImage.src)

    productName.innerText = product.name;
    productOldPrice.innerText = product.oldPrice;
    productPrice.innerText = product.price;

    divproductContent.appendChild(productImage)
    divproductContent.appendChild(productName);
    divproductContent.appendChild(productOldPrice);
    divproductContent.appendChild(productPrice);

    productsContainer.appendChild(divproductContent)
    
  })


}

getAllProducts()