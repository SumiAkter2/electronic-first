console.log("from  main.js .dddddddddddddddddddd");

function loadData() {
  fetch("product.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayProduct(data);
    });
}

function displayProduct(data) {
  const section = document.getElementById("trending-card");
  for (const product of data) {
    const div = document.createElement("div");
    div.innerHTML = `
 <div>
   <img class='card-img' src=${product.img} alt="product-img">
   <button class="badge" style="top:-30px; left:10px"><p>${product.badge}</p></button>
   <div class="card-text">
    <h4>${product.Description}</h4>
    <p> ${product.euro}</p>
   </div>
   </div>
   `;
    section.appendChild(div);
  }
}
loadData();
