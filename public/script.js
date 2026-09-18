async function loadProducts() {
  const response = await fetch('http://localhost:5000/api/products');
  const products = await response.json();

  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart('${p._id}')">Add to Cart</button>
    </div>
  `).join('');
}
loadProducts();