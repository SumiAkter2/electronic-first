// **********************  hamburger bar ****************************
const hamburger = document.getElementById("hamburgers");
const navMenu = document.getElementById("main-nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
//----------------- hide nav and display input field-----------------;
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
    </buttons>
    </div>
    `;
  section.appendChild(div);
  // display input field
  const innerButton = document.getElementById("x-button");
  innerButton.addEventListener("click", () => {
    section.removeChild(div);
    if (window.innerWidth < 480) {
      // Apply styles for small screens
      elementToHide.style.display = "grid";
    } else if (window.innerWidth > 760) {
      // Apply styles for larger screens
      elementToHide.style.display = "flex";
    }
  });
}
const hideButton = document.getElementById("hide-button");
hideButton.addEventListener("click", hideElement);

// ----------------------added dropdown-----------------------------:
const section = document.getElementById("dropdown-contents");
const addButton = document.getElementById("add-button");
function addDropdown() {
  const innerDiv = document.getElementById("innerDiv");
  if (innerDiv) {
    // If it's present, remove it
    section.removeChild(innerDiv);
    console.log("remove");
  } else {
    const div = document.createElement("div");
    div.id = "innerDiv";
    div.innerHTML = `
   <div>
    <div class="dropdown-header">
        <h4>Platform </h4>
        <p>view all</p>
    </div>
    <div class="dropdown-item">
        <p>
            <img src="https://i.ibb.co/kGT5651/steam.png" alt="icon-logo"> Steam
        </p>
        <p>
            <img src="https://i.ibb.co/zSPhzrT/ubisoft.png" alt="icon-logo"> Ubisoft Connect
        </p>
        <p>
            <img src="https://i.ibb.co/Bq1xgp2/ea.png" alt="icon-logo"> EA App
        </p>
        <p>
            <img src="https://i.ibb.co/Gs9XjGB/battle.jpg" alt="icon-logo"> Battle.net
        </p>
        <p>
            <img src="https://i.ibb.co/c3SDGn5/rockstar.png" alt="icon-logo">RockStar
        </p>
        <p>
            <img src="https://i.ibb.co/wzYjjQz/gog.png" alt="icon-logo"> GOG.com
        </p>
        <p>
            <img src="https://i.ibb.co/m5wFJC5/Microsoft-logo-svg.png" alt="icon-logo"> Microsoft Store
        </p>
        <p>
            <img src="https://i.ibb.co/v3cw8F2/epic.png" alt="icon-logo"> Epic
        </p>
    </div>

    <div class="dropdown-header">
        <h4>Prepaid Cards </h4>
        <p>View all</p>
    </div>

    <div class="dropdown-bottom-item">
        <p>
            <img src="https://i.ibb.co/kGT5651/steam.png" alt="icon-logo"> Steam Gift Cards
        </p>
        <p>
            <img src="https://i.ibb.co/Gd6jCZL/download-removebg-preview.png" alt="icon-logo"> IG Gift Cards
        </p>
        <p>
            <img src="https://i.ibb.co/YjRc5XT/blizzard-removebg-preview.png" alt="icon-logo" style="width: 80px;"> Blizzard
            Gift
            Cards
        </p>
    </div>
</div>

  `;
    section.appendChild(div);
    console.log("add");
  }
}
addButton.addEventListener("click", addDropdown);

//----------------- fetch product form product.json------------------------------------------------------------
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
   <button class="badge"  style="top:-30px; left:10px position:absolute"><p>${product.badge}</p></button>
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
