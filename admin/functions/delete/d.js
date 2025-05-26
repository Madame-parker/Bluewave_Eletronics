document.getElementById("deleteForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const productName = document.getElementById("productname").value.trim(); // Eingabe ist jetzt der Name
    const message = document.getElementById("message");
  
    if (!productName) {
      message.textContent = "❌ Bitte einen Produktnamen eingeben.";
      message.style.color = "red";
      return;
    }
  
    try {
      // Schritt 1: Produktliste abrufen
      const response = await fetch("http://localhost:8000/api/products/");
      const products = await response.json();
  
      // Schritt 2: Produkt mit passendem Namen suchen (Case-insensitive)
      const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
      if (!product) {
        message.textContent = `❌ Produkt '${productName}' nicht gefunden.`;
        message.style.color = "red";
        return;
      }
  
      // Schritt 3: DELETE Request an API mit ID
      const deleteResponse = await fetch(`http://localhost:8000/api/products/${product.id}/`, {
        method: "DELETE"
      });
  
      if (deleteResponse.status === 204) {
        message.textContent = `✅ Produkt '${product.name}' wurde gelöscht.`;
        message.style.color = "lime";
      } else {
        message.textContent = `❌ Fehler beim Löschen (Status ${deleteResponse.status}).`;
        message.style.color = "red";
      }
  
    } catch (error) {
      message.textContent = "❌ Netzwerkfehler oder API nicht erreichbar.";
      message.style.color = "red";
      console.error(error);
    }
  });
  