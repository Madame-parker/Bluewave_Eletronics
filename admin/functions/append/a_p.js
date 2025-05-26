document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const price = parseFloat(document.getElementById("price").value);
  
    const data = {
      name: name,
      price: price
    };
  
    try {
      const response = await fetch("http://localhost:8000/api/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const message = document.getElementById("message");
  
      if (response.ok) {
        message.textContent = "✅ Produkt erfolgreich angelegt!";
        message.style.color = "lime";
        document.getElementById("productForm").reset();
      } else {
        const error = await response.text();
        message.textContent = "❌ Fehler beim Anlegen: " + error;
        message.style.color = "red";
      }
    } catch (error) {
      document.getElementById("message").textContent = "❌ Netzwerkfehler oder Server nicht erreichbar.";
      document.getElementById("message").style.color = "red";
      console.error(error);
    }
  });