// Catch The Header
const header = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
// Close And Open Menu
// Catch Menu Icone
let menuIcone = document.querySelector(".menu");
// Catch Header
let HeaderContent = document.querySelector("header");
// Catch Menu
let menu = document.querySelector("ul");
// Custom Function
menuIcone.addEventListener("click", openMenu);
// Create Function Open Menu

function openMenu() {
  HeaderContent.classList.toggle("open");
  menuIcone.classList.toggle("bx-x");
}

// Hide The Menu When Scroll

window.addEventListener("scroll", () => {
    HeaderContent.classList.remove("open");
  menuIcone.classList.remove("bx-x");
});

// Catch row Of Sectio Features

let rowFeatures = document.querySelector(".rowFeatures");
// Add Featurs Cols In Row Section
function addColFeatures() {
  let featureCol = "";
  for (let i = 0; i < 8; i++) {
    featureCol += `
                  <div class="featureCol">
                    <span>M</span>
                    <h3>Buy your Domain</h3>
                    <p>Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium
                        turpis eget nibh laoreet iaculis.</p>
                </div>
    
    `;
  }
  rowFeatures.innerHTML = featureCol;
}
addColFeatures();

// Add progress Lines In Progress Sections

// Creat Function To Add Progress
let collectionsProgress = document.querySelector(".progressSide");
// Create Array To Collection Names Of Progress
let collectionNames = ["Illustrator", "Photoshop", "SEO", "E-commerce", "HTML"];
// Create Array To Collection Degrees Of Progress
let collectiondegrees = ["80%", "90%", "60%", "70%", "80%"];
function addPro() {
  let prog = "";
  for (let i = 0; i < 5; i++) {
    prog += `
                    <div class="prog">
                    <div class="progress_info">
                        <span>${collectionNames[i]}</span>
                        <span>${collectiondegrees[i]}</span>
                    </div>
                    <div class="progress_line"></div>
                </div>
    `;
  }
  collectionsProgress.innerHTML = prog;
}
addPro();

// Show Services Card In Page

// Step 1 ==> Catch the Container Of Card (.rowServices)

let rowServices = document.querySelector(".rowServices");
function showServicesCard() {
  let card = "";
  for (let i = 0; i < 3; i++) {
    card += `
              <div class="col-services">
            <h2>Basic Plan</h2>
            <div class="card_serve">
              <p><span>$9</span>/Month</p>
              <ul>
                <li>1GB storage</li>
                <li>3GB bandwidth</li>
                <li>Free Email Addresses</li>
                <li>24/7 security monitoring</li>
                <li>1GB storage24/7 technical support</li>
                <button>Get Plan</button>
              </ul>
            </div>
          </div>
    
    `;
    rowServices.innerHTML = card;
  }
}
showServicesCard();
