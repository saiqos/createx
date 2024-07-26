$(document).ready(function(){
    $('.sales').slick({
        autoplay: true,
        autoplaySpeed: 3000
    });
});

$(document).ready(function(){
    $('.collection').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
});

$(document).ready(function(){
    $('.arrivals__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false
    });
});

$(document).ready(function(){
    $('.trending__slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });
});
function openMenu (id) {
    document.getElementById(id).addEventListener('click', function() {
        document.querySelector('.megamenu').classList.toggle('hidden');
    });
}

openMenu('megamenu__open-link')
openMenu('megamenu__open-link-2')
openMenu('megamenu__open-link-3')
openMenu('megamenu__open-link-4')
openMenu('megamenu__open-link-5')


// filters

$(document).ready(function(){
    $('.card-header').click(function(){
        if($(this).next('.card-body').hasClass('active')){
            $(this).next('.card-body').removeClass('active').slideUp()
            $(this).children('span').removeClass('fa-minus').addClass('fa-plus')
        }else{
        $('.card .card-body').removeClass('active').slideUp()
        $('.card .card-header span').removeClass('fa-minus').addClass('fa-plus')
        $(this).next('.card-body').addClass('active').slideDown()
        $(this).children('span').removeClass('fa-plus').addClass('fa-minus')
    }
    })
})
