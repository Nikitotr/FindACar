
/* js код для изменения цвета после нажатия на выбраный елемент таб */
    const tabItem = document.querySelectorAll('.tabs__btn-item');
    const tabContent = document.querySelectorAll('.tabs__content-item');

    tabItem.forEach(function(element) {
        element.addEventListener('click', open);
    })

    function open(evt) {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        tabItem.forEach(function(item)  {
            item.classList.remove('tabs__btn-item--active');
        });
        tabTarget.classList.add('tabs__btn-item--active');

        tabContent.forEach(function(item) {
            item.classList.remove('tabs__content-item--active');
        });
        
        document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
    }

/* js код для изменения планки в меню при адаптации */
    const menuBtn = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu__list--active');
    });

    /* js код для свайпера https://codesandbox.io/p/sandbox/v43ce0?file=%2Findex.html%3A74%2C20 */
    const swiper = new Swiper(".swiper", {
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });