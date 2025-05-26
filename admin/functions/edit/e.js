
const form = document.getElementById('productForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const price = parseFloat(document.getElementById('price').value);

  const data = {
    name: name,
    price: price
  };

  try {
    const response = await fetch("localhost:8000/api/products/2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      message.textContent = "✅ Produkt erfolgreich bearbeitet!";
      message.style.color = "lime";
      form.reset();
    } else {
      throw new Error("Fehler beim Senden.");
    }
  } catch (err) {
    message.textContent = "❌ Fehler beim Bearbeiten des Produkts.";
    message.style.color = "red";
    console.error(err);
  }

});