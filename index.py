<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Digital Goods Store</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Digital Goods Store</h1>
    <nav>
      <a href="#products">Products</a>
      <a href="#cart">Cart (<span id="cart-count">0</span>)</a>
    </nav>
  </header>

  <main>
    <section id="products">
      <h2>Available Digital Products</h2>
      <div class="product-list" id="product-list">
        <!-- Products will be inserted here dynamically -->
      </div>
    </section>

    <section id="cart">
      <h2>Your Cart</h2>
      <ul id="cart-items"></ul>
      <p>Total: $<span id="total-price">0.00</span></p>
      <button id="checkout-btn">Checkout</button>
    </section>
  </main>

  <footer>
    <p>© 2025 Digital Goods Store</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>