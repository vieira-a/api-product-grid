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
    
    let divProductImage = document.createElement("div")
    divProductImage.className = "product-image"
    
    let divProductContent = document.createElement("div");
    divProductContent.className = "product"

    let divProductData = document.createElement("div")
    divProductData.className = "product-data"
    
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
    
    divProductImage.append(productImage);

    divProductContent.append(divProductImage);

    // divProductContent.append(productName);
    // divProductContent.append(productStrDe);
    // divProductContent.append(productOldPrice)
    // divProductContent.append(productPrice);
    // divProductContent.append(`Ou ${productInstallmentsCount}x de `);
    // divProductContent.append(`R$ ${productInstallmentsValue}`);
    // divProductContent.append(productLink);
    // productsContainer.appendChild(divProductContent)

    divProductData.append(productName);
    divProductData.append(productOldPrice)
    divProductData.append(productPrice);
    divProductData.append(`Ou ${productInstallmentsCount}x de `);
    divProductData.append(`R$ ${productInstallmentsValue}`);
    divProductData.append(productLink);

    productsContainer.appendChild(divProductImage)
    productsContainer.appendChild(divProductData)
  })

}

getAllProducts()