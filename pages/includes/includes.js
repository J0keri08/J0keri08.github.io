    async function loadHTML(id, file) {
      const res = await fetch(file);
      const text = await res.text();
      document.getElementById(id).innerHTML = text;
    }
    loadHTML("header", "/pages/includes/header.html");
    loadHTML("footer", "/pages/includes/footer.html");