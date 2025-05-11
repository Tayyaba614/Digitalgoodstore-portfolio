// Sample digital products data
const products = [
  { id: 1, name: "E-book: Learn JavaScript", price: 9.99 },
  { id: 2, name: "Stock Photo Pack", price: 14.99 },
  { id: 3, name: "Music Album Download", price: 7.99 },
  { id: 4, name: "Graphic Design Templates", price: 19.99 }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];

// Render products dynamically
function renderProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  updateCartUI();
}

// Remove product from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

// Update cart display and total
function updateCartUI() {
  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  cartCount.textContent = count;
  totalPriceEl.textContent = total.toFixed(2);
}

// Checkout button functionality (simple alert)
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartUI();
  }
});

// Initialize
renderProducts();
updateCartUI();