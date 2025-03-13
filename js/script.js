document.addEventListener("DOMContentLoaded", () => {
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
  //counter Stats
  let nums = document.querySelectorAll(".stats-container .stat-item h2 span");
  let section = document.querySelector(".hero-section");
  let started = false;

  window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
      if (!started) {
        let maxGoal = Math.max(...Array.from(nums, (num) => +num.dataset.goal));
        nums.forEach((num) => startCount(num, maxGoal));
      }
      started = true;
    }
  };
  function startCount(el, maxGoal) {
    let goal = +el.dataset.goal;
    let duration = 2000;
    let stepTime = 10;
    let step = (goal / maxGoal) * (stepTime / duration) * maxGoal;

    let current = 0;
    let count = setInterval(() => {
      current += step;
      el.textContent = Math.floor(current);

      if (current >= goal) {
        el.textContent = goal;
        clearInterval(count);
      }
    }, stepTime);
  }
  // =====================================================================================================
  const products = [
    {
      image: "./images/Frame 32.jpg",
      name: "T-shirt with Tape Details",
      rating: 4.5,
      newPrice: "$120",
    },
    {
      image: "./images/Frame 33.jpg",
      name: "Skinny Fit Jeans",
      rating: 4.0,
      newPrice: "$240",
      oldPrice: "$260",
      discount: "-20%",
    },
    {
      image: "./images/Frame 34 (1).jpg",
      name: "Chekered Shirt",
      rating: 5.0,
      newPrice: "$180",
    },
    {
      image: "./images/Frame 38.jpg",
      name: "Sleeve Striped T-shirt",
      rating: 4.0,
      newPrice: "$130",
      oldPrice: "$160",
      discount: "-30%",
    },
  ];

  const collectContainer = document.querySelector(".collect");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // حساب عدد النجوم الممتلئة والفارغة
    const fullStars = Math.floor(product.rating); // عدد النجوم الكاملة
    const hasHalfStar = product.rating % 1 !== 0; // هل يوجد نصف نجمة؟
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // عدد النجوم الفارغة

    // إنشاء النجوم
    let starsHTML = "";

    // إضافة النجوم الكاملة ★
    for (let i = 0; i < fullStars; i++) {
      starsHTML += `<i class="fa-solid fa-star"></i>`;
    }

    // إضافة نصف نجمة ½ ★ إذا كان التقييم يحتوي على .5
    if (hasHalfStar) {
      starsHTML += `<i class="fa-solid fa-star-half-alt"></i>`;
    }

    // إضافة النجوم الفارغة ☆
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += `<i class="fa-regular fa-star"></i>`;
    }

    // التحقق من وجود oldPrice و discount
    const oldPrice = product.oldPrice
      ? `<span class="old">${product.oldPrice}</span>`
      : "";
    const discount = product.discount
      ? `<span class="discount">${product.discount}</span>`
      : "";

    card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="stars">
                    <span class="repeat">${starsHTML}</span>
                    <span class="rate">${product.rating}/5</span>
                </div>
                <div class="price">
                    <span class="new">${product.newPrice}</span>
                    ${oldPrice}
                    ${discount}
                </div>
            `;

    collectContainer.appendChild(card);
  });

  // section three
  const product = [
    {
      image: "./images/image 7.jpg",
      name: "Vertical Striped Shirt",
      rating: 4.5,
      newPrice: "$212",
      oldPrice: "$232",
      discount: "-20%",
    },
    {
      image: "./images/image 8.jpg",
      name: "Courage Graphic T-shirt",
      rating: 4.0,
      newPrice: "$145",
    },
    {
      image: "./images/image 9.jpg",
      name: "Loose Fit Bermuda Shorts",
      rating: 5.0,
      newPrice: "$80",
    },
    {
      image: "./images/image 10.jpg",
      name: "Faded Skinny Jeans",
      rating: 4.0,
      newPrice: "$210",
    },
  ];

  const collecttContainer = document.querySelector(".collectt");

  product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // حساب عدد النجوم الكاملة والفارغة
    const fullStars = Math.floor(product.rating); // عدد النجوم الممتلئة
    const hasHalfStar = product.rating % 1 !== 0; // هل يوجد نصف نجمة؟
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // عدد النجوم الفارغة

    // إنشاء النجوم
    let starsHTML = "";

    // إضافة النجوم الكاملة ⭐
    for (let i = 0; i < fullStars; i++) {
      starsHTML += `<i class="fa-solid fa-star"></i>`;
    }

    // إضافة نصف نجمة ⭐½ إذا كان التقييم يحتوي على .5
    if (hasHalfStar) {
      starsHTML += `<i class="fa-solid fa-star-half-alt"></i>`;
    }

    // إضافة النجوم الفارغة ☆
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += `<i class="fa-regular fa-star"></i>`;
    }

    // التحقق من وجود oldPrice و discount
    const oldPrice = product.oldPrice
      ? `<span class="old">${product.oldPrice}</span>`
      : "";
    const discount = product.discount
      ? `<span class="discount">${product.discount}</span>`
      : "";

    // إنشاء محتوى الكارد
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="stars">
                <span class="repeat">${starsHTML}</span>
                <span class="rate">${product.rating}/5</span>
            </div>
            <div class="price">
                <span class="new">${product.newPrice}</span>
                ${oldPrice}
                ${discount}
            </div>
        `;

    collecttContainer.appendChild(card);
  });

  const rates = [
    {
      title: "Sarah.",
      paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    },
    {
      title: "James L.",
      paragraph: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
    {
      title: "Alex K.",
      paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      title: "abdullah.",
      paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      title: "mohamed.",
      paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
  ];

  const checkcollectContainer = document.querySelector(".checkcollect");

  rates.forEach((data) => {
    const frame = document.createElement("div");
    frame.classList.add("frame");
    frame.innerHTML = `
            <div class="yellowstar">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            </div>
            <h2>${data.title} <span><i class="fa-solid fa-circle-check"></i></span></h2>
            <p>${data.paragraph}</p>
        `;

    checkcollectContainer.appendChild(frame);
  });

  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const scrollAmount = 300;

  function updateButtons() {
    leftBtn.disabled = checkcollectContainer.scrollLeft <= 0;
    rightBtn.disabled =
      checkcollectContainer.scrollLeft + checkcollectContainer.clientWidth >=
      checkcollectContainer.scrollWidth;
  }

  rightBtn.addEventListener("click", () => {
    checkcollectContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  });

  leftBtn.addEventListener("click", () => {
    checkcollectContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  });

  updateButtons();
});
