
// ======================================
// APPLE STORE - MAIN JAVASCRIPT
// ======================================

// MAHSULOTLAR RASMLARI
const images1 = {
    iPhone: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-unselect-gallery-1-202509?wid=700&hei=700&fmt=png-alpha",
    Mac: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-pro-14-m4-pro-spaceblack-select-202410?wid=700&hei=700&fmt=png-alpha",
    iPad: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-select-202405-11inch-space-black-wifi?wid=700&hei=700&fmt=png-alpha",
    Watch: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-ultra2-202409?wid=700&hei=700&fmt=png-alpha",
    AirPods: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=700&hei=700&fmt=png-alpha",
    Accessories: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK73?wid=700&hei=700&fmt=png-alpha"
};

// 40 TA MAHSULOT
const products = [
    { id: 1, name: "iPhone 17 Pro Max", category: "iPhone", price: 1899, description: "Apple A19 Pro chip, professional camera system va katta Super Retina XDR displey." },
    { id: 2, name: "iPhone 17 Pro", category: "iPhone", price: 1599, description: "Kuchli A19 Pro protsessori va professional kamera imkoniyatlari." },
    { id: 3, name: "iPhone 17", category: "iPhone", price: 1099, description: "Zamonaviy dizayn, tezkor chip va ajoyib kamera." },
    { id: 4, name: "iPhone 16 Pro Max", category: "iPhone", price: 1699, description: "Katta ekran, kuchli kamera va premium dizayn." },
    { id: 5, name: "iPhone 16 Pro", category: "iPhone", price: 1399, description: "Professional suratga olish va yuqori unumdorlik." },
    { id: 6, name: "iPhone 16 Plus", category: "iPhone", price: 999, description: "Katta displey va uzoq ishlaydigan batareya." },
    { id: 7, name: "iPhone 16", category: "iPhone", price: 899, description: "Kundalik foydalanish uchun kuchli va zamonaviy iPhone." },
    { id: 8, name: "iPhone 15", category: "iPhone", price: 749, description: "Dynamic Island va 48 MP asosiy kamera." },

    { id: 9, name: "MacBook Pro 16 M4 Max", category: "Mac", price: 3499, description: "Professional ishlar uchun kuchli MacBook Pro." },
    { id: 10, name: "MacBook Pro 14 M4 Pro", category: "Mac", price: 2499, description: "M4 Pro chip va Liquid Retina XDR displey." },
    { id: 11, name: "MacBook Air 15 M4", category: "Mac", price: 1499, description: "Yengil korpus, katta ekran va Apple M4 chip." },
    { id: 12, name: "MacBook Air 13 M4", category: "Mac", price: 1199, description: "Ixcham va qulay kundalik noutbuk." },
    { id: 13, name: "Mac mini M4", category: "Mac", price: 799, description: "Kichik korpusdagi katta imkoniyatlar." },
    { id: 14, name: "iMac 24 M4", category: "Mac", price: 1799, description: "Yorqin ekranli zamonaviy all-in-one kompyuter." },
    { id: 15, name: "Mac Studio", category: "Mac", price: 2499, description: "Kreativ mutaxassislar uchun kuchli ish stansiyasi." },
    { id: 16, name: "Mac Pro", category: "Mac", price: 6999, description: "Murakkab professional vazifalar uchun Mac." },

    { id: 17, name: "iPad Pro 13 M4", category: "iPad", price: 1599, description: "Ultra Retina XDR displey va kuchli M4 chip." },
    { id: 18, name: "iPad Pro 11 M4", category: "iPad", price: 1299, description: "Yengil va kuchli professional planshet." },
    { id: 19, name: "iPad Air 13 M3", category: "iPad", price: 999, description: "Katta ekran va Apple M3 chip." },
    { id: 20, name: "iPad Air 11 M3", category: "iPad", price: 799, description: "O‘qish, ijod va kundalik foydalanish uchun." },
    { id: 21, name: "iPad mini", category: "iPad", price: 599, description: "Kichik o‘lchamdagi qulay va kuchli planshet." },

    { id: 22, name: "Apple Watch Ultra 2", category: "Watch", price: 799, description: "Sport, sarguzasht va kundalik hayot uchun." },
    { id: 23, name: "Apple Watch Series 10", category: "Watch", price: 499, description: "Yupqa dizayn va sog‘liqni kuzatish imkoniyatlari." },
    { id: 24, name: "Apple Watch SE", category: "Watch", price: 299, description: "Muhim funksiyalarga ega aqlli soat." },

    { id: 25, name: "AirPods Pro 2", category: "AirPods", price: 249, description: "Faol shovqinni kamaytirish va sifatli ovoz." },
    { id: 26, name: "AirPods 4", category: "AirPods", price: 179, description: "Qulay dizayn va tiniq ovoz." },
    { id: 27, name: "AirPods Max", category: "AirPods", price: 549, description: "Premium quloqchin va yuqori sifatli audio." },

    { id: 28, name: "Magic Keyboard", category: "Accessories", price: 99, description: "Qulay yozish uchun simsiz klaviatura." },
    { id: 29, name: "Magic Mouse", category: "Accessories", price: 79, description: "Multi-Touch yuzasiga ega sichqoncha." },
    { id: 30, name: "Apple Pencil Pro", category: "Accessories", price: 129, description: "Ijodkorlar uchun ilg‘or stilus." },
    { id: 31, name: "Apple Pencil USB-C", category: "Accessories", price: 79, description: "Qulay va aniq yozish vositasi." },
    { id: 32, name: "MagSafe Charger", category: "Accessories", price: 39, description: "MagSafe simsiz quvvatlagichi." },
    { id: 33, name: "20W USB-C Adapter", category: "Accessories", price: 29, description: "USB-C quvvat adapteri." },
    { id: 34, name: "USB-C Cable", category: "Accessories", price: 19, description: "USB-C quvvatlash va ma'lumot kabeli." },
    { id: 35, name: "AirTag", category: "Accessories", price: 29, description: "Buyumlaringiz joylashuvini topishga yordam beradi." },
    { id: 36, name: "HomePod mini", category: "Accessories", price: 99, description: "Ixcham aqlli kolonka." },
    { id: 37, name: "Apple TV 4K", category: "Accessories", price: 129, description: "Televizoringiz uchun Apple TV qurilmasi." },
    { id: 38, name: "iPhone Silicone Case", category: "Accessories", price: 49, description: "iPhone uchun himoya g‘ilofi." },
    { id: 39, name: "iPhone Clear Case", category: "Accessories", price: 39, description: "Shaffof himoya g‘ilofi." },
    { id: 40, name: "Apple Watch Band", category: "Accessories", price: 49, description: "Apple Watch uchun almashtiriladigan tasma." }
];

// ======================================
// LOCAL STORAGE
// ======================================

function getStorage(key, fallback = []) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return data ?? fallback;
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

let cart = getStorage("appleCart");
let favorites = getStorage("appleFavorites");
let compareList = getStorage("appleCompare");
let orders = getStorage("appleOrders");
let currentUser = getStorage("appleUser", null);
let selectedCategory = "all";
let currentLanguage = localStorage.getItem("appleLanguage") || "uz";
let isRegister = false;

// ======================================
// ELEMENTLAR
// ======================================

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

// ======================================
// NARX FORMATLASH
// ======================================

function formatPrice(price) {
    return "$" + Number(price).toLocaleString("en-US");
}

// ======================================
// MAHSULOTLARNI CHIQARISH
// ======================================

function renderProducts() {
    let filtered = [...products];

    if (selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    const search = searchInput.value.trim().toLowerCase();

    if (search) {
        filtered = filtered.filter(p =>
            (p.name + " " + p.category).toLowerCase().includes(search)
        );
    }

    if (sortSelect.value === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === "high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortSelect.value === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    productGrid.innerHTML = "";

    if (!filtered.length) {
        productGrid.innerHTML = '<p class="empty-message">Mahsulot topilmadi.</p>';
        return;
    }

    filtered.forEach(product => {
        const isFavorite = favorites.includes(product.id);

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
        <button class="favorite-toggle ${isFavorite ? "active" : ""}"
          data-favorite="${product.id}" title="Sevimlilarga qo‘shish">
          ${isFavorite ? "♥" : "♡"}
        </button>
  
        <div class="product-image">
          <img src="${images[product.category]}"
            alt="${product.name}" loading="lazy"
            onerror="this.style.display='none'">
        </div>
  
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
  
        <div class="product-actions">
          <button data-details="${product.id}">Batafsil</button>
          <button class="add-cart" data-add="${product.id}">Savatchaga +</button>
        </div>
      `;

        productGrid.appendChild(card);
    });
}

// ======================================
// CATEGORY
// ======================================

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".category-card").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        selectedCategory = button.dataset.category;
        renderProducts();
    });
});

// ======================================
// QIDIRUV VA SARALASH
// ======================================

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.getElementById("searchBtn").addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    searchInput.focus();
});

// ======================================
// SAVATCHA
// ======================================

function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    saveStorage("appleCart", cart);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    updateCart();
    alert(product.name + " savatchaga qo‘shildi!");
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (!cart.length) {
        container.innerHTML = '<p class="empty-message">Savatcha hozircha bo‘sh.</p>';
        totalElement.textContent = "";
        return;
    }

    let total = 0;

    container.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return "";

        total += product.price * item.quantity;

        return `
        <div class="cart-item">
          <div>
            <strong>${product.name}</strong>
            <p>${formatPrice(product.price)} × ${item.quantity}</p>
          </div>
          <div>
            <button data-quantity="${item.id}" data-change="-1">−</button>
            <button data-quantity="${item.id}" data-change="1">+</button>
            <button data-remove="${item.id}">O‘chirish</button>
          </div>
        </div>
      `;
    }).join("");

    totalElement.textContent = "Jami: " + formatPrice(total);
}

document.getElementById("cartBtn").addEventListener("click", () => {
    renderCart();
    openModal("cartModal");
});

// ======================================
// SEVIMLILAR
// ======================================

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    saveStorage("appleFavorites", favorites);
    renderProducts();
}

function renderFavorites() {
    const container = document.getElementById("favoriteItems");

    const items = products.filter(p => favorites.includes(p.id));

    container.innerHTML = items.length
        ? items.map(p => `
        <div class="favorite-item">
          <span>${p.name} — ${formatPrice(p.price)}</span>
          <button data-remove-favorite="${p.id}">O‘chirish</button>
        </div>
      `).join("")
        : '<p class="empty-message">Sevimli mahsulotlar yo‘q.</p>';
}

document.getElementById("favoriteBtn").addEventListener("click", () => {
    renderFavorites();
    openModal("favoriteModal");
});

// ======================================
// TAQQOSLASH
// ======================================

function toggleCompare(id) {
    if (compareList.includes(id)) {
        compareList = compareList.filter(item => item !== id);
    } else if (compareList.length < 4) {
        compareList.push(id);
    } else {
        alert("Bir vaqtning o‘zida faqat 4 ta mahsulotni taqqoslash mumkin.");
        return;
    }

    saveStorage("appleCompare", compareList);
    renderProducts();
}

function renderCompare() {
    const container = document.getElementById("compareItems");
    const items = products.filter(p => compareList.includes(p.id));

    container.innerHTML = items.length
        ? items.map(p => `
        <div class="compare-item">
          <div>
            <strong>${p.name}</strong>
            <p>${p.category} — ${formatPrice(p.price)}</p>
            <p>${p.description}</p>
          </div>
          <button data-remove-compare="${p.id}">O‘chirish</button>
        </div>
      `).join("")
        : '<p class="empty-message">Taqqoslash uchun mahsulot tanlang.</p>';
}

document.getElementById("compareBtn").addEventListener("click", () => {
    renderCompare();
    openModal("compareModal");
});

// ======================================
// MAHSULOT BATAFSIL
// ======================================

function showProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("productDetails").innerHTML = `
      <img src="${images[product.category]}" alt="${product.name}">
      <p class="product-category">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <h3>${formatPrice(product.price)}</h3>
      <button class="primary-btn" data-add="${product.id}">
        Savatchaga qo‘shish
      </button>
      <button class="text-btn" data-compare="${product.id}">
        Taqqoslashga qo‘shish
      </button>
    `;

    openModal("productModal");
}

// ======================================
// BARCHA TUGMALAR
// ======================================

document.addEventListener("click", event => {
    const target = event.target;

    if (target.dataset.add) {
        addToCart(Number(target.dataset.add));
    }

    if (target.dataset.details) {
        showProduct(Number(target.dataset.details));
    }

    if (target.dataset.favorite) {
        toggleFavorite(Number(target.dataset.favorite));
    }

    if (target.dataset.compare) {
        toggleCompare(Number(target.dataset.compare));
        renderCompare();
    }

    if (target.dataset.remove) {
        const id = Number(target.dataset.remove);
        cart = cart.filter(item => item.id !== id);
        updateCart();
        renderCart();
    }

    if (target.dataset.quantity) {
        const id = Number(target.dataset.quantity);
        const change = Number(target.dataset.change);
        const item = cart.find(p => p.id === id);

        if (item) {
            item.quantity += change;

            if (item.quantity <= 0) {
                cart = cart.filter(p => p.id !== id);
            }
        }

        updateCart();
        renderCart();
    }

    if (target.dataset.removeFavorite) {
        favorites = favorites.filter(id => id !== Number(target.dataset.removeFavorite));
        saveStorage("appleFavorites", favorites);
        renderFavorites();
        renderProducts();
    }

    if (target.dataset.removeCompare) {
        compareList = compareList.filter(id => id !== Number(target.dataset.removeCompare));
        saveStorage("appleCompare", compareList);
        renderCompare();
    }

    if (target.dataset.close) {
        closeModal(target.dataset.close);
    }
});

// ======================================
// MODAL
// ======================================

function openModal(id) {
    document.getElementById(id).classList.add("show");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}

document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("show");
        });
    }
});

// ======================================
// LOGIN VA REGISTER
// ======================================

document.getElementById("loginBtn").addEventListener("click", () => {
    isRegister = false;
    updateAuthForm();
    openModal("authModal");
});

function updateAuthForm() {
    document.getElementById("authTitle").textContent =
        isRegister ? "Ro‘yxatdan o‘tish" : "Hisobga kirish";

    document.getElementById("authName").hidden = !isRegister;

    document.getElementById("authName").required = isRegister;

    document.querySelector("#authForm button").textContent =
        isRegister ? "Ro‘yxatdan o‘tish" : "Kirish";

    document.getElementById("switchAuth").textContent =
        isRegister ? "Hisobim bor — kirish" : "Ro‘yxatdan o‘tish";
}

document.getElementById("switchAuth").addEventListener("click", () => {
    isRegister = !isRegister;
    updateAuthForm();
});

document.getElementById("authForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("authName").value.trim();
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;

    if (password.length < 6) {
        alert("Parol kamida 6 ta belgidan iborat bo‘lishi kerak.");
        return;
    }

    // Bu faqat frontend demo. Haqiqiy autentifikatsiya server orqali bajariladi.
    currentUser = {
        name: isRegister ? name : email.split("@")[0],
        email
    };

    saveStorage("appleUser", currentUser);

    document.getElementById("authForm").reset();
    closeModal("authModal");

    alert("Xush kelibsiz, " + currentUser.name + "!");
});

// ======================================
// BUYURTMA
// ======================================

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (!cart.length) {
        alert("Avval savatchaga mahsulot qo‘shing.");
        return;
    }

    closeModal("cartModal");

    if (currentUser) {
        document.getElementById("orderName").value = currentUser.name;
    }

    openModal("checkoutModal");
});

document.getElementById("checkoutForm").addEventListener("submit", event => {
    event.preventDefault();

    if (!cart.length) return;

    const name = document.getElementById("orderName").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const address = document.getElementById("orderAddress").value.trim();

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const order = {
        id: Date.now(),
        name,
        phone,
        address,
        items: cart.map(item => ({ ...item })),
        total,
        date: new Date().toLocaleString()
    };

    orders.push(order);
    saveStorage("appleOrders", orders);

    cart = [];
    updateCart();

    document.getElementById("checkoutForm").reset();
    closeModal("checkoutModal");

    alert("Buyurtmangiz qabul qilindi! Buyurtma raqami: " + order.id);
});

// ======================================
// BUYURTMA TARIXI
// ======================================

function showOrderHistory() {
    if (!orders.length) {
        alert("Hozircha buyurtmalar mavjud emas.");
        return;
    }

    const message = orders.map(order =>
        `Buyurtma #${order.id}\nSana: ${order.date}\nJami: ${formatPrice(order.total)}`
    ).join("\n\n");

    alert(message);
}

// ======================================
// CONTACT FORM
// ======================================

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        alert("Barcha maydonlarni to‘ldiring.");
        return;
    }

    alert("Rahmat, " + name + "! Xabaringiz demo rejimida qabul qilindi.");
    event.target.reset();
});

// ======================================
// DARK / LIGHT MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("appleTheme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("appleTheme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
});

// ======================================
// MOBIL MENU
// ======================================

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// ======================================
// TIL ALMASHTIRISH
// ======================================

const translations = {
    uz: {
        home: "Bosh sahifa",
        products: "Mahsulotlar",
        about: "Biz haqimizda",
        contact: "Aloqa"
    },
    en: {
        home: "Home",
        products: "Products",
        about: "About us",
        contact: "Contact"
    },
    ru: {
        home: "Главная",
        products: "Товары",
        about: "О нас",
        contact: "Контакты"
    }
};

function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("appleLanguage", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[language][key] || key;
    });
}

const languageSelect = document.getElementById("languageSelect");
languageSelect.value = currentLanguage;

languageSelect.addEventListener("change", event => {
    changeLanguage(event.target.value);
});

// ======================================
// SAYTNI ISHGA TUSHIRISH
// ======================================

updateCart();
renderProducts();
changeLanguage(currentLanguage);

console.log("APPLE STORE ishga tushdi!");
console.log("Mahsulotlar soni:", products.length);


const images = {
    iPhone: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-cosmicorange-202509?wid=1000&hei=1000&fmt=png-alpha",
  
    Mac: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-m4-sky-blue-gallery1-202503?wid=1000&hei=1000&fmt=png-alpha",
  
    iPad: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-select-202405-11inch-space-black-wifi?wid=1000&hei=1000&fmt=png-alpha",
  
    Watch: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-ultra2-202409?wid=1000&hei=1000&fmt=png-alpha",
  
    AirPods: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=1000&hei=1000&fmt=png-alpha",
  
    Accessories: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK73?wid=1000&hei=1000&fmt=png-alpha"
  };
  