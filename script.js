function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function getTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let html = "<ul>";
  cart.forEach(item => {
    html += `<li>${item.name} - ৳${item.price}</li>`;
  });
  html += "</ul>";
  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("cart-total").innerText = getTotal();
}

function confirmOrder(event) {
  event.preventDefault();
  localStorage.removeItem("cart");
  alert("Thank you! Your order has been placed.");
  window.location.href = "index.html";
  return false;
}
