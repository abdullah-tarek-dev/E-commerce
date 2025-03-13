// Product data array (unchanged)
const products = [
  {
    image: "../images/image 8.png",
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    newPrice: 145,
    oldPrice: 242,
    discount: "20% off",
    category: "tshirts",
    color: "multi",
    size: "m",
    style: "casual",
  },
  {
    image: "../images/Frame 34.jpg",
    name: "Polo with Tipping Details",
    rating: 4.5,
    newPrice: 180,
    oldPrice: 242,
    discount: "20% off",
    category: "tshirts",
    color: "red",
    size: "l",
    style: "casual",
  },
  {
    image: "../images/product-4.png",
    name: "Black Striped T-shirt",
    rating: 4.0,
    newPrice: 120,
    oldPrice: 150,
    discount: "20% off",
    category: "tshirts",
    color: "black",
    size: "m",
    style: "casual",
  },
  {
    image: "../images/image 10.jpg",
    name: "Skinny Fit Jeans",
    rating: 3.5,
    newPrice: 240,
    oldPrice: 260,
    discount: "20% off",
    category: "jeans",
    color: "blue",
    size: "l",
    style: "casual",
  },
  {
    image: "../images/Frame 34 (1).jpg",
    name: "Checkered Shirt",
    rating: 4.5,
    newPrice: 180,
    category: "shirts",
    color: "multi",
    size: "m",
    style: "casual",
  },
  {
    image: "../images/Frame 38.jpg",
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: "20% off",
    category: "tshirts",
    color: "orange",
    size: "l",
    style: "casual",
  },
  {
    image: "../images/image 7.jpg",
    name: "Vertical Striped Shirt",
    rating: 5.0,
    newPrice: 212,
    oldPrice: 232,
    discount: "20% off",
    category: "shirts",
    color: "green",
    size: "xl",
    style: "casual",
  },
  {
    image: "../images/image 8.jpg",
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    newPrice: 145,
    category: "tshirts",
    color: "orange",
    size: "m",
    style: "casual",
  },
  {
    image: "../images/image 9.jpg",
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    newPrice: 80,
    category: "shorts",
    color: "blue",
    size: "l",
    style: "casual",
  },
  // Formal
  {
    image: "../images/image 7.jpg",
    name: "Vertical Striped Shirt",
    rating: 5.0,
    newPrice: 212,
    oldPrice: 232,
    discount: "20% off",
    category: "shirts",
    color: "green",
    size: "xl",
    style: "formal",
  },
  {
    image: "../images/Frame 34.jpg",
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    newPrice: 145,
    category: "tshirts",
    color: "orange",
    size: "m",
    style: "formal",
  },
  {
    image: "../images/Frame 34 (1).jpg",
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    newPrice: 80,
    category: "shorts",
    color: "blue",
    size: "l",
    style: "formal",
  },
  // Party
  {
    image: "../images/party2.avif",
    name: "Black Striped T-shirt",
    rating: 4.0,
    newPrice: 120,
    oldPrice: 150,
    discount: "20% off",
    category: "tshirts",
    color: "black",
    size: "m",
    style: "party",
  },
  {
    image: "../images/party2_.jpg",
    name: "Skinny Fit Jeans",
    rating: 3.5,
    newPrice: 240,
    oldPrice: 260,
    discount: "20% off",
    category: "jeans",
    color: "blue",
    size: "l",
    style: "party",
  },
  {
    image: "../images/party.avif",
    name: "Checkered Shirt",
    rating: 4.5,
    newPrice: 180,
    category: "shirts",
    color: "multi",
    size: "m",
    style: "party",
  },
  {
    image: "../images/party3.jpg",
    name: "Checkered Shirt",
    rating: 4.5,
    newPrice: 180,
    category: "shirts",
    color: "multi",
    size: "m",
    style: "party",
  },
  // Gym
  {
    image: "../images/gym.webp",
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: "20% off",
    category: "tshirts",
    color: "orange",
    size: "l",
    style: "gym",
  },
  {
    image: "../images/image 8.png",
    name: "Vertical Striped Shirt",
    rating: 5.0,
    newPrice: 212,
    oldPrice: 232,
    discount: "20% off",
    category: "shirts",
    color: "green",
    size: "xl",
    style: "gym",
  },
  {
    image: "../images/product-4.png",
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    newPrice: 145,
    category: "tshirts",
    color: "orange",
    size: "m",
    style: "gym",
  },
];

// Function to render products dynamically
const productList = document.getElementById("productList");
const closeFilter = document.getElementById("closeFilter");

function renderProducts(productsToRender) {
  productList.innerHTML = "";
  productsToRender.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-category", product.category);
    card.setAttribute("data-color", product.color);
    card.setAttribute("data-size", product.size);
    card.setAttribute("data-price", product.newPrice);
    card.setAttribute("data-style", product.style);

    // Generate star ratings
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) {
      starsHTML += `<i class="fa-solid fa-star"></i>`;
    }
    if (hasHalfStar) {
      starsHTML += `<i class="fa-solid fa-star-half-alt"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += `<i class="fa-regular fa-star"></i>`;
    }

    const oldPrice = product.oldPrice
      ? `<span class="original">$${product.oldPrice} <span class="discount">${product.discount}</span></span>`
      : "";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <div class="stars">${starsHTML}</div>
      <div class="price">
        $${product.newPrice}
        ${oldPrice}
      </div>
    `;

    productList.appendChild(card);
  });
}

// Get the style parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedStyle = urlParams.get("style") || "casual";

// Filter products based on the selected style
let filteredProducts = products.filter(
  (product) => product.style.toLowerCase() === selectedStyle.toLowerCase()
);

// Update the page title and navigation dynamically
const shopHeaderTitle = document.querySelector(".shop-header h2");
const navCategoryLink = document.querySelector(
  ".product-section nav a:last-child"
);
if (shopHeaderTitle && navCategoryLink) {
  const capitalizedStyle =
    selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1);
  shopHeaderTitle.textContent = capitalizedStyle;
  navCategoryLink.textContent = capitalizedStyle;
}

// Initial render of filtered products
renderProducts(filteredProducts);

// Toggle filters on small screens
const filterToggle = document.querySelector(".filter-toggle");
const filters = document.querySelector(".filters");

if (filterToggle && filters) {
  filterToggle.addEventListener("click", () => {
    filters.classList.toggle("active");
  });
} else {
  console.error("Filter toggle or filters element not found");
}

// Update price range value
const priceRange = document.querySelector(".price-range");
const priceValues = document.querySelector(".price-values");

if (priceRange && priceValues) {
  priceRange.addEventListener("input", function () {
    priceValues.textContent = `$${priceRange.min} - $${priceRange.value}`;
  });
} else {
  console.error("Price range or price values element not found");
}

// Toggle active size button
const sizeButtons = document.querySelectorAll(".sizes button");
if (sizeButtons.length > 0) {
  sizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      sizeButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
} else {
  console.error("Size buttons not found");
}

// Toggle active color
const colorButtons = document.querySelectorAll(".color");
if (colorButtons.length > 0) {
  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      colorButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
} else {
  console.error("Color buttons not found");
}

// Sorting functionality
const sortSelect = document.querySelector("#sort");
if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    const sortedProducts = [...filteredProducts]; // Use filtered products instead of all products
    const sortBy = this.value;

    sortedProducts.sort((a, b) => {
      const priceA = a.newPrice;
      const priceB = b.newPrice;
      if (sortBy === "Low to High") return priceA - priceB;
      if (sortBy === "High to Low") return priceB - priceA;
      return 0; // Default: "Most Popular"
    });

    renderProducts(sortedProducts);
    // updatePagination(); // Uncomment if you implement pagination
  });
} else {
  console.error("Sort select element not found");
}

// Filtering functionality
const applyFilterBtn = document.querySelector(".apply-filter");

if (applyFilterBtn) {
  applyFilterBtn.addEventListener("click", () => {
    const selectedCategories = Array.from(
      document.querySelectorAll('input[name="category"]:checked')
    ).map((cb) => cb.value);
    const selectedStyles = Array.from(
      document.querySelectorAll('input[name="style"]:checked')
    ).map((cb) => cb.value);
    const selectedSize =
      document
        .querySelector(".sizes button.active")
        ?.getAttribute("data-size") || "";
    const selectedColor =
      document.querySelector(".color.active")?.getAttribute("data-color") || "";
    const maxPrice = parseInt(priceRange.value);

    const filteredByUser = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const styleMatch =
        selectedStyles.length === 0 || selectedStyles.includes(product.style);
      const sizeMatch = !selectedSize || selectedSize === product.size;
      const colorMatch = !selectedColor || selectedColor === product.color;
      const priceMatch = product.newPrice <= maxPrice;

      return (
        categoryMatch && styleMatch && sizeMatch && colorMatch && priceMatch
      );
    });

    // Ensure the style from URL is respected
    const finalFilteredProducts = filteredByUser.filter(
      (product) => product.style.toLowerCase() === selectedStyle.toLowerCase()
    );

    renderProducts(finalFilteredProducts);
    // currentPage = 1; // Uncomment if you implement pagination
    // updatePagination();

    // Close filters on mobile after applying
    if (window.innerWidth <= 768) {
      filters.classList.remove("active");
    }
  });
} else {
  console.error("Apply filter button not found");
}

// Close filters when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    filters &&
    !filters.contains(e.target) &&
    !filterToggle.contains(e.target)
  ) {
    filters.classList.remove("active");
  }
});
// Close filters icon
closeFilter.addEventListener("click", () => {
  filters.classList.remove("active");
});
