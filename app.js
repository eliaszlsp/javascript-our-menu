// new version
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnsCategories = document.querySelectorAll(".filter-btn");
document.addEventListener("DOMContentLoaded", () => {
  let htmlSub = menu.map((item) => {

    return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  }).join("")
  sectionCenter.innerHTML = htmlSub;
});
// new menu
function menuFilter(filterButton) {
  if (filterButton != "all") {
    return menu.filter(menu => menu.category == filterButton);
  } else if (filterButton == "all") {
    return menu
  }
}
btnsCategories.forEach(button => {
  button.addEventListener("click", () => {
    const filterButton = button.textContent.trim()
    let updateMenu = menuFilter(filterButton).map((item) => {
      return `<article class="menu-item">
      <img src="${item.img}" alt="${item.title}" class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    }).join('');
    sectionCenter.innerHTML = updateMenu

  })
})

// old version 
/* const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const btnsCategories = document.querySelectorAll(".filter-btn");


document.addEventListener("DOMContentLoaded", () => {
  let htmlSub = menu.map((item) => {

    return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  htmlSub = htmlSub.join("")
  sectionCenter.innerHTML = htmlSub;
});


const menuBreakFast = menu.filter(menu => menu.category == "breakfast")
const menuLunch = menu.filter(menu => menu.category == "lunch")
const menuShakes = menu.filter(menu => menu.category == "shakes")

btnsCategories.forEach((button) => {
  const btnAll = button.textContent.includes('all')
  button.addEventListener("click", () => {
    if (btnAll == true) {
      let htmlAll = menu.map((item) => {
        return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
      })
      htmlAll = htmlAll.join("")
      sectionCenter.innerHTML = htmlAll
    };
    const btnBreakFast = button.textContent.includes('breakfast')
    if (btnBreakFast == true) {
      let htmlBreakFast = menuBreakFast.map((item) => {
        return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
      })
      htmlBreakFast = htmlBreakFast.join("")
      sectionCenter.innerHTML = htmlBreakFast
    }
    const btnLunch = button.textContent.includes('lunch')
    if (btnLunch == true) {
      let htmlLunch = menuLunch.map((item) => {
        return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
      })
      htmlLunch = htmlLunch.join("")
      sectionCenter.innerHTML = htmlLunch
    }

    const btnShakes = button.textContent.includes('shakes')
    if (btnShakes == true) {
      let htmlShakes = menuShakes.map((item) => {
        return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
      })
      htmlShakes = htmlShakes.join("")
      sectionCenter.innerHTML = htmlShakes
    }
  })
})







 */