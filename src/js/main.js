const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"

const productsContainer = document.querySelector("#products-container");

async function getAllProducts() {
  const response = await fetch(url)

  //console.log(response)

  let data = await response.json()
  
  data = data.products
  
  data.map((product) => {
    
    //Construção da tabela global
    let productTable = document.createElement("table")
    let productThead = document.createElement("thead")

    //Variaveis da linha 1
    let productTr1 = document.createElement("tr")
    //Linha da imagem
    let productTdImage = document.createElement("td")
    productTdImage.rowSpan = "4"
    //Linha do nome
    let productTdName = document.createElement("td")

    let productImage = new Image();
    productImage.src = product.image;

    let productName = document.createElement("h3");
    productName.innerText = product.name;

    //Inserindo elementos da linha 1
    //Imagem dentro da linha
    productTdImage.append(productImage)
    //Nome dentro da linha
    productTdName.append(productName)
    //Carregando a thead
    productThead.append(productTdImage)
    productThead.append(productTdName)
    //carregando a table
    productTable.append(productThead)
    
    //Carregamento global da div principal
    productsContainer.append(productTable)

    // let divProductImage = document.createElement("div")
    // divProductImage.className = "product-image"
    
    // let divProductContent = document.createElement("div");
    // divProductContent.className = "product"

    // let divProductData = document.createElement("div")
    // divProductData.className = "product-data"
    
    // let productOldPrice = document.createElement("h4");
    // let productPrice = document.createElement("h2");
    // let productInstallments = document.createElement("p")
    // let productLink = document.createElement("a");

    

    // productOldPrice.innerText = product.oldPrice;
    // productPrice.innerText = product.price;
    // productInstallmentsCount = product.installments.count
    // productInstallmentsValue = product.installments.value
    // productLink.innerText = "Comprar"
    // productLink.setAttribute("href", `/product.html?id=${product.id}`);
    
    // divProductImage.append(productImage);

    // divProductContent.append(divProductImage);

    // divProductData.append(productName);
    // divProductData.append(productOldPrice)
    // divProductData.append(productPrice);
    // divProductData.append(`Ou ${productInstallmentsCount}x de `);
    // divProductData.append(`R$ ${productInstallmentsValue}`);
    // divProductData.append(productLink);

    // productsContainer.appendChild(divProductImage)
    // productsContainer.appendChild(divProductData)
  })

}

getAllProducts()