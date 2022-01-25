const menuBtn = $(".navMenu-btn");
const navMenu = $(".navMenu");
const cartBtn = $(".cart-wrapper");
const shoppingCart = $(".shopping-cart-wrapper");
const emptyCartText = $(".cart-emptyText");

const sliderImages = $(".slide");
const arrowLeft = $(".arrow-left");
const arrowRight = $(".arrow-right");
let current = 0;

const incrementBtn = $(".increase");
const decrementBtn = $(".decrease");
let cartCount = 0;

const thumbnailImg = $(".item-img");
const checkoutQty = $(".item-qty");
const totalCost = $(".total-cost");
const addItemBtn = $(".addCart");
const checkoutItems = $(".cart-items-wrapper");
const countPopup = $(".count-popup");

//menubtn and cartBtn toggle action ----------------------------------------------
menuBtn.click(() => {
  menuBtn.toggleClass("open");
  navMenu.toggleClass("open");
});

cartBtn.click(() => {

  if(shoppingCart.hasClass("open") && checkoutItems.hasClass("open")){
    shoppingCart.toggleClass("open");
    countPopup.toggleClass("open");
    checkoutItems.toggleClass("open");
  }else{
    shoppingCart.toggleClass("open");
    emptyCartText.toggleClass("open");
  }
});

//Sliding img showcase action-----------------------------------------------------

//clear all imgs
function reset() {
  $.each(sliderImages, (index, img) => {
    $(img).css("display", "none");
  });
}

//Initial slide
function startSlide() {
  reset();
  $(sliderImages[0]).css("display", "block");
}

//show previous slide
function slideLeft() {
  reset();
  $(sliderImages[current - 1]).css("display", "block");
  current--;
}

//show next slide
function slideRight() {
  reset();
  $(sliderImages[current + 1]).css("display", "block");
  current++;
}

//Left arrow click
arrowLeft.click(() => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.click(() => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

//Purchase custom-------------------------------------------------------------
function resetCartCount() {
  cartCount = 0;
  $(".purchaseQty").text(cartCount.toString());
  //document.querySelector(".purchaseQty").innerHTML = cartCount.toString();
}

incrementBtn.click(() => {
  cartCount++;
  $(".purchaseQty").text(cartCount.toString());
  // document.querySelector(".purchaseQty").innerHTML = cartCount.toString();
});

decrementBtn.click(() => {
  cartCount--;
  if (cartCount < 0) {
    cartCount = 0;
  }
  $(".purchaseQty").text(cartCount.toString());
  //document.querySelector(".purchaseQty").innerHTML = cartCount.toString();
});

resetCartCount();

//Shoppind cart----------------------------------------

addItemBtn.click(() => {
  

  checkoutQty.text(cartCount.toString());
  totalCost.text("$" + (cartCount * 125).toString());

  if (shoppingCart.hasClass("open") && emptyCartText.hasClass("open")) {
    emptyCartText.removeClass("open");
    checkoutItems.addClass("open");
    shoppingCart.addClass("open");
  } else {
    checkoutItems.toggleClass("open");
    shoppingCart.toggleClass("open");
  }

  countPopup.text(cartCount.toString());
  countPopup.toggleClass("open");
});
