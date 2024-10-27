const navItems = document.querySelectorAll('.nav-tabs li');
const navWrapper = document.querySelector('.nav-wrapper');

function highlightActiveTab() {
    const wrapperRect = navWrapper.getBoundingClientRect();
    let closestIndex = 0;
    let closestDistance = Infinity;

    navItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.left - wrapperRect.left);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });

    navItems.forEach(item => item.classList.remove('active'));
    navItems[closestIndex].classList.add('active');
}

// Отслеживаем событие прокрутки
navWrapper.addEventListener('scroll', highlightActiveTab);

// Инициализация - выделяем первый элемент при загрузке
highlightActiveTab();

// Получаем элементы модального окна
var modal = document.querySelector('.modal');
var span = document.getElementsByClassName("close-button")[0];

// Переменные для отслеживания касаний
let startY = 0;
let endY = 0;

// Добавляем обработчики событий для линии свайпа
const swipeIndicator = document.querySelector('.swipe-indicator');

swipeIndicator.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY; // Получаем начальную позицию касания
});

swipeIndicator.addEventListener('touchend', function(event) {
    endY = event.changedTouches[0].clientY; // Получаем конечную позицию касания
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = endY - startY; // Расстояние свайпа

    // Проверяем, был ли свайп вниз
    if (swipeDistance > 50) { // Измените значение 50, если нужно
        closeModal(); // Закрываем модальное окно
    }
}

function openModal(info) {
    document.querySelector('.modal-content h2').innerText = info; // Добавляем информацию
    modal.classList.add('show'); // Показываем модальное окно
}

function closeModal() {
    modal.classList.remove('show'); // Скрываем модальное окно
}

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal(); // Скрываем модальное окно
    }
}

// Добавляем обработчик события для каждой карточки
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var info = card.querySelector('.name').innerText + " - " + card.querySelector('.price').innerText; // Получаем информацию о товаре
        openModal(info); // Открываем модальное окно
    });
});

// Остальной код...


function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Навигационные ссылки
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('#burgers-section');
});

link2.addEventListener('click', () => {
    scrollToElement('#pizza-section');
});

link3.addEventListener('click', () => {
    scrollToElement('#sushi-section');
});

function search() {
    // Сбросить предыдущее выделение
    const contentDiv = document.getElementById('content');
    const originalContent = contentDiv.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    contentDiv.innerHTML = originalContent;

    const input = document.getElementById('searchBox').value.trim().toLowerCase();
    if (input === '') return;

    const regex = new RegExp(`(${input})`, 'gi');
    const highlighted = contentDiv.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    contentDiv.innerHTML = highlighted;
}

// Получаем навигационное меню
const nav = document.getElementById("nav");
const navOffset = nav.offsetTop; // Позиция навигации

window.onscroll = function() {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add("fixed"); // Добавляем класс fixed при прокрутке
    } else {
        nav.classList.remove("fixed"); // Убираем класс, если скролл меньше
    }
};

// Получаем элементы модального окна
var modal = document.querySelector('.modal');
var closeButton = document.getElementsByClassName("close-button")[0];

// Функция для закрытия модального окна
function closeModal() {
    modal.classList.remove('show'); // Скрываем модальное окно
}

// Закрытие модального окна при нажатии на крестик
closeButton.onclick = closeModal;

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal(); // Скрываем модальное окно
    }
}

// Открытие и закрытие бокового меню
function toggleSideMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("show-side-menu");
}
