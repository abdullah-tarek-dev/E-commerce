document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            image: "/images/Frame 32.jpg",
            name: "T-SHIRT WITH TAPE DETAILS",
            rating: 4.5,
            newPrice: "$20",
            oldPrice: "$25",
            discount: "20%"
        },
        {
            image: "/images/Frame 33.jpg",
            name: "SKINNY FIT JEANS",
            rating: 4.0,
            newPrice: "$18",
            oldPrice: "$22",
            discount: "18%"
        },
        {
            image: "/images/Frame 34 (1).jpg",
            name: "CHECKERED SHIRT",
            rating: 5.0,
            newPrice: "$18",
            oldPrice: "$22",
            discount: "18% "
        },
        {
            image: "/images/Frame 38.jpg",
            name: "SLEEVE STRIPED T-SHIRT",
            rating: 4.0,
            newPrice: "$18",
            oldPrice: "$22",
            discount: "18%"
        }
    ];

    const collectContainer = document.querySelector(".collect");

    products.forEach(product => {
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
                <span class="old">${product.oldPrice}</span>
                <span class="discount">${product.discount}</span>
            </div>
        `;
    
        collectContainer.appendChild(card);
    });
    


// section three
const product = [
    {
        image: "/images/image 7.jpg",
        name: "VERTICAL STRIPED SHIRT",
        rating: 4.5,
        newPrice: "$20",
        oldPrice: "$25",
        discount: "20%"
    },
    {
        image: "/images/image 8.jpg",
        name: "COURAGE GRAPHIC T-SHIRT",
        rating: 4.0,
        newPrice: "$18",
        oldPrice: "$22",
        discount: "18%"
    },
    {
        image: "/images/image 9.jpg",
        name: "LOOSE FIT BERMUDA SHORTS",
        rating: 5.0,
        newPrice: "$18",
        oldPrice: "$22",
        discount: "18% "
    },
    {
        image: "/images/image 10.jpg",
        name: "FADED SKINNY JEANS",
        rating: 4.0,
        newPrice: "$18",
        oldPrice: "$22",
        discount: "18%"
    }
];

const collecttContainer = document.querySelector(".collectt");

product.forEach(product => {
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
            <span class="old">${product.oldPrice}</span>
            <span class="discount">${product.discount}</span>
        </div>
    `;

    collecttContainer.appendChild(card);
});

const rates = [
    {
        title: "Sarah.",
        paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`
    },
    {
        title: "James L.",
        paragraph: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        title: "Alex K.",
        paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        title: "abdullah.",
        paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        title: "mohamed.",
        paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    }
];

const checkcollectContainer = document.querySelector(".checkcollect");

rates.forEach(data => {
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
    rightBtn.disabled = checkcollectContainer.scrollLeft + checkcollectContainer.clientWidth >= checkcollectContainer.scrollWidth;
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
