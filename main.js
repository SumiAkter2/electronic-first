// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">

//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">

//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

console.log("from  main.js ");

function loadProduct() {
  const url = "product.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        console.log(product);
        `   
    <div class="card">
   <img src="" alt="product-img">
   <button class="badge">${product.badge}</button>
   <div class="card-text">
    <h4>${product.Description}</h4>
    <p> euro</p>
   </div>
   </div>
   `;
      });
    });
}
document.getElementById("trending-cards").innerHTML = product;
loadProduct();
