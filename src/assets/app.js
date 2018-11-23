var currency = $('script#app').data("currency");
// Format Money
var formatMoney = function(price) {
  var formatPrice = price /= 100;
  formatPrice = formatPrice.toFixed(2);
  formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return '$' + formatPrice + ' ' + currency;
}
// Pluriliza qty
var quantityPluralize = function(data) {
  return data > 1 ? data +' productos' : data +' producto';
}
$(document).ajaxStart(function(){
$(document.body).css({'cursor':'wait'});
$('body a').css({'pointer-events':'none'})})
.ajaxStop(function(){
$(document.body).css({'cursor':'default'});
$('body a').css({'pointer-events':'auto'})}).ready(
function() {
  var win = $(window),
    body = $('body').hasClass('home'),
    navigation = $('.navbar.navbar-fixed-top.navigation'),
    slider = $('.featured-slider-home'),
    slider_content = $('.featured-slider-home__content'),
    limit = 400;

  var navigationDefaultHeight = navigation.outerHeight();
  var getNavigationHeight = function() {
    return navigation.outerHeight();
  }
  var bodyPadding = function() {
    $('body').css({ 'padding-top':'' });
    $('body').css({ 'padding-top': getNavigationHeight() });
  }
  var selectPicker = function() {
    $('.cart__resume-table__product-quantity.selectpicker').selectpicker({
      style: 'btn-link item_refresh',
      size: 5
    });
  };
  var isMobile = function() {
    return (win.width() < 768 ? true : false);
  }
  var changeColspan = function() {
    if (win.width() < 421) {
      $('.search-page__table--thead-th').attr('colspan', 1);
    } else {
      $('.search-page__table--thead-th').attr('colspan', 2);
    }
  }
  var isSmallMobile = function() {
    return (win.width() < 320 ? true : false);
  }
  var setHeightElement = function(boxArray, tallestElement) {
    for (var i = 0; i < boxArray.length; i++) {
      $(boxArray[i]).css({ 'height': tallestElement + 'px' });
    }
    boxArray = [];
  }
  var alignHeights = function() {
    if (!isSmallMobile()) {
      var tallestElement = 0,
        currentElementHeight = 0,
        boxArray = [],
        container = $('.symmetrical-container'),
        boxArray = container.children('.symmetrical');
      for (var i = 0; i < boxArray.length; i++) {
        $(boxArray[i]).css({ 'height': 'auto' });
        currentElementHeight = $(boxArray[i]).outerHeight();
        if (currentElementHeight > tallestElement) {
          tallestElement = currentElementHeight;
        }
      }
      setTimeout(setHeightElement(boxArray, tallestElement), 200);
    } else {
      $('.symmetrical').css({ 'height': 'auto' });
    }
  }

  var updateIcon = function() {
    $(".footer__menu").each(function() {
      var status = $(this).hasClass("footer__menu--close");
      if (status) {
        $(this).find('.mdi').removeClass('mdi-chevron-up');
        $(this).find('.mdi').addClass('mdi-chevron-down');
      } else {
        $(this).find('.mdi').removeClass('mdi-chevron-down');
        $(this).find('.mdi').addClass('mdi-chevron-up');
      }
    });
  };
  var updateMenu = function(element, status, menu) {
    $(element).parents('footer__menu');
    $('.footer').find('.footer__menu').addClass('footer__menu--close');
    if (status) {
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
    var status = menu.hasClass("footer__menu--close");
    updateMenu(element, status, menu);
  });
  var doParallax = function(element) {
    var banner = $(element);

    if (body && banner.length && win.width() > 1200) {
      var initPosition = 0;
      var distance = banner.offset().top - win.scrollTop();
      var positionY = distance / 6;

      if (isMobile()) {
        banner.css('backgroundPosition', '0 ' + '0');
      } else {
        banner.css('backgroundPosition', '50% ' + positionY + 'px');
      }
    }
  }

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

  var setCategoryMenu = function() {
    $('.sidebar__sidebar-submenu').slideDown();
  }

  $(".sidebar__sidebar-list-toggle").click(function(e) {
    e.preventDefault();
    $(this).find('.mdi').toggleClass("mdi-chevron-up mdi-chevron-down");
    $(this).next('.sidebar__sidebar-submenu').slideToggle("slow", function() {
    });
  });

  $('.nav > .has-children > .submenu-toggle').on('click', function(e) {
    var nextElement = $(this).next(".subnav");
    nextElement.toggleClass("active");
    $(this).parents().find('.subnav.active').not(nextElement).removeClass("active");
    nextElement.mouseleave(function() {
      $('.first-navigation').find('.subnav.active').removeClass('active');
    });
    e.stopPropagation();
  });

  $('.sidebar-nav__more.submenu-toggle').on('click', function(e) {
    $(this).find(".mdi").toggleClass(" mdi-chevron-down  mdi-chevron-up");
    $(this).next(".subnav").toggleClass("active");
    $(this)
      .parents()
      .siblings()
      .find(".subnav.active")
      .not(this)
      .removeClass("active");
    e.stopPropagation();
  });
  $('body').on('click', function() {
    $(this).find('.subnav').removeClass('active');
  });

  var $adminBar = $('#admin-bar-iframe');

  if ($adminBar.length) {
    $('body').css({ position: 'initial' });
    $('#top-navbar').css({ position: 'relative' });
    $('.navbar.navbar-fixed-top.navigation').css({ 'margin-top': '40px' });
  }
    // AJAX Add to Cart Component
    // Add Product to cart by ajax
    var root = window.location.hostname;
    var PROTOCOL = window.location.protocol;
    var getAjaxStoteUrl = function(type) {
      return PROTOCOL + '//' + root + '/' + type;
    }
    var ajaxConfig = {
      postUrl: getAjaxStoteUrl('cart/add.js')
    }
    var showAjaxCart = function() {
      $('.ajaxcart').animate({
        right: "0"
      }, 600);
      setTimeout(function(){ hideAjaxCart(false); }, 2000);
    }

    var ajaxCartImage = $('.ajaxcart .ajaxcart__content .ajaxcart__image');
    var ajaxCartProductCaption = $('.ajaxcart .ajaxcart__content .ajaxcart__description .ajaxcart__caption');
    var ajaxCartProductCaptionVariant = $('.ajaxcart .ajaxcart__content .ajaxcart__description .ajaxcart__caption_variant');
    var ajaxCartProductCaptionAlert = $('.ajaxcart .ajaxcart__content .ajaxcart__description .ajaxcart__caption_alert span.label');
    var ajaxCartProductPrice = $('.ajaxcart .ajaxcart__content .ajaxcart__description .ajaxcart__price strong');
    var ajaxCartResumeSubtotal = $('.ajaxcart .ajaxcart__content .ajaxcart__resume .modal-body__subtotal');
    var ajaxCartResumeItems = $('.ajaxcart .ajaxcart__content .ajaxcart__resume .ajaxcart__number-items');
    var clearAjaxCart = function() {
      ajaxCartImage.attr('src', '');
      ajaxCartProductCaption.empty();
      ajaxCartProductCaptionVariant.empty();
      ajaxCartProductPrice.empty();
      ajaxCartResumeSubtotal.empty();
      ajaxCartResumeItems.empty();
      ajaxCartProductCaptionAlert.text('');
    }
    var hideAjaxCart = function(mouseover) {
      var isOver = $('.ajaxcart').is(":hover");
      if (mouseover == true || !isOver) {
        $('.ajaxcart').animate({
          right: "-100%"
        }, 600 );
      }
    }
    $( ".ajaxcart" ).mouseleave(function() {
      hideAjaxCart(false);
    });

    var updateCartQty = function(items) {
      var items = items > 0 ? items : 0;
      if (items) {
        $('.navigation__link.second-navigation__link.second-navigation--nonactive').addClass('second-navigation--active');
        $('.navigation__link.second-navigation__link.second-navigation--nonactive').removeClass('second-navigation--nonactive');
      }
      $('.second-navigation__qty').text(items);
    }
    var displayCartWarning = function(data) {
      ajaxCartProductCaptionAlert.empty();
      var newText = data;
      ajaxCartProductCaptionAlert.html(newText);
      ajaxCartProductCaptionAlert.toggleClass('hidden');
    }
    var mergeArrays = function(arr1, arr2) {
      if (arr1 != null && arr2 != null ) {
        var l = Math.min(arr1.length, arr2.length),
              result = [],
              i;
        for( i=0; i<l; i++) {
           result.push(arr1[i]+": "+arr2[i]);
        }
        return result.join(', ');
      }
      return false;
    }

    var getProductVariants = function(data, sku) {
      var modifiers, values, result;
      $.each(data, function(key, value){
        if (typeof value.product.modifiers !== "undefined" && value.sku.id === sku ) {
          modifiers = value.product.modifiers;
        }
      });
      $.each(data, function(key, value){
        if (typeof value.sku.id !== "undefined" && value.sku.id === sku) {
          values = value.sku.modifiers;
        }
      });
      result = modifiers != null && values != null ? mergeArrays(modifiers, values) : '';
      return result;
    }

    var buildAjaxCart = function(obj, sku, data, total) {
      clearAjaxCart();
        var sku = sku;
        var total = total;
        $.each(data, function(_, value) {
            if (sku === value.sku.id) {
                var image_url = value.sku.image_url ? value.sku.image_url + '&w=100&fit=bounds' : '{{ "placeholders/product-11.jpg" | global_img_url }}'
                ajaxCartImage.attr('src', image_url);
                ajaxCartProductCaption.text(value.product.name);
                ajaxCartProductCaptionVariant.text(getProductVariants(data, sku));
                ajaxCartProductPrice.text(value.quantity + ' x ' +  formatMoney(value.price));
                ajaxCartResumeSubtotal.text('Total ' + formatMoney(total));
                ajaxCartResumeItems.text('Hay ' + quantityPluralize(Object.keys(data).length) + ' en tu carrito.');
            }
        })
    }

    var addSimpleProductToCarByAjax = function(sku, qty) {
      var productSku = sku;
      var qty = qty == null ? 1 : qty;
      var totalItems = 0;
      $.post(ajaxConfig.postUrl,
             {'sku_id':productSku,'quantity':qty})
      .done(function(data) {
        AjaxCart = data.object || {};
        totalItems = AjaxCart.total_items;
        buildAjaxCart(AjaxCart, sku, AjaxCart.items, AjaxCart.total_price);
        extraData = data.extra ? 1 : 0;
        if(extraData){
          displayCartWarning(data.extra[1]);
        }
      showAjaxCart();
      })
      .done(function(data){
        updateCartQty(totalItems);
      });
    }

    var addProductToCartByAjax = function() {
      var sku = $('input#js-sku-new').val();
      var qty = $('input#quantity.input-number').val();
      addSimpleProductToCarByAjax(sku, qty);
    }

    // Add product in product page
    $('#js-add-to-cart.js-add-to-cart').on('click', function(e) {
      e.preventDefault();
      var el = $(this);
      el.prop('disabled', true);
      setTimeout(function(){
        el.prop('disabled', false);
      }, 3000);
      if (!$(this).hasClass('disabled')) {
        addProductToCartByAjax();
      }
    });

    // Add simple product
    $('.add-ajax-product-btn').on('click', function(e){
      e.preventDefault();
      var sku = $(this).data('skuid');
      var el = $(this);
      el.prop('disabled', true);
      setTimeout(function(){
        el.prop('disabled', false);
      }, 3000);
      addSimpleProductToCarByAjax(sku);
    });

    $('.close-ajax-cart').on('click', function() {
      hideAjaxCart(true);
    });
    // End ajax component

    // Create new query url in orderby
    var getUrlVars = function() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function(m,key,value) {
        vars[key] = value;
      });
      return vars;
    }
    $('select.js-select-orderby').val(getUrlVars()["sort_by"]);

    var getRequestQuery = function(orderBy) {
      var currentUrl = (window.location.href).split('?')[0].replace('#','');
      var orderBy = orderBy;
      if (orderBy === 'no-order') {
        window.location = currentUrl;
      } else {
        window.location = currentUrl+'?sort_by='+ orderBy;
      }
    }
    // Get selected value
    $("select.js-select-orderby")
      .change(function() {
        var option = $( "select.js-select-orderby option:selected" ).val();
        getRequestQuery(option);
      });

  win.on('scroll', function() {
    doParallax('.featured-banner-home');
    doParallax('.featured-banner-second-home');
    if (win.width() > 1200) {
      var st = $(this).scrollTop();
      slider_content.css({ 'opacity': (1 - st / limit), 'position': 'relative', 'top': (st / 2) });
    }
    bodyPadding();
  })
  .resize(function() {
    alignHeights();
    bodyPadding();
  })
  .on("load", function () {
    alignHeights();
  });
  bodyPadding();
  // updateIcon();
  changeColspan();
  selectPicker();
  setCategoryMenu();
  alignHeights();
});
