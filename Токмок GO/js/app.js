// Расширенная базовая база данных заведений и товаров Токмока
const database = {
    food: [
        { id: 1, name: "Плов Маргиланский (Порция)", place: "Чайхана Нават Токмок", price: 290, category: "national", desc: "Ароматный плов с отборной бараниной и желтой морковью" },
        { id: 2, name: "Лагман Уйгурский Тянутый", place: "Кафе Байтерек", price: 260, category: "national", desc: "Свежая ручная лапша, сочное мясо и овощи" },
        { id: 3, name: "Самса с мясом (3 шт)", place: "Самса Береке", price: 180, category: "national", desc: "Тандырная слоеная самса с рубленым мясом" },
        { id: 4, name: "Шашлык из Баранины", place: "Кафе Азия Токмок", price: 360, category: "bbq", desc: "Сочный шашлык на углях с маринованным луком" },
        { id: 5, name: "Комбо Сет Бургер + Фри + Cola", place: "Токмок Burger", price: 330, category: "fastfood", desc: "Сочный говяжий бургер, хрустящий картофель и напиток" },
        { id: 6, name: "Пицца Пепперони (30 см)", place: "Pizza City Tokmok", price: 550, category: "fastfood", desc: "Классическая пицца с сыром моцарелла и пикантной колбасой" },
        { id: 7, name: "Манты с мясом и тыквой (5 шт)", place: "Чайхана Нават Токмок", price: 250, category: "national", desc: "Традиционные сочные манты на пару" },
        { id: 8, name: "Люля-Кебаб куриный", place: "Кафе Байтерек", price: 280, category: "bbq", desc: "Нежный кебаб с зеленью и фирменным соусом" }
    ],
    market: [
        { id: 101, name: "Молоко «Веселый Молочник» 3.2% 1л", place: "Маркет Глобус", price: 98, category: "dairy", desc: "Свежее пастеризованное молоко" },
        { id: 102, name: "Тандырная Лепешка (2 шт)", place: "Пекарня Токмок", price: 45, category: "dairy", desc: "Горячий свежий хлеб из тандыра" },
        { id: 103, name: "Масло Сливочное 82.5% 200г", place: "Супермаркет Народный", price: 185, category: "dairy", desc: "Натуральное сливочное масло" },
        { id: 104, name: "Сок Натуральный «Я» 1L", place: "Маркет Глобус", price: 140, category: "drinks", desc: "Апельсиновый / Яблочный в ассортименте" },
        { id: 105, name: "Минеральная вода «Легенда» 1.5L", place: "Маркет Глобус", price: 38, category: "drinks", desc: "Природная бутилированная вода" },
        { id: 106, name: "Чай Черный Пиала Gold 100 пакетиков", place: "Супермаркет Народный", price: 240, category: "grocery", desc: "Гранулированный крепкий чай" },
        { id: 107, name: "Рис Узгенский Девзира 1 кг", place: "Центральный Рынок Токмок", price: 220, category: "grocery", desc: "Отборный рис для настоящего плова" },
        { id: 108, name: "Сахар-песок 1 кг", place: "Маркет Глобус", price: 85, category: "grocery", desc: "Белый кристаллический сахар" }
    ],
    pharma: [
        { id: 201, name: "Парацетамол 500 мг (10 таб)", place: "Аптека 36.6 Токмок", price: 25, category: "all", desc: "Обезболивающее и жаропонижающее" },
        { id: 202, name: "Терафлю Лимон (5 пакетиков)", place: "Аптека Неман", price: 350, category: "all", desc: "Горячий напиток от симптомов простуды" },
        { id: 203, name: "Витамин C 1000 мг шипучий", place: "Аптека 36.6 Токмок", price: 220, category: "all", desc: "Для укрепления иммунитета" },
        { id: 204, name: "Градусник Электронный", place: "Аптека Неман", price: 310, category: "all", desc: "Быстрое и безопасное измерение температуры" },
        { id: 205, name: "Спрей для носа «Ксилен»", place: "Аптека 36.6 Токмок", price: 110, category: "all", desc: "Быстро снимает заложенность носа" }
    ]
};

// Состояние приложения
let cart = [];
let currentFilters = { food: { text: '', tag: 'all' }, market: { text: '', tag: 'all' }, pharma: { text: '' } };

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderAllGrids();
    setupTheme();
});

// Переключение страниц SPA
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

// Отрисовка всех товаров
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

function renderGrid(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Товары не найдены</p>';
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="product-card">
            <div>
                <span class="place-tag"><i class="fa-solid fa-store"></i> ${item.place}</span>
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            </div>
            <div>
                <div class="price-row">
                    <span class="price">${item.price} сом</span>
                </div>
                <button class="btn btn-primary full-width" onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                    <i class="fa-solid fa-plus"></i> В корзину
                </button>
            </div>
        </div>
    `).join('');
}

// Фильтрация по поисковой строке
function filterCategory(type) {
    const input = document.getElementById(`${type}Search`);
    if (input) {
        currentFilters[type].text = input.value;
        renderGrid(`${type}Grid`, filterData(type));
    }
}

// Фильтрация по тегам
function filterByTag(type, tag, btn) {
    currentFilters[type].tag = tag;
    const parentContainer = btn.parentElement;
    parentContainer.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(`${type}Grid`, filterData(type));
}

// Управление Корзиной
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
        alert('Корзина пуста. Добавьте товары из меню или супермаркета!');
        return;
    }
    alert('Ваш заказ успешно принят! Курьер уже направляется в заведение в Токмоке.');
    cart = [];
    updateCartUI();
    toggleCartModal();
    navigateTo('tracking');
}

// Быстрый калькулятор цен
function calculatePrice() {
    const zonePrice = parseInt(document.getElementById('calcZone').value);
    document.getElementById('calcPrice').textContent = `${zonePrice} сом`;
}

// Форма экспресс-доставки
function handleExpressSubmit(e) {
    e.preventDefault();
    alert('Курьер найден! Он свяжется с вами в течение 2 минут.');
    navigateTo('tracking');
}

// Мобильное меню
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-open');
}

// Переключатель тем
function setupTheme() {
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}