window.onload = function () {
    document.body.classList.remove('_lock');
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('_loaded');

    let menuLinks = document.querySelectorAll('.nav-header__link');
    let wrapper = document.querySelector('.wrapper');
    let headerButton = document.querySelector('.header__button');
    let headerButtonBack = document.querySelector('.header__button-back');
    let headerBurger = document.querySelector('.header__burger');
    let headerTopLeft = document.querySelector('.header__top-left');
    let calm = document.querySelector('.calm');
    let connection = document.querySelector('.connection');
    let footer = document.querySelector('.footer');
    let clientsSlider = document.querySelector('.clients__slider');
    let menuBody = document.querySelector('.menu-header');
    let headerBack = document.querySelector('.header__back');
    let checkbox = document.querySelector('.form-connection__checkbox');
    let submitButton = document.querySelector('.form-connection__submit');
    let form = document.querySelector('.form-connection');
    let submitMessage = document.querySelector('.submit-message');
    let formPhone = document.querySelector('._input-phone');
    const projectList = document.querySelector('.project-page__filters');
    
    if(formPhone) {
        let maskOptions = {
            mask: '+7 (000)000-00-00',
            lazy: true,
        } 
        let patternMask  = new IMask(formPhone, maskOptions);
        formPhone.addEventListener('focus', function() {
            patternMask.updateOptions({lazy: false});
        })
        formPhone.addEventListener('blur', function() {
            patternMask.updateOptions({lazy: true});
        })
    }

    var lazyLoadInstance = new LazyLoad({
    });

    smoothScroll('.header__burger', '.menu-header');
    burger('.header__burger', '.menu-header');
    if(projectList){
        filter('.project-page__filters');
    }

    if(calm) {
        window.onscroll = function (e) {
            if(window.scrollY >= calm.offsetTop) {
                headerBurger.classList.add('_white');
                headerBack.classList.add('_active');
            } else {
                headerBurger.classList.remove('_white');
                headerBack.classList.remove('_active');
            }
            if(window.scrollY + window.innerHeight > calm.offsetTop + 100 && !(window.scrollY + window.innerHeight > connection.offsetTop)) {
                menuLinks.forEach(menuLink => {
                    menuLink.classList.add('_white');
                });
            } else if (window.scrollY + window.innerHeight > footer.offsetTop) {
                menuLinks.forEach(menuLink => {
                    menuLink.classList.add('_white');
                });
            } else {
                menuLinks.forEach(menuLink => {
                    menuLink.classList.remove('_white');
                });
            }
            if(window.scrollY + window.innerHeight > connection.offsetTop && !(window.scrollY + window.innerHeight > footer.offsetTop)) {
                headerBack.classList.add('_black');
            } else {
                headerBack.classList.remove('_black');
            }
    
            menuHighlight()
        };
        
        menuHighlight()
        inputsPlaceholder()
    }
    
    if(checkbox){
        checkbox.addEventListener('click', function() {
            checkboxBody = checkbox.querySelector('input');
            if(checkboxBody.checked){
                submitButton.removeAttribute('disabled');
            }else{
                submitButton.setAttribute('disabled', true);
            }
        })
    }
    if(form){
        form.addEventListener('submit', formSend);
    }

    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        form.classList.add('_sending');
        if (response.ok) {
            let result = await response.json();
            form.classList.add('_hide');
            submitMessage.classList.add('_show');
            form.classList.remove('_sending');
        }
    }
   
    if(clientsSlider) {
    const swiper = new Swiper(clientsSlider, {
        // Default parameters
        speed: 800,
        navigation: {
            nextEl: '.clients__arrow-next',
            prevEl: '.clients__arrow-prev',
        },
        slidesPerView: 3,
        spaceBetween: 15,
        scrollbar: {
            el: '.clients__slider-scrollbar',
            draggable: true,
            dragSize: 10,
        },
        breakpoints: {
            // when window width is >= 640px
            992: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            1452: {
                spaceBetween: 134,
                slidesPerView: 4,
            }
        },
        
    });
    }

}
    