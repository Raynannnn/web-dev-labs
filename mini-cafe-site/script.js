const menuItems = [
  { name: "Classic Espresso", description: "Strong, bold, and full-bodied coffee shot.", price: "₱120" },
  { name: "Caramel Macchiato", description: "Rich espresso layered with milk and caramel drizzle.", price: "₱160" },
  { name: "Iced Vanilla Latte", description: "Smooth espresso with vanilla sweetness over ice.", price: "₱150" },
  { name: "Matcha Cream Frappe", description: "Creamy blend of matcha and milk topped with whipped cream.", price: "₱170" },
  { name: "Grilled Chicken Sandwich", description: "Juicy chicken breast, lettuce, and mayo on toasted bread.", price: "₱180" },
  { name: "Chocolate Croissant", description: "Flaky pastry filled with smooth chocolate.", price: "₱95" }
];

const menuContainer = document.getElementById("menu-list");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "col-md-4 col-sm-6";
  card.innerHTML = `
    <div class="card text-center shadow-sm p-3 h-100">
      <div class="card-body">
        <h5 class="card-title fw-bold text-dark">${item.name}</h5>
        <p class="card-text text-secondary">${item.description}</p>
        <p class="price-tag">${item.price}</p>
        <button class="btn-prototype" onclick="alert('Added ${item.name} to your cart!')">Order Now</button>
      </div>
    </div>
  `;
  menuContainer.appendChild(card);
});
