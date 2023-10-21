// silder start
// document.addEventListener("DOMContentLoaded", function () {
//      const slider = document.querySelector(".slider");
//      const images = document.querySelectorAll(".slider img");
//      let currentImageIndex = 0;
//      const imageCount = images.length;
//      const slideWidth = images[0].clientWidth;
   
//      function nextSlide() {
//        if (currentImageIndex === imageCount - 1) {
//          currentImageIndex = 0;
//        } else {
//          currentImageIndex++;
//        }
//        updateSlider();
//      }
   
//      function updateSlider() {
//        const offsetX = -currentImageIndex * slideWidth;
//        slider.style.transform = `translateX(${offsetX}px)`;
//      }
   
//      setInterval(nextSlide, 6000); // Change the image every 3 seconds
//    });

   //silder end

//filter cars with brand name
   const data = [
    {
      id: 1,
      name: "BMW",
      img: "./img/BMW-1.png",
      price: 4,
      brand: "BMW",
    },
    {
      id: 2,
      name: "Mini Cooper",
      img: "./img/mini-1.png",
      price: 1499,
      brand: "Mini Cooper",
    },
    {
      id: 3,
      name: "Mercedes - Benz",
      img: "./img/Mercedes-Benz-1.png",
      price: 1499,
      brand: "Mercedes-Benz",
    },
    {
      id: 4,
      name: "Hyundai",
      img: "./img/Hyundai-1.png",
      price: 1499,
      brand: "Hyundai",
    },
    {
      id: 5,
      name: "Mercedes-Benz",
      img: "./img/Mercedes-Benz-2.png",
      price: 1499,
      brand: "Mercedes-Benz",
    },
    {
      id: 6,
      name: "Mercedes-Benz",
      img: "./img/Mercedes-Benz-3.png",
      price: 1499,
      brand: "Mercedes-Benz",
    },
    {
      name: "BMW",
      img: "./img/BMW-2.png",
      price: 4,
      brand: "BMW",
    },
    {
      id: 8,
      name: "Audi",
      img: "./img/Audi-1.png",
      price: 1499,
      brand: "Audi",
    },
    {
      id: 8,
      name: "Innova",
      img: "./img/Innova-1.png",
      price: 1499,
      brand: "Innova",
    },
    
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".searchInput");
  const brandegoriesContainer = document.querySelector(".brands");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
            <div class="product">
                           <img src=${product.img} alt="">
                           <span class="name">${product.name}</span>
                           <span class="priceText">₹ ${product.price}</span>
                      </div>
  
            `
      )
      .join("");
  };
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setbrandegories = () => {
    const allbrands = data.map((item) => item.brand);
    const brandegories = [
      "All",
      ...allbrands.filter((item, i) => {
        return allbrands.indexOf(item) === i;
      }),
    ];
  
    brandegoriesContainer.innerHTML = brandegories
      .map(
        (brand) => `
      <div class="btn-Container">
      <button class="button" role="button">${brand}</button>
      </div>
    `
      )
      .join("");
  
    brandegoriesContainer.addEventListener("click", (e) => {
      const selectedbrand = e.target.textContent;
  
      selectedbrand === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.brand === selectedbrand));
    });
  };
  // const setPrice = () => {
  //   const priceList = data.map((item) => item.price);
  //   const minPrice = Math.min(...priceList);
  //   const maxPrice = Math.max(...priceList);
  
  //   priceRange.min = minPrice;
  //   priceRange.max = maxPrice;
  //   priceRange.value = maxPrice;
  //   priceValue.textContent = "₹" + maxPrice;
  
  //   priceRange.addEventListener("input", (e) => {
  //     priceValue.textContent = "₹" + e.target.value;
  //     displayProducts(data.filter((item) => item.price <= e.target.value));
  //   });
  // };
  setbrandegories();
  // setPrice();