$(document).ready(function() {

  var win = $(window),
  body = $('body').hasClass('home'),
  navigation = $('.navigation'),
  slider = $('.featured-slider-home'),
  slider_content = $('.featured-slider-home__content'),
  limit = 400;

  var bodyPadding = function() {
    $('body').css({ 'padding-top' : navigation.outerHeight()}); 
  }

  var selectPicker = function() {
    $('.cart__resume-table__product-quantity.selectpicker').selectpicker({
      style: 'btn-link item_refresh',
      size: 5
    });
  };
 
  var isMobile = function() {
    return ( win.width() < 768 ? true : false );
  }

  var changeColspan = function() {
    if(win.width() < 421) {
      $('.search-page__table--thead-th').attr('colspan', 1);
    } else {
      $('.search-page__table--thead-th').attr('colspan', 2);
    }
  }

  var isSmallMobile = function() {
    return ( win.width() < 320 ? true : false );
  }

  var setHeightElement = function(boxArray, tallestElement) {
    for(var i = 0; i < boxArray.length; i++){
      $(boxArray[i]).css({'height' : tallestElement +'px' });
    }
    boxArray = [];
  }

  var getSidebarWidth = function() {
    return $('.sidebar__sidebar-container').width();
  }

  var setSidebarWidth = function() {
    $('.sidebar__sidebar').css({'width': getSidebarWidth() });
  }

  setSidebarWidth();
  var alignHeights = function (){
    if(!isSmallMobile()) {
      var tallestElement = 0,
      currentElementHeight = 0,
      boxArray = [],
      container = $('.symmetrical-container'),
      boxArray = container.children('.symmetrical');
      for(var i = 0; i < boxArray.length; i++){
        $(boxArray[i]).css({'height' : 'auto'});
        currentElementHeight = $(boxArray[i]).outerHeight();
        if(currentElementHeight > tallestElement){
          tallestElement = currentElementHeight;
        }
      }
      setTimeout(setHeightElement(boxArray, tallestElement), 200);
    } else {
      $('.symmetrical').css({'height' : 'auto'});
    }
  }

  var updateIcon = function() {
    $(".footer__menu").each(function() {
      var status = $(this).hasClass( "footer__menu--close");
      if(status) {
        $(this).find('.mdi').removeClass('mdi-chevron-up');
        $(this).find('.mdi').addClass('mdi-chevron-down');
      } else {
        $(this).find('.mdi').removeClass('mdi-chevron-down');
        $(this).find('.mdi').addClass('mdi-chevron-up');
      }
    });
  };

  var updateMenu = function(element, status, menu){
    $(element).parents('footer__menu');
    $('.footer').find('.footer__menu').addClass('footer__menu--close');
    if(status) {
      $(menu).removeClass('footer__menu--close').fadeIn();
    } else {
      $(menu).addClass('footer__menu--close').fadeIn();
    }
    updateIcon();
  };
  $('.footer__section-icon > .mdi').click(function(event) {
    event.preventDefault();
    var element = $(this);
    var menu = $(element).closest(".footer__menu");
    var status = menu.hasClass( "footer__menu--close");
    updateMenu(element, status, menu);
  });
  $.validate({ });

  bodyPadding();
  updateIcon();
  changeColspan();
  selectPicker();

  var doParallax = function(element){
    var banner = $(element);

    if(body && banner.length) {
      var initPosition = 0;
      var distance = banner.offset().top - win.scrollTop();
      var positionY = distance/6;

      if(isMobile()) {
        banner.css('backgroundPosition', '0 '+ '0');
      } else {
        banner.css('backgroundPosition', '50% '+ positionY + 'px');
      }
    }
  }

  win.on('scroll', function() {
    doParallax('.featured-banner-home');
    doParallax('.featured-banner-second-home');
    
    if(win.width() > 768) {
      var st = $(this).scrollTop();
      var navbanner = $('.navbanner') || false;
      slider_content.css({ 'opacity' : (1 - st/limit), 'position':'relative', 'top' : (st/2) }); 

      if(win.scrollTop() > navigation.outerHeight()) {
        navigation.addClass('navigation-scrolled');
        navbanner.addClass('nav-hidde').removeClass('nav-show');
      } else {
        navigation.removeClass('navigation-scrolled');
        navbanner.removeClass('nav-hidde').addClass('nav-show');
      }
    }

  });

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });

  alignHeights();

  $(window).resize(function() {
    // swap_logo();
    bodyPadding();
    alignHeights();
    setSidebarWidth();
    changeColspan();
  });

  var setCategoryMenu = function () {
    $('.sidebar__sidebar-submenu').slideDown();
  }
  
  setCategoryMenu();

  $(".sidebar__sidebar-list-toggle").click(function(e){
    e.preventDefault();
    var isActive = $(this).next('.sidebar__sidebar-submenu').hasClass('active');
    if(!isActive) {
      $(this).children(".mdi").addClass('mdi-chevron-up');
      $(this).children(".mdi").removeClass('mdi-chevron-down');
      
      $(this).next(".sidebar__sidebar-submenu").slideDown();
      $(this).next(".sidebar__sidebar-submenu").addClass('active');
    } else {
      $(this).children('.mdi').removeClass('mdi-chevron-up');
      $(this).children('.mdi').addClass('mdi-chevron-down');
      $(this).next(".sidebar__sidebar-submenu").slideUp();
      $(this).next(".sidebar__sidebar-submenu").removeClass('active');
    }
  });

  var $adminBar = $('#admin-bar-iframe');

  if ($adminBar.length) {
    $('body').css({ position: 'initial' });
    $('#top-navbar').css({ position: 'relative' });
    $('.navbar.navbar-fixed-top.navigation').css({ 'margin-top': '40px' });
  }

});
