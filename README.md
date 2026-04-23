# Yuan Li — Personal Homepage

> A clean, Apple-inspired academic personal homepage. Built with pure HTML/CSS/JS, hosted for free on GitHub Pages.

**Live URL**: `https://yuan-li-fnlp.github.io`

---

## 🚀 Quick Deploy (3 Steps)

### Step 1: Create the Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`Yuan-Li-FNLP.github.io`** (must match your username exactly)
3. Make it **Public**
4. Click **Create repository**

### Step 2: Upload These Files

Upload the entire contents of this folder to your new repository:

```
Yuan-Li-FNLP.github.io/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles (Apple design)
├── js/
│   └── main.js         # Language toggle + animations
├── assets/
│   └── photo.jpg       # Your profile photo
└── README.md           # This file
```

**How to upload:**
- **Option A (Web)**: Drag & drop all files into the GitHub web interface
- **Option B (Git CLI)**:
  ```bash
  git init
  git remote add origin https://github.com/Yuan-Li-FNLP/Yuan-Li-FNLP.github.io.git
  git add .
  git commit -m "Initial homepage"
  git push -u origin main
  ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
4. Click **Save**
5. Wait 1–2 minutes, then visit: **`https://yuan-li-fnlp.github.io`**

---

## 🌐 Custom Domain (Optional)

If you want a custom domain (e.g., `li-yuan.com`):

1. Buy a domain from any registrar (Cloudflare, Namecheap, GoDaddy, etc.)
2. In your repository: **Settings** → **Pages** → **Custom domain**
3. Enter your domain and click **Save**
4. At your DNS provider, add these records:
   - **A records** → point to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **AAAA records** (optional, for IPv6):
     - `2606:50c0:8000::153`
     - `2606:50c0:8001::153`
     - `2606:50c0:8002::153`
     - `2606:50c0:8003::153`
5. GitHub will automatically generate an SSL certificate (HTTPS)
6. Check **Enforce HTTPS** in the Pages settings

---

## ✏️ How to Update Content

### Update Text

Edit `index.html` directly. Look for these sections:

| Section | HTML ID |
|---------|---------|
| About | `#about` |
| Journey | `#journey` |
| Research | `#research` |
| Publications | `#publications` |
| Education | `#education` |
| Skills | `#skills` |
| Contact | `#contact` |

**Bilingual content**: Each text has an English version (`class="lang-en"`) and a Chinese version (`class="lang-zh"`). Update both.

### Update Photo

Replace `assets/photo.jpg` with a new photo. Recommended:
- Square aspect ratio (1:1)
- 500×500px or larger
- Keep under 200KB for fast loading

### Update Links

Search for URLs in `index.html` and update as needed:
- Google Scholar link
- GitHub profile link
- Advisor homepage links
- University/department links

---

## 🎨 Design Notes

- **Style**: Apple-inspired minimalism — large whitespace, subtle shadows, smooth animations
- **Colors**: Deep graphite (#1d1d1f) + academic blue (#2B5F8A) accent
- **Typography**: Inter (English) + Noto Sans SC (Chinese), loaded from Google Fonts
- **Animations**: Scroll-triggered fade-ins, SVG path drawing for the Journey timeline
- **Responsive**: Fully responsive — desktop, tablet, and mobile

---

## 📁 File Structure

```
Yuan-Li-FNLP.github.io/
├── index.html              # Single-page website
├── css/
│   └── style.css           # All styling (no frameworks)
├── js/
│   └── main.js             # Interactions & animations
├── assets/
│   └── photo.jpg           # Profile picture
└── README.md               # This file
```

No build tools, no frameworks, no dependencies. Pure static HTML that works everywhere.

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|---------|
| Site not showing | Make sure repository name matches your username exactly |
| Changes not appearing | GitHub Pages can take 1–2 minutes to deploy. Hard refresh (Ctrl+F5) |
| Custom domain not working | Check DNS records and wait for propagation (up to 24h) |
| Chinese text looks wrong | Check that Google Fonts loaded (requires internet access) |
| Photos load slowly | Compress images before uploading (use [tinypng.com](https://tinypng.com)) |

---

Built with precision and care. © 2025 Yuan Li
