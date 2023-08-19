// console.log("from  main.js .dddddddddddddddddddd");
console.log("Allah Help me please ");
// hide nav and display input field;
function hideElement() {
  const elementToHide = document.getElementById("main-nav-items");
  elementToHide.style.display = "none";
  const currentDisplayStyle = elementToHide.style.display;
  if (currentDisplayStyle === "none") {
    elementToHide.style.display = "none";
  }
  const section = document.getElementById("search-container");
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="search-content">
    <div class="search">
    <input type="text" class="search__input" placeholder="Minecraft, RPG, multiplayer... ">
    <buttons>Advanced Search</buttons>
    </div>
    <buttons id="x-button" class="x-buttons">
    <i class="fa-solid fa-x"></i>
    </button>
    </div>
    `;
  section.appendChild(div);
}
const hideButton = document.getElementById("hide-button");
hideButton.addEventListener("click", hideElement);

// added dropdown

function addDropdown() {
  const section = document.getElementById("dropdown-contents");
  const div = document.createElement("div");
  div.innerHTML = `
                          <div>
                          <div class="dropdown-header">
                              <h4>Platform </h4>
                              
                             <p>view all</p>
                            </div>
                            <div class="dropdown-item">
                              <p>
                                <img src="/public/img/icon/steam.png" alt="icon-logo"> Steam
                              </p>
                            <p>
                                <img src="/public/img/icon/ubisoft.png" alt="icon-logo"> Ubisoft Connect
                              </p>
                                <p>
                                <img src="/public/img/icon/ea.png" alt="icon-logo"> EA App
                              </p>
                              <p>
                                <img src="/public/img/icon/battle.jpg" alt="icon-logo"> Battle.net
                              </p>
                              <p>
                                <img src="/public/img/icon/rockstar.png" alt="icon-logo">RockStar
                              </p>
                              <p>
                                <img src="/public/img/icon/gog.png" alt="icon-logo"> GOG.com
                              </p>
                              <p>
                                <img src="/public/img/icon/Microsoft_logo.svg.png" alt="icon-logo"> Microsoft Store
                              </p>
                              <p>
                                <img src="/public/img/icon/epic.png" alt="icon-logo"> Epic
                              </p>
                            </div>
                          
                            <div class="dropdown-header">
                              <h4>Prepaid Cards </h4>
                              <p>View all</p>
                             
                            </div>
                            <div class="dropdown-bottom-item">
                              <p>
                                <img src="/public/img/icon/steam.png" alt="icon-logo"> Steam Gift Cards
                              </p>
                              <p>
                                <img src="/public/img/icon/download-removebg-preview.png" alt="icon-logo"> IG Gift Cards
                              </p>
                              <p>
                                <img src="/public/img/icon/blizzard-removebg-preview.png" alt="icon-logo" style="width: 80px;"> Blizzard Gift
                                Cards
                              </p>
                            </div>
                          
                          
                          </div>
                          </div>

  `;
  section.appendChild(div);
  isElementAdded = true;
}
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addDropdown);

// function SearchButtonBack() {
//   console.log("back");
//   const inputField = document.getElementById("search-container");
//   inputField.style.display = none;
//   const backElement = document.getElementById("main-nav-items");
//   backElement.style.display = block;
// }
// const backElements = document.getElementById("x-button");
// backElements.addEventListener("click", SearchButtonBack);

// fetch product form product.json
function loadData() {
  fetch("product.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayProduct(data);
    });
}
// show product
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
