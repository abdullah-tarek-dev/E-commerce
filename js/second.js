document.addEventListener('DOMContentLoaded', ()=> {
    // Close Top Bar
    function closeBtn() {
      const topBar = document.querySelector(".top-bar");
      topBar.classList.add("closing");
      setTimeout(() => {
        topBar.style.display = "none";
      }, 1000);
    }
    document.getElementById("closeTopBar").addEventListener("click", closeBtn);
  
    // Mobile Menu Toggle
    const menuIcon = document.getElementById("menuIcon");
    const mainNav = document.getElementById("mainNav");
  
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
  
    // Search Icon Toggle
    const searchIcon = document.getElementById("searchIcon");
    const searchBar = document.getElementById("searchBar");
  
    searchIcon.addEventListener("click", () => {
      searchIcon.classList.toggle("active");
      searchBar.classList.toggle("active");
    });
    // Up Button
    const upBtn = document.getElementById("topBarButton");
  
    function toggleUpBtn() {
      if (window.scrollY === 0) {
        upBtn.style.display = "none";
      } else {
        upBtn.style.display = "block";
      }
    }
    window.addEventListener("scroll", toggleUpBtn);
    window.addEventListener("load", toggleUpBtn);
  
    upBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });  
  
  
  // section graphic

        const productData = JSON.parse(localStorage.getItem("selectedProduct"));
        if (!productData) {
            document.getElementById("graphic_container").innerHTML = "<h1>Product Not Found</h1>";
            return;
        }
        function createElement(tag, className = "", innerHTML = "") {
          const element = document.createElement(tag);
          if (className) element.className = className;
          if (innerHTML) element.innerHTML = innerHTML;
          return element;
      }
        const section = document.querySelector(".graphic");

        // إنشاء الحاوية الأساسية
        const graphicContainer = createElement("div", "graphic_container");
        
        // إنشاء عنصر switch
        const switchDiv = createElement(
          "div",
          "switch",
          `
            <a href="../index.html" class="home" id="simillar">Home</a> 
            <span><i class="fa-solid fa-angle-right"></i></span>
            <a href="#" class="shop" id="simillar">Shop</a>
            <span><i class="fa-solid fa-angle-right"></i></span>
            <a href="#" class="Men" id="simillar">Men</a>
            <span><i class="fa-solid fa-angle-right"></i></span>
            <a href="#" class="T-shirt">${productData.halfname}</a>
          `
        );
        
        // إنشاء عنصر الصور
        const threeImg = createElement(
          "div",
          "threeimg",
          `
            <img src="${productData.image}" id="face" alt="">
            <img src="${productData.imageback}" id="back" alt="">
            <img src="${productData.imagefull}" id="full" alt="">
          `
        );
        
        const imageView = createElement(
          "div",
          "imageview",
          `<img src="${productData.image}" id="view" alt="">`
        );
        
        const shirtDiv = createElement("div", "shirt");
        shirtDiv.appendChild(threeImg);
        shirtDiv.appendChild(imageView);
        
        // إنشاء عنصر المعلومات
        const infoDiv = createElement(
          "div",
          "information",
          `
            <h1>${productData.name}</h1>
            <div class="stars" id="stars_container"></div>
            <div class="price">
              <span class="newprice">${productData.newPrice}</span>
              ${productData.oldPrice ? `<span class="oldprice">${productData.oldPrice}</span>` : ""}
              ${productData.discount ? `<span class="discount">${productData.discount}</span>` : ""}
            </div>
            <p class="pragraph">${productData.pragraph || "No description available."}</p>
          `
        );
        
        // إنشاء خيارات الألوان
        const selectColorDiv = createElement(
          "div",
          "selectcolor",
          `
            <span>Select Colors</span>
            <div class="select">
              <div class="color1"><i class="fa-solid fa-check"></i></div>
              <div class="color2"><i class="fa-solid fa-check"></i></div>
              <div class="color3"><i class="fa-solid fa-check"></i></div>
            </div>
          `
        );
        
        // إنشاء خيارات المقاسات
        const chooseSizeDiv = createElement(
          "div",
          "chosesize",
          `
            <span>Choose Size</span>
            <div class="size">
              <button class="small">Small</button>
              <button class="medium">Medium</button>
              <button class="large">Large</button>
              <button class="xlarge">X-Large</button>
            </div>
          `
        );
        
        // إنشاء عنصر الكمية
        const quantityDiv = createElement(
          "div",
          "quantity",
          `
            <div class="number">
              <button><i class="fa-solid fa-minus"></i></button>
              <span style="font-size:14px;">1</span>
              <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="addcart">Add to cart</button>
          `
        );
        
        // تجميع العناصر داخل `infoDiv`
        infoDiv.appendChild(selectColorDiv);
        infoDiv.appendChild(chooseSizeDiv);
        infoDiv.appendChild(quantityDiv);
        
        // تجميع `contentDiv`
        const contentDiv = createElement("div", "content");
        contentDiv.appendChild(shirtDiv);
        contentDiv.appendChild(infoDiv);
        
        // إنشاء جزء التقييمات والتفاصيل
        const reminderContainer = createElement(
          "div",
          "remindercontainer",
          `
            <div class="btns">
              <button class="details">Product Details</button>
              <button class="rateandreview">Rating & Reviews</button>
              <button class="faqs">FAQs</button>
            </div>
            <div class="reminder">
              <div class="reminderfirst">
                <h1>All reviews <span class="count"></span></h1>
                <div class="reminderright">
                  <h3>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.125 12.125V20.75C13.125 21.0484 13.0065 21.3345 12.7955 21.5455C12.5845 21.7565 12.2984 21.875 12 21.875C11.7016 21.875 11.4155 21.7565 11.2045 21.5455C10.9935 21.3345 10.875 21.0484 10.875 20.75V12.125C10.875 11.8266 10.9935 11.5405 11.2045 11.3295C11.4155 11.1185 11.7016 11 12 11C12.2984 11 12.5845 11.1185 12.7955 11.3295C13.0065 11.5405 13.125 11.8266 13.125 12.125ZM18.75 18.5C18.4516 18.5 18.1655 18.6185 17.9545 18.8295C17.7435 19.0405 17.625 19.3266 17.625 19.625V20.75C17.625 21.0484 17.7435 21.3345 17.9545 21.5455C18.1655 21.7565 18.4516 21.875 18.75 21.875C19.0484 21.875 19.3345 21.7565 19.5455 21.5455C19.7565 21.3345 19.875 21.0484 19.875 20.75V19.625C19.875 19.3266 19.7565 19.0405 19.5455 18.8295C19.3345 18.6185 19.0484 18.5 18.75 18.5ZM21 14.75H19.875V4.25C19.875 3.95163 19.7565 3.66548 19.5455 3.4545C19.3345 3.24353 19.0484 3.125 18.75 3.125C18.4516 3.125 18.1655 3.24353 17.9545 3.4545C17.7435 3.66548 17.625 3.95163 17.625 4.25V14.75H16.5C16.2016 14.75 15.9155 14.8685 15.7045 15.0795C15.4935 15.2905 15.375 15.5766 15.375 15.875C15.375 16.1734 15.4935 16.4595 15.7045 16.6705C15.9155 16.8815 16.2016 17 16.5 17H21C21.2984 17 21.5845 16.8815 21.7955 16.6705C22.0065 16.4595 22.125 16.1734 22.125 15.875C22.125 15.5766 22.0065 15.2905 21.7955 15.0795C21.5845 14.8685 21.2984 14.75 21 14.75ZM5.25 15.5C4.95163 15.5 4.66548 15.6185 4.4545 15.8295C4.24353 16.0405 4.125 16.3266 4.125 16.625V20.75C4.125 21.0484 4.24353 21.3345 4.4545 21.5455C4.66548 21.7565 4.95163 21.875 5.25 21.875C5.54837 21.875 5.83452 21.7565 6.0455 21.5455C6.25647 21.3345 6.375 21.0484 6.375 20.75V16.625C6.375 16.3266 6.25647 16.0405 6.0455 15.8295C5.83452 15.6185 5.54837 15.5 5.25 15.5ZM7.5 11.75H6.375V4.25C6.375 3.95163 6.25647 3.66548 6.0455 3.4545C5.83452 3.24353 5.54837 3.125 5.25 3.125C4.95163 3.125 4.66548 3.24353 4.4545 3.4545C4.24353 3.66548 4.125 3.95163 4.125 4.25V11.75H3C2.70163 11.75 2.41548 11.8685 2.2045 12.0795C1.99353 12.2905 1.875 12.5766 1.875 12.875C1.875 13.1734 1.99353 13.4595 2.2045 13.6705C2.41548 13.8815 2.70163 14 3 14H7.5C7.79837 14 8.08452 13.8815 8.2955 13.6705C8.50647 13.4595 8.625 13.1734 8.625 12.875C8.625 12.5766 8.50647 12.2905 8.2955 12.0795C8.08452 11.8685 7.79837 11.75 7.5 11.75ZM14.25 7.25H13.125V4.25C13.125 3.95163 13.0065 3.66548 12.7955 3.4545C12.5845 3.24353 12.2984 3.125 12 3.125C11.7016 3.125 11.4155 3.24353 11.2045 3.4545C10.9935 3.66548 10.875 3.95163 10.875 4.25V7.25H9.75C9.45163 7.25 9.16548 7.36853 8.9545 7.5795C8.74353 7.79048 8.625 8.07663 8.625 8.375C8.625 8.67337 8.74353 8.95952 8.9545 9.1705C9.16548 9.38147 9.45163 9.5 9.75 9.5H14.25C14.5484 9.5 14.8345 9.38147 15.0455 9.1705C15.2565 8.95952 15.375 8.67337 15.375 8.375C15.375 8.07663 15.2565 7.79048 15.0455 7.5795C14.8345 7.36853 14.5484 7.25 14.25 7.25Z" fill="black" fill-opacity="0.4"/>
</svg>
                  </h3>
                  <select name="Latest">
                    <option value="">Latest</option>
                    <option value="">First</option>
                    <option value="">All</option>
                  </select>
                  <span>Write a review</span>
                </div>
              </div>
              <div class="checkcollect"></div>
              <div class="btnloadmore">
                <button class="loadmore">Load More Reviews</button>
              </div>
            </div>
          `
        );
        
        // إضافة `You might also like`
        const alsoLikeDiv = createElement(
          "div",
          "alsolike",
          `
            <h1>You might also like</h1>
            <div class="mightalsolike">
              <div class="collect"></div>
            </div>
          `
        );
        
        // تجميع كل العناصر داخل `graphicContainer`
        graphicContainer.appendChild(switchDiv);
        graphicContainer.appendChild(contentDiv);
        graphicContainer.appendChild(reminderContainer);
        graphicContainer.appendChild(alsoLikeDiv);
        
        // إضافة `graphicContainer` إلى `section`
        section.appendChild(graphicContainer);
        
          // توليد النجوم ديناميكيًا
          function generateStars(containerId, rating = 5) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = ""; 
        
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;
            const emptyStars = 5 - Math.ceil(rating);
        
            for (let i = 0; i < fullStars; i++) {
              container.innerHTML += '<i class="fa-solid fa-star"></i>';
            }
            if (halfStar) {
              container.innerHTML += '<i class="fa-solid fa-star-half-alt"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
              container.innerHTML += '<i class="fa-regular fa-star"></i>';
            }
            container.innerHTML += `<span class="rating">${rating}/5</span>`;
          }
        
          generateStars("stars_container", 4.5);
        
          // تبديل الصور عند النقر
          const images = {
            face: "../images/image 1.png",
            back: "../images/image5update.png",
            full: "../images/image6update.png",
          };
        
          Object.keys(images).forEach((key) => {
            const element = document.getElementById(key);
            if (element) {
              element.addEventListener("click", () => {
                document.getElementById("view").src = images[key];
                Object.keys(images).forEach((k) =>
                  document.getElementById(k).style.border = "none"
                );
                element.style.border = "1px solid #000";
              });
            }
          });
        
          // تفعيل الزر الافتراضي
          const buttons = document.querySelectorAll(".btns button");
          const defaultActive = document.querySelector(".btns .rateandreview");
        
          if (defaultActive) defaultActive.classList.add("active");
        
          buttons.forEach((button) => {
            button.addEventListener("click", () => {
              buttons.forEach((btn) => btn.classList.remove("active"));
              button.classList.add("active");
            });
          });
        
          // عرض التقييمات الديناميكية
          const rates = [
            { title: "Sarah.", paragraph: `"Great quality!"`, rating: 4.5 },
            { title: "James L.", paragraph: `"Trendy styles!"`, rating: 5 },
            { title: "Alex K.", paragraph: `"Good selection!"`, rating: 3.5 },
            { title: "Abdullah.", paragraph: `"Nice variety!"`, rating: 4 },
            { title: "Mohamed.", paragraph: `"Decent options!"`, rating: 2.5 },
          ];
        
          const checkcollectContainer = document.querySelector(".checkcollect");
          const loadMoreBtn = document.querySelector(".loadmore");
        
          let visibleReviews = 4;
          let isExpanded = false;
        
          function renderReviews() {
            if (!checkcollectContainer) return;
            checkcollectContainer.innerHTML = "";
            const reviewsToShow = isExpanded ? rates.length : visibleReviews;
        
            rates.slice(0, reviewsToShow).forEach((data) => {
              const frame = document.createElement("div");
              frame.classList.add("frame");
        
              frame.innerHTML = `
                <div class="elipsis"><i class="fa-solid fa-ellipsis"></i></div>
                <div class="yellowstar">${generateStarsHTML(data.rating)}</div>
                <h2>${data.title} <span><i class="fa-solid fa-circle-check"></i></span></h2>
                <p>${data.paragraph}</p>
              `;
              checkcollectContainer.appendChild(frame);
            });
        
            if (loadMoreBtn) {
              loadMoreBtn.textContent = isExpanded ? "Load Less Reviews" : "Load More Reviews";
            }
          }
        
          function generateStarsHTML(rating) {
            let starsHTML = "";
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;
            const emptyStars = 5 - Math.ceil(rating);
        
            for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fa-solid fa-star"></i>';
            if (halfStar) starsHTML += '<i class="fa-solid fa-star-half-alt"></i>';
            for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="fa-regular fa-star"></i>';
        
            return starsHTML;
          }
        
          renderReviews();
        
          if (loadMoreBtn) {
            loadMoreBtn.addEventListener("click", () => {
              isExpanded = !isExpanded;
              renderReviews();
            });
          }
        
          // عرض المنتجات
          const products = [
            { image: "../images/blue.png", name: "T-shirt with Tape Details", rating: 4.5, newPrice: "$120" },
            { image: "../images/gradiant.png", name: "Skinny Fit Jeans", rating: 4.0, newPrice: "$240", oldPrice: "$260", discount: "-20%" },
            { image: "../images/Frame 34 (1).jpg", name: "Chekered Shirt", rating: 5.0, newPrice: "$180" },
            { image: "../images/Frame 38(1).png", name: "Sleeve Striped T-shirt", rating: 4.0, newPrice: "$130", oldPrice: "$160", discount: "-30%" },
          ];
        
          const collectContainer = document.querySelector(".collect");
        
          if (collectContainer) {
            products.forEach((product) => {
              const card = document.createElement("div");
              card.classList.add("card");
        
              const oldPrice = product.oldPrice ? `<span class="old">${product.oldPrice}</span>` : "";
              const discount = product.discount ? `<span class="discount">${product.discount}</span>` : "";
        
              card.innerHTML = `
                <img class="imageupdate" src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="stars">
                  <span class="repeat">${generateStarsHTML(product.rating)}</span>
                  <span class="rate">${product.rating}/5</span>
                </div>
                <div class="price">
                  <span class="new">${product.newPrice}</span>
                  ${oldPrice} ${discount}
                </div>
              `;
        
              card.addEventListener("click", () => {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "../html/second.html";
              });
        
              collectContainer.appendChild(card);
            });
          }
        });
        