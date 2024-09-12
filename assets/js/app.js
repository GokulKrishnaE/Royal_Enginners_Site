$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })
  $('[data-bs-toggle="tooltip"]').tooltip()


  $('.hero-slider').slick({
    dots: false,
    autoPlay:true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: "<button class='slick-arrow-button left-arrow'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button class='slick-arrow-button right-arrow'><i class='fas fa-chevron-right'></i></button>",   
  });

  $('.match-height').matchHeight()

  $('.navbar-toggler').click(function(){
    $('body').toggleClass('overflow-hidden')
  })

})


$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
  $('.card-content .card-top').matchHeight()
  $('[data-bs-toggle="tooltip"]').tooltip()

  $('.navbar-toggler').click(function(){
    $('.mobileMenuOverlay').toggleClass('active')
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       $('header').addClass('header-sticky');
       $('.scrollDownAnimate').removeClass('visible')
    } else {
       $('header').removeClass('header-sticky');
       $('.scrollDownAnimate').addClass('visible')
    }
    if ($(this).scrollTop() > 600) {
       $('.fixedWhatsapp,.footerFixedMenu').addClass('active');
    } else {
      $('.fixedWhatsapp,.footerFixedMenu').removeClass('active');
    }
 });

 $('#scrollToTop').click(function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600); // 600ms for smooth scroll
  return false;
});

$('.card-title').matchHeight()

$('#clients-slider').slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
          ]
});


const sections = document.querySelectorAll('.section');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const sectionTitle = entry.target.querySelector('.section-title');
      if (entry.isIntersecting) {
        sectionTitle.classList.add('visible');
      } else {
        sectionTitle.classList.remove('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  navigation()
    
})

function navigation(){
  const currentUrl= window.location.pathname.split('/').pop()
  $('.navbar-nav li a').removeClass('active')
  $('.navbar-nav li').each(function(){
    if($(this).hasClass('dropdown')){
      $(this).find('ul li').each(function(){
        if($(this).find('a').attr('href') === currentUrl){
          $(this).parents('li').find('.nav-link').addClass('active')
        }
      })
    }
    if($(this).find('.nav-link').attr('href') === currentUrl){
      $(this).find('.nav-link').addClass('active')
    }
  })


  $('.desktopHamburger .nav-link').click(function(){
    $('.deskHamburgerOverlay,.deskHamburgerPopup').addClass('visible')
  })
  $('#deskHamburgerClose').click(function(){
    $('.deskHamburgerOverlay,.deskHamburgerPopup').removeClass('visible')
  })
}