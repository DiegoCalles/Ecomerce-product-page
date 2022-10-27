//  Change  articulos quantity-  user inputs
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber < 0) {
      userInputNumber = 0;
    } 
        userInput.value = userInputNumber;
      
})


plusBtn.addEventListener("click", () => {
    userInputNumber++;
  userInput.value = userInputNumber;
});

// Add total of products to cart - on click - add to cart button 

const addToCartBtn = document.querySelector(".details__button"); 
let cartNotification = document.querySelector(".header__cart--notification");
let formerValue = parseInt(cartNotification.innerText);

// add products - precios to modal
addToCartBtn.addEventListener('click', () => {
  
  formerValue += userInputNumber;
  
  cartNotification.innerText = formerValue;
  cartNotification.style.display = "block";
  drawProductCartModal();
  
});

// show modal- cart details

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const cartModalContainer = document.querySelector(".cart-modal__checkout-container");

// show modal- cart details (notification)

cartIconBtn.addEventListener('click', () => {
 
  cartModal.classList.toggle('show'); // para que la muestre y lo quite al darle click de vuelta
  if (formerValue === 0) {
    cartModalContainer.innerHTML ='<p class="cart-empty"> Your cart is empty</p>';
    
  }
  else {
    drawProductCartModal();
  }
  

});

// change images-on click -arrows

const previousBtn = document.querySelector(".gallery__image__previous");
const nextBtn = document.querySelector(".gallery__image__next");
const imageContainer = document.querySelector(".gallery__image-container");
let imgIndex = 1;


nextBtn.addEventListener('click', () => { 
  changeNextImage(imageContainer);
});

previousBtn.addEventListener("click", () => {
  changePreviousImage(imageContainer);
});


// Desktop

// show modal - images - on click -main image
let modalGallery = document.querySelectorAll(".modal-gallery");
const modalGalleryBackground = document.querySelector('.modal-gallery__background');

imageContainer.addEventListener('click', () => {
  
  modalGalleryBackground.style.display = "block";
 
  

  
});


// change images - modal gallery -on click - arrows
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
const modalNextBtn = document.querySelector(".modal-gallery__image-next");
const modalPreviousBtn = document.querySelector('.modal-gallery__image-previous')

modalNextBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer);
});

modalPreviousBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer);
});


// close - X - modal gallery

const modalGalleryX = document.querySelector(".modal-gallery__close-icon");


modalGalleryX.addEventListener("click", () => {
  modalGalleryBackground.style.display = "none";
});

// change images - thumbnails - del gallery
let thumbnails = document.querySelectorAll(".gallery__thumbnail");



thumbnails = [...thumbnails];



thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', event=> {
    console.log(event.target.id);
    imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;

  });
});


// change images - thumbnails - modal gallery
let modalGalleryThumbnails = document.querySelectorAll('.modal-gallery__thumbnail')
modalGalleryThumbnails = [...modalGalleryThumbnails];
console.log(modalGalleryThumbnails);

modalGalleryThumbnails.forEach((modalThumbnail) => { 
  modalThumbnail.addEventListener('click', event1 => { 
    console.log(event1.target.id.slice(1));
    modalImageContainer.style.backgroundImage = `url('../images/image-product-${event1.target.id.slice(1)}.jpg')`;
  });
});




// open modal navbar al darle click al menu hamburguesa
const menuHamb = document.querySelector(".header__menu");
const modalNavbarBackground = document.querySelector('.modal__navbar__background');
const modalnavbar = document.querySelector(".modal__navbar");

menuHamb.addEventListener('click', () => {
  modalNavbarBackground.style.display = 'block';
  modalnavbar.style.display = 'block';
})

// close el modal navbar
const modalNavbarX = document.querySelector(".modal__navbar__close-icon");

modalNavbarX.addEventListener("click", () => {
 modalNavbarBackground.style.display = "none";
 modalnavbar.style.display = "none";
});

// functions

function drawProductCartModal() {
  cartModalContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img src="./images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail" class="cart-modal__img" >
            <div>
            <p class="cart-modal__product">Autumns Limited Edition...</p>
            <p class="cart-modal__prices">$125.00 x3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="icon-delete"  >
        </div>
    </div>
    <button class="cart-modal__button">Checkout</button>`;
  deleteModal();
  let priceModal = document.querySelector(".cart-modal__prices");
  priceModal.innerHTML = `$125.00 x ${formerValue} <span>$${formerValue * 125}.00</span>`;// programar el modal - detalles de producto y precio
}

function deleteModal() {
  // borrar el contenido del carrito
  const deleteIconBtn = document.querySelector(".cart-modal__delete");
  deleteIconBtn.addEventListener("click", () => {
    cartModalContainer.innerHTML ='<p class="cart-empty"> Your cart is empty</p>';
    formerValue = 0;
    cartNotification.innerText = formerValue;
  });
}

function changeNextImage(imgContainer) {
  
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
    

    imgContainer.style.backgroundImage = `url("./images/image-product-${imgIndex}.jpg")`;
}

function changePreviousImage(imgContainer) {
  if (imgIndex == 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url("./images/image-product-${imgIndex}.jpg")`;
}



