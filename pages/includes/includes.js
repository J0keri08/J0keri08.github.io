    async function loadHTML(id, file) {
      const res = await fetch(file);
      const text = await res.text();
      document.getElementById(id).innerHTML = text;
    }
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");