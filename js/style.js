/* Burger */
const iconMenu = document.querySelector('.burger');
if (iconMenu){
    const menuBody = document.querySelector('.header__nav');
    const burgerBody = document.querySelector('body');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
    });
}

/* Show Scroll */
const anchors = document.querySelectorAll('.nav__link[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    });
}

/* Tabs */
const tabsBtn = document.querySelectorAll('.work__filter');
const tabsItems = document.querySelectorAll('.work__item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
               });

               tabsItems.forEach(function(item){
                item.classList.remove('active');
               });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
        }
    });
});