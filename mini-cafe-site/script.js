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


document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedbackForm");
  if (!feedbackForm) return;

  feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMsg = document.getElementById("statusMsg");
    const feedbackList = document.getElementById("feedbackList");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      statusMsg.textContent = "⚠️ Please enter your name.";
      statusMsg.style.color = "red";
      return;
    }

    if (!emailPattern.test(email)) {
      statusMsg.textContent = "⚠️ Please enter a valid email address.";
      statusMsg.style.color = "red";
      return;
    }

    if (message.length <= 5) {
      statusMsg.textContent = "⚠️ Feedback message must be at least 6 characters long.";
      statusMsg.style.color = "red";
      return;
    }

    statusMsg.textContent = "✅ Thank you for your feedback!";
    statusMsg.style.color = "green";

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `<strong>${name}</strong> (${email}): <br>${message}`;
    feedbackList.appendChild(listItem);

    feedbackForm.reset();
  });
});
