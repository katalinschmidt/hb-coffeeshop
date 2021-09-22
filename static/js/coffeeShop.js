"use strict";

// Add item to shopping cart items list.
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};


// Clears shopping cart of all items.
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};


// Update cart total.
const incrementCartTotal = (price) => {
  // Assign element id=cart-total to jQuery object, so that we can manipulate / modify it. 
  const cartTotal = $('#cart-total');

  // .html() is accessing the text associated with that id, then converting it to a num.
  let total = Number(cartTotal.html());
  total += price;

  // Modify the text associated with the id. 
  cartTotal.html(total.toFixed(2));
};


// Updating the num of coffees sold.
const incrementCoffeeSold = (amountSold) => {
  // Access the text associated with the id=coffee-sold-counter, then converting it to a num, and assigning it to the var coffeeSold.
  let coffeeSold = Number($('#coffee-sold-counter').html());
  // Update total number of coffees sold.
  coffeeSold += amountSold;

  // Modify the text associated with the id.
  $('#coffee-sold-counter').html(coffeeSold);
};


// Updating progress and status values in order status. 
const setProgressAndStatus = (progressVal, statusMsg) => {
  // Access the attribute associated with the id=order-progress, then GET and SET the value. I.e. reassign the attr 'value' to the whatever progressVal holds.
  $('#order-progress').attr('value', progressVal);
  // Modify the text associated with the id.
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//


const add_btn = document.querySelector('.add-to-order');

add_btn.addEventListener('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

const order_btn = document.querySelector('#place-order')

order_btn.addEventListener(
  'click', 
  () => {
    // Get amountSold: divide total price stored in id #cart-total by price per coffee (1.50) to get num of coffees sold. 
    let cups = Number(document.querySelector('#cart-total'))
    cups = cups/1.5
    incrementCoffeeSold(cups);
    resetCart;
);


// From lecture handout / JAVASCRIPT:
// HTMLElement.addEventListener(eventType, callback)
// Example:
// button.addEventListener(
//   'click',

//   () => {
//     alert('Stop clicking me!');
//   }
// );


// From lab instructions / JQUERY:
// $('<class>').on('click', () => {
//  <callback function to execute on click>
// });
// EXAMPLE:
// $('.add-to-order').on('click', () => {
//    addItemToCart('Coffee');
//    incrementCartTotal(1.50);
// });