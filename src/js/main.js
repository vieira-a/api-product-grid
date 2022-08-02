const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"

const productsContainer = document.querySelector("#products-container");

async function getAllProducts() {
  const response = await fetch(url)

  let data = await response.json()
  
  data = data.products
  
  data.map((product) => {
        
    let divProductImage = document.createElement("div")
    divProductImage.className = "product-image"
    
    let divProductContent = document.createElement("div");
    divProductContent.className = "product"

    let divProductData = document.createElement("div")
    divProductData.className = "product-data"
    
    let productName = document.createElement("h5");
    let productOldPrice = document.createElement("p");
    let productPrice = document.createElement("h4");
    let productInstallments = document.createElement("p")
    let productLink = document.createElement("a");

    let productCurrency = "R$"

    productImage = new Image()
    productImage.src = product.image

    productName.innerText = product.name;
    productOldPrice.innerText = `De: ${productCurrency} ${(product.oldPrice).toFixed(2)}`;
    productPrice.innerText = `Por: ${productCurrency} ${(product.price).toFixed(2)}`;
    productInstallments.innerText = `Ou ${product.installments.count}x de ${productCurrency} ${(product.installments.value).toFixed(2)}`
    productInstallmentsValue = product.installments.value
    productLink.innerText = "Comprar"
    productLink.setAttribute("href", `/product.html?id=${product.id}`);
    
    divProductImage.append(productImage);

    divProductContent.append(divProductImage);

    divProductData.append(productName);
    divProductData.append(productOldPrice)
    divProductData.append(productPrice);
    divProductData.append(productInstallments)
    divProductData.append(productLink);

    productsContainer.appendChild(divProductImage)
    productsContainer.appendChild(divProductData)
  })
}

getAllProducts()