# GLOW IN Home Cleaning Services — Premium Business Website

Official website for **GLOW IN Home Cleaning Services**, Hyderabad.

> **Tagline:** CLEAN | CARE | SHINE.  
> **Primary Booking Channel:** WhatsApp (Fast, direct, frictionless conversion)

---

## 📁 Project Structure

```
my website/
├── index.html               # Main landing page (all sections, 3 services & WhatsApp integration)
├── privacy-policy.html      # Privacy Policy tailored for residential cleaning & pest control
├── terms-conditions.html    # Terms & Conditions tailored for residential home services
├── 404.html                 # Custom branded 404 error page
├── robots.txt               # SEO crawler directives
├── sitemap.xml              # Search engine XML sitemap
├── css/
│   └── style.css            # Modern responsive CSS (Corporate Navy & Cyan brand identity)
├── js/
│   ├── config.js            # Single source of truth for WhatsApp number, phone, email & address
│   └── main.js              # Navigation, lightbox, FAQ accordion, booking helper
└── assets/
    ├── logo.svg             # Original GLOW IN vector logo (Navy & Cyan)
    ├── logo-white.svg       # GLOW IN white vector logo for dark footer
    └── favicon.svg          # Modern browser favicon
```

---

## ⚙️ Business Contact Details & Configuration

To update contact details across the website, edit [`js/config.js`](js/config.js):

```javascript
const GLOW_CONFIG = {
  // 10-digit WhatsApp number with country code (91 for India):
  whatsappNumber: "919515989219", 

  // Phone number displayed on screen:
  phoneDisplay: "+91 95159 89219",

  // Business Email:
  email: "info.glowin9515@gmail.com",

  // Office Address:
  address: {
    full: "Plot No. 16, Shilpa Valley Road, Kantivanam Colony, Serilingampally, Hyderabad, Serilingampally (M), Telangana – 500084."
  },

  // Working Hours:
  workingHours: "Monday to Sunday: 8:00 AM – 10:00 PM",

  // Instagram:
  socialLinks: {
    instagram: "https://www.instagram.com/letsglowin/"
  }
};
```

---

## 🚀 How to View & Deploy

### 1. View Locally
Simply double-click `index.html` to open it in any web browser (Chrome, Edge, Safari, Firefox). No build step, Node.js, or server required!

### 2. Deploy to Free Hosting:

- **Vercel / Netlify / Cloudflare Pages:**
  Drag and drop the entire `my website` folder onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub. Your site will go live with free SSL in 30 seconds.
  
- **GitHub Pages:**
  Push to a GitHub repository, go to **Settings > Pages**, choose `main` branch, and save.

- **Traditional Web Hosting (cPanel / Hostinger / GoDaddy):**
  Upload all files inside the `public_html` directory via File Manager or FTP.

---

## 📋 Features & Specifications

1. **Brand Identity:** Deep Navy Blue (`#0B1B3D`), Pure White, Bright Cyan (`#00B4D8`), Plus Jakarta Sans typography.
2. **Logo & Favicon:** Vector SVGs with shield, home silhouette, and shine starburst.
3. **Responsive Navigation:** Desktop nav + smooth mobile hamburger drawer with backdrop blur.
4. **Hero Section:** High-resolution spotless living room photography, verified staff trust strip, dual CTA buttons.
5. **3 Core Residential Services:**
   - **Home Deep Cleaning**
   - **Move-In & Move-Out Cleaning**
   - **Pest Control**
   *Each card includes high-res imagery, feature checklists, and 1-tap WhatsApp booking buttons with pre-filled service messages.*
6. **About Us:** Narrative with Vision & Mission cards.
7. **Why Choose Us:** 7 key differentiators with icons (Trained staff, 3-step verification, site supervisor, residential focus, etc.).
8. **Work Gallery:** Responsive filterable grid (Home Deep Cleaning, Move-In & Move-Out Cleaning, Pest Control, Team) + interactive Lightbox zoom modal.
9. **Customer Testimonials:** 5-star verified feedback from Hyderabad residential customers.
10. **Service Areas (12 Locations):** Kondapur, Gachibowli, Hafeezpet, Miyapur, Madhapur, Madinaguda, Serilingampally, Chandanagar, Tellapur, Kukatpally, Jubilee Hills, and Financial District, with an instant WhatsApp area availability checker.
11. **Contact Us:** Support desk info + instant WhatsApp booking generator helper.
12. **Floating WhatsApp CTA:** Fixed bottom-right with ripple pulse animation.
13. **FAQ Accordion:** 8 updated questions covering deep cleaning, move-in/out cleaning, pest control, pricing, booking, and support.
14. **Footer:** Deep Navy footer with quick links, service links, working hours (`Monday to Sunday: 8:00 AM – 10:00 PM`), and Instagram profile (`https://www.instagram.com/letsglowin/`).
15. **SEO & Discovery:** Meta tags, OpenGraph, Twitter Card, Schema.org LocalBusiness JSON-LD, `robots.txt`, and `sitemap.xml`.
16. **Legal & Error Pages:** Dedicated `privacy-policy.html`, `terms-conditions.html`, and custom `404.html`.
