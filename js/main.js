$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    })

    $(document).ready(function () {
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
const tabs = document.getElementsByClassName('tab');  
const sections = document.getElementsByClassName('section'); 

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;

  [...tabs].forEach((tab, i) => {
    tab.classList.remove('active');
    sections[i].classList.remove('active');
  })

  tabs[tabId - 1].classList.add('active');
  sections[tabId - 1].classList.add('active');
}
})
let forms = document.querySelector('.forms');  
function btn() {
    forms.classList.toggle('active')
    console.log(forms)
}
