```markdown
# Susdotoxy – Blogger Assets

This repository contains the **HTML, CSS, and JavaScript** files powering my Blogger site:  
👉 [susnatacodes.blogspot.com](https://susnatacodes.blogspot.com)

---

## 📂 Project Structure
```
/susnatacss   → Modular CSS files (header, footer, resume, projects, etc.)  
/assets/images → Images and profile assets  
/js           → JavaScript files (animations, interactivity)  
/html         → Page sections (index, resume, projects, contact)  
```

---

## 🚀 Usage

All files are served via **jsDelivr CDN** for fast and secure delivery.

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/susnatacodes/susdotoxy@main/susnatacss/style.css">
```

### JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/susnatacodes/susdotoxy@main/animation.js"></script>
```

### HTML Injection (Optional)
If you want to load a large HTML block dynamically:
```html
<div id="projects"></div>

<script>
fetch("https://cdn.jsdelivr.net/gh/susnatacodes/susdotoxy@main/projects.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("projects").innerHTML = html;
  });
</script>
```

---

## 🛠️ Development
- Built and tested in **VS Code**  
- Modular CSS for each section (header, footer, resume, projects, contact)  
- JavaScript animations separated into `animation.js`  
- Recommended: use **minified versions** (`.min.css`, `.min.js`) for production  

---

## 📜 License
This project is licensed under the **MIT License** – you are free to use, modify, and distribute with attribution.  

---

## ✨ Author
**Susnata Biswas**  
- 🌐 [susnatacodes.blogspot.com](https://susnatacodes.blogspot.com)  
- 💻 [GitHub](https://github.com/susnatacodes)  
- 📷 [Instagram](https://www.instagram.com/capture_withsusnata)  
```