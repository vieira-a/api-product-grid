const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"

const productsContainer = document.querySelector("#products-container");
//console.log(productsContainer)
//Get all products

async function getAllProducts() {
  const response = await fetch(url)

  //console.log(response)

  let data = await response.json()
  
  data = data.products
  
  
  data.map((product) => {
    //console.log(product.installments)
    
    //let divProductImage = document.createElement("div")
    
    let divproductContent = document.createElement("div");
    let productName = document.createElement("h3");
    let productOldPrice = document.createElement("h4");
    let productPrice = document.createElement("h2");
    let productInstallments = document.createElement("p")
    let productLink = document.createElement("a");

    productImage = new Image()
    productImage.src = product.image


    productName.innerText = product.name;
    productOldPrice.innerText = product.oldPrice;
    productPrice.innerText = product.price;
    productInstallmentsCount = product.installments.count
    productInstallmentsValue = product.installments.value
    productLink.innerText = "Comprar"
    productLink.setAttribute("href", `/product.html?id=${product.id}`);
    
    //divProductImage.appendChild(productImage)
    divproductContent.append(productImage);
    divproductContent.append(productName);
    divproductContent.append(`De: ${productOldPrice.textContent}`);
    divproductContent.append(`Por: ${productPrice.textContent}`);
    divproductContent.append(productInstallmentsCount);
    divproductContent.append(productInstallmentsValue);
    divproductContent.append(productLink);

    productsContainer.append(productImage)
    productsContainer.append(divproductContent)
    
    console.log(product.id, product.name, product.image)

  })

}

getAllProducts()