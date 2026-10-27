// База данных заведений и товаров Токмока с точными тематическими изображениями
const database = {
    food: [
        // Национальная кухня
        { id: 1, name: "Плов Маргиланский (Порция)", place: "Чайхана Нават Токмок", price: 290, category: "national", desc: "Ароматный плов с отборной бараниной и желтой морковью", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80" },
        { id: 2, name: "Лагман Уйгурский Тянутый", place: "Кафе Байтерек", price: 260, category: "national", desc: "Свежая ручная лапша, сочное мясо и овощи", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
        { id: 3, name: "Самса с мясом (3 шт)", place: "Самса Береке", price: 180, category: "national", desc: "Тандырная слоеная самса с рубленым мясом", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" },
        { id: 7, name: "Манты с мясом и тыквой (5 шт)", place: "Чайхана Нават Токмок", price: 250, category: "national", desc: "Традиционные сочные манты на пару", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80" },
        { id: 9, name: "Бешбармак по-Чуйски", place: "Чайхана Нават Токмок", price: 380, category: "national", desc: "Тонкая лапша, сочная конина и ароматный туздук", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
        { id: 10, name: "Шорпо из Баранины", place: "Кафе Байтерек", price: 240, category: "national", desc: "Наваристый бульон с крупным кусочком мяса и картофелем", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" },
        { id: 11, name: "Чучвара в бульоне", place: "Кафе Азия Токмок", price: 220, category: "national", desc: "Мини-пельмени ручной лепки с зеленью", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" },
        { id: 12, name: "Куурдак из Говядины", place: "Чайхана Нават Токмок", price: 340, category: "national", desc: "Обжаренное мясо с луком и золотистым картофелем", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80" },
        { id: 13, name: "Казы-Карта (Нарезка)", place: "Кафе Байтерек", price: 420, category: "national", desc: "Традиционные конские деликатесы", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80" },
        { id: 14, name: "Гуру Лагман", place: "Кафе Азия Токмок", price: 270, category: "national", desc: "Жареная лапша с мясо-овощной сочной заправкой", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80" },

        // Шашлыки и BBQ
        { id: 4, name: "Шашлык из Баранины", place: "Кафе Азия Токмок", price: 360, category: "bbq", desc: "Сочный шашлык на углях с маринованным луком", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
        { id: 8, name: "Люля-Кебаб куриный", place: "Кафе Байтерек", price: 280, category: "bbq", desc: "Нежный кебаб с зеленью и фирменным соусом", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80" },
        { id: 15, name: "Шашлык из Говядины", place: "Шашлычная №1", price: 380, category: "bbq", desc: "Отборная вырезка, приготовленная на мангале", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
        { id: 16, name: "Шашлык Куриный (Крылышки)", place: "Шашлычная №1", price: 290, category: "bbq", desc: "Хрустящие крылышки с дымком", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
        { id: 17, name: "Антрекот из Баранины", place: "Кафе Азия Токмок", price: 420, category: "bbq", desc: "Сочное мясо на ребрышках со специями", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80" },
        { id: 18, name: "Люля-Кебаб из Говядины", place: "Кафе Байтерек", price: 310, category: "bbq", desc: "Рубленый фарш со специями на шампуре", image: "https://images.unsplash.com/photo-1610057099443-f63a14ed7035?auto=format&fit=crop&w=600&q=80" },
        { id: 19, name: "Овощи на мангале", place: "Шашлычная №1", price: 200, category: "bbq", desc: "Запеченные перец, баклажан и томаты", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=600&q=80" },

        // Фастфуд
        { id: 5, name: "Комбо Сет Бургер + Фри + Cola", place: "Токмок Burger", price: 330, category: "fastfood", desc: "Сочный говяжий бургер, хрустящий картофель и напиток", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
        { id: 6, name: "Пицца Пепперони (30 см)", place: "Pizza City Tokmok", price: 550, category: "fastfood", desc: "Классическая пицца с сыром моцарелла и пикантной колбасой", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80" },
        { id: 21, name: "Шаурма Куриная XL", place: "Street Food Tokmok", price: 210, category: "fastfood", desc: "Сочное куриное филе, свежие овощи и фирменный соус", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80" },
        { id: 22, name: "Чизбургер Двойной", place: "Токмок Burger", price: 260, category: "fastfood", desc: "Две котлеты из говядины и двойной сыр Чеддер", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" },
        { id: 23, name: "Пицца 4 Сыра", place: "Pizza City Tokmok", price: 590, category: "fastfood", desc: "Моцарелла, пармезан, дор блю и чеддер", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
        { id: 24, name: "Картофель Фри Большая", place: "Токмок Burger", price: 120, category: "fastfood", desc: "Золотистые и хрустящие ломтики картофеля", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
        { id: 25, name: "Наггетсы куриные (8 шт)", place: "Street Food Tokmok", price: 170, category: "fastfood", desc: "Хрустящие кусочки сочного куриного филе", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
        { id: 28, name: "Пицца Маргарита", place: "Pizza City Tokmok", price: 480, category: "fastfood", desc: "Томатный соус, сыр моцарелла и свежий базилик", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80" },
        { id: 29, name: "Сет Роллы Филадельфия (8 шт)", place: "Sushi Tokmok", price: 450, category: "fastfood", desc: "Лосось, сливочный сыр, огурец и рис", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80" },
        { id: 30, name: "Торт «Медовик» (Кусочек)", place: "Кондитерская Сладкоежка", price: 140, category: "fastfood", desc: "Нежные медовые коржи со сметанным кремом", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" }
    ],

    market: [
        { id: 101, name: "Молоко «Веселый Молочник» 3.2% 1л", place: "Маркет Глобус", price: 98, category: "dairy", desc: "Свежее пастеризованное молоко", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80" },
        { id: 102, name: "Тандырная Лепешка (2 шт)", place: "Пекарня Токмок", price: 45, category: "dairy", desc: "Горячий свежий хлеб из тандыра", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
        { id: 103, name: "Масло Сливочное 82.5% 200г", place: "Супермаркет Народный", price: 185, category: "dairy", desc: "Натуральное сливочное масло", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80" },
        { id: 109, name: "Сметана «Домик в деревне» 20% 300г", place: "Маркет Глобус", price: 125, category: "dairy", desc: "Густая традиционная сметана", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80" },
        { id: 110, name: "Творог Домашний 9% 400г", place: "Центральный Рынок Токмок", price: 160, category: "dairy", desc: "Свежий натуральный творог", image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80" },
        { id: 111, name: "Сыр Голландский 1 кг", place: "Супермаркет Народный", price: 680, category: "dairy", desc: "Твердый сыр с мягким сливочным вкусом", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80" },
        { id: 113, name: "Хлеб Бородинский", place: "Пекарня Токмок", price: 35, category: "dairy", desc: "Ароматный ржаной хлеб с кориандром", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80" },
        { id: 104, name: "Сок Натуральный «Я» 1L", place: "Маркет Глобус", price: 140, category: "drinks", desc: "Апельсиновый сок с мякотью", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
        { id: 105, name: "Минеральная вода «Легенда» 1.5L", place: "Маркет Глобус", price: 38, category: "drinks", desc: "Природная бутилированная вода", image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=600&q=80" },
        { id: 116, name: "Coca-Cola 1.5L", place: "Супермаркет Народный", price: 95, category: "drinks", desc: "Классический газированный напиток", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
        { id: 118, name: "Холодный чай Lipton 1.5L", place: "Маркет Глобус", price: 110, category: "drinks", desc: "Освежающий чай со вкусом лимона", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },
        { id: 106, name: "Чай Черный Пиала Gold 100 пак.", place: "Супермаркет Народный", price: 240, category: "grocery", desc: "Гранулированный крепкий чай", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
        { id: 107, name: "Рис Узгенский Девзира 1 кг", place: "Центральный Рынок Токмок", price: 220, category: "grocery", desc: "Отборный рис для настоящего плова", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" },
        { id: 124, name: "Макароны Спагетти 400г", place: "Маркет Глобус", price: 75, category: "grocery", desc: "Из твердых сортов пшеницы", image: "https://images.unsplash.com/photo-1621996346565-e3def6164299?auto=format&fit=crop&w=600&q=80" },
        { id: 125, name: "Подсолнечное масло 1л", place: "Супермаркет Народный", price: 155, category: "grocery", desc: "Рафинированное масло", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
        { id: 128, name: "Шоколад Alpen Gold 85г", place: "Маркет Глобус", price: 85, category: "grocery", desc: "Молочный шоколад с фундуком", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80" },
        { id: 130, name: "Кофе Nescafe Gold 95г", place: "Супермаркет Народный", price: 320, category: "grocery", desc: "Растворимый кофе в банке", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" }
    ],

    pharma: [
        { id: 201, name: "Парацетамол 500 мг (10 таб)", place: "Аптека 36.6 Токмок", price: 25, category: "all", desc: "Таблетки от головной боли и температуры", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
        { id: 202, name: "Терафлю Лимон (5 пакетиков)", place: "Аптека Неман", price: 350, category: "all", desc: "Порошок от гриппа и простуды", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80" },
        { id: 203, name: "Витамин C 1000 мг шипучий", place: "Аптека 36.6 Токмок", price: 220, category: "all", desc: "Растворимые витамины для иммунитета", image: "https://images.unsplash.com/photo-1550572017-edf792890003?auto=format&fit=crop&w=600&q=80" },
        { id: 204, name: "Градусник Электронный", place: "Аптека Неман", price: 310, category: "all", desc: "Цифровой измеритель температуры", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" },
        { id: 205, name: "Спрей для носа «Ксилен»", place: "Аптека 36.6 Токмок", price: 110, category: "all", desc: "Капли для снятия заложенности носа", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80" },
        { id: 211, name: "Пластырь бактерицидный", place: "Аптека 36.6 Токмок", price: 50, category: "all", desc: "Защитные пластыри для ран", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
        { id: 218, name: "Тонометр автоматический", place: "Аптека Неман", price: 2100, category: "all", desc: "Медицинский прибор давления", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" },
        { id: 220, name: "Антисептик для рук 100мл", place: "Аптека Неман", price: 80, category: "all", desc: "Гель-дезинфектор для гигиены", image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=600&q=80" }
    ]
};

// Состояние приложения
let cart = [];
let currentFilters = { food: { text: '', tag: 'all' }, market: { text: '', tag: 'all' }, pharma: { text: '' } };

document.addEventListener('DOMContentLoaded', () => {
    renderAllGrids();
    setupTheme();
});

// Переключение страниц
function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('navLinks').classList.remove('mobile-open');
}

function renderAllGrids() {
    renderGrid('foodGrid', filterData('food'));
    renderGrid('marketGrid', filterData('market'));
    renderGrid('pharmaGrid', filterData('pharma'));
}

function filterData(type) {
    const filter = currentFilters[type];
    return database[type].filter(item => {
        const matchesText = item.name.toLowerCase().includes((filter.text || '').toLowerCase()) ||
            item.place.toLowerCase().includes((filter.text || '').toLowerCase());
        const matchesTag = !filter.tag || filter.tag === 'all' || item.category === filter.tag;
        return matchesText && matchesTag;
    });
}

// Рендер КЛИКАБЕЛЬНЫХ карточек (LIST)
function renderGrid(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Товары не найдены</p>';
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="product-card" onclick="openDetail(${item.id})" style="cursor: pointer;">
            <div>
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 12px; margin-bottom: 12px;">
                <span class="place-tag"><i class="fa-solid fa-store"></i> ${item.place}</span>
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            </div>
            <div>
                <div class="price-row">
                    <span class="price">${item.price} сом</span>
                </div>
                <!-- event.stopPropagation() не дает открыться модалке при клике именно на кнопку Добавить -->
                <button class="btn btn-primary full-width" onclick="event.stopPropagation(); addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                    <i class="fa-solid fa-plus"></i> В корзину
                </button>
            </div>
        </div>
    `).join('');
}

// Открытие Модального окна DETAIL при клике на карточку
function openDetail(id) {
    let item = null;
    for (let cat in database) {
        const found = database[cat].find(i => i.id === id);
        if (found) {
            item = found;
            break;
        }
    }

    if (!item) return;

    document.getElementById('detailTitle').textContent = item.name;
    document.getElementById('detailImage').src = item.image;
    document.getElementById('detailPlace').textContent = `📍 Заведение / Магазин: ${item.place}`;
    document.getElementById('detailDesc').textContent = item.desc;
    document.getElementById('detailPrice').textContent = `${item.price} сом`;

    const addBtn = document.getElementById('detailAddToCartBtn');
    addBtn.onclick = () => {
        addToCart(item.id, item.name, item.price);
        closeDetailModal();
    };

    document.getElementById('detailModal').classList.add('open');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('open');
}

// Фильтры
function filterCategory(type) {
    const input = document.getElementById(`${type}Search`);
    if (input) {
        currentFilters[type].text = input.value;
        renderGrid(`${type}Grid`, filterData(type));
    }
}

function filterByTag(type, tag, btn) {
    currentFilters[type].tag = tag;
    const parentContainer = btn.parentElement;
    parentContainer.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(`${type}Grid`, filterData(type));
}

// Корзина
function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.count++;
    } else {
        cart.push({ id, name, price, count: 1 });
    }
    updateCartUI();
}

function updateCartCount(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.count += delta;
    if (item.count <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totalCount = cart.reduce((acc, i) => acc + i.count, 0);
    const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.count), 0);

    cartCount.textContent = totalCount;
    cartTotalPrice.textContent = `${totalPrice} сом`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg" style="text-align: center; color: var(--text-muted); padding: 20px 0;">Ваша корзина пуста</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">${item.price} сом</div>
                </div>
                <div class="cart-controls">
                    <button onclick="updateCartCount(${item.id}, -1)">-</button>
                    <span><strong>${item.count}</strong></span>
                    <button onclick="updateCartCount(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
}

function toggleCartModal() {
    document.getElementById('cartModal').classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста. Добавьте товары из меню!');
        return;
    }
    alert('Ваш заказ успешно принят!');
    cart = [];
    updateCartUI();
    toggleCartModal();
    navigateTo('tracking');
}

function calculatePrice() {
    const zonePrice = parseInt(document.getElementById('calcZone').value);
    document.getElementById('calcPrice').textContent = `${zonePrice} сом`;
}

function handleExpressSubmit(e) {
    e.preventDefault();
    alert('Курьер найден!');
    navigateTo('tracking');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-open');
}

function setupTheme() {
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}