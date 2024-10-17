const URL = `https://670fe588a85f4164ef2c6118.mockapi.io/products`;

const getButton = document.getElementById(`get`);
window.addEventListener("load", showAllProducts);

function showAllProducts() {
  fetch(URL)
    .then((response) => response.json())
    .then(
      (products) =>
        (document.getElementById("products").innerHTML = products.map(
          (product) => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <img src=${product.imageURL} />
            <p>${product.details}</p>
            <p class = "price">${product.price} RON </p>
        </div>
        `
        ))
    );
}

const postButton = document.getElementById("post");
postButton.addEventListener("click", addNewProduct);

function addNewProduct() {
  const newProduct = {
    name: document.getElementById("name").value,
    details: document.getElementById("details").value,
    price: Number(document.getElementById("price").value),
    imageURL: document.getElementById("image-url").value,
  };
  console.log(newProduct);

  fetch(URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
