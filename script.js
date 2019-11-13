

var redShades = {
  title: 'Red',
  subtitle: 'Rock-N-Stroll',
  img: 'img/product-red.jpg',
  price: 199
};
var greenShades = {
  title: 'Green',
  subtitle: 'Rock-N-Stroll',
  img: 'img/product-green.jpg',
  price: 199
};
var blueShades = {
  title: 'Blue',
  subtitle: 'Rock-N-Stroll',
  img: 'img/product-blue.jpg',
  price: 199
};
var blackShades = {
  title: 'Black',
  subtitle: 'Rock-N-Stroll',
  img: 'img/product-black.jpg',
  price: 199
};

var shades = [redShades, greenShades, blueShades, blackShades];

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts( shades[0] ));

function mobileProducts(product) {
  // for(let i=0; i<=shades.length;i++){
  return `
    <div class="col peppers-product text-center">
      <img class="img-fluid" src="${product.img}" alt="Peppers Rock-N-Stroll">
      <p class="product-title">${product.subtitle}</p>
      <h3>${product.title}</h3>
      <div class="circles">
        <div class="circle red" data-index="0"></div>
        <div class="circle green" data-index="1"></div>
        <div class="circle blue" data-index="2"></div>
        <div class="circle black" data-index="3"></div>
      </div>
      <p class="product-price">$${product.price}</p>
      <div class="product-cta-container">
        <a href="#" class="btn btn-danger btn-lg mb-4">Add to Cart</a>
      </div>
    </div>
  `;
// }
}



});
