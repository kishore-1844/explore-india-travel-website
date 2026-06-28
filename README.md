# 🌏 Explore India Travel Website

A responsive travel agency website built using **HTML, CSS, and JavaScript**.  
This project showcases Indian tourism destinations, tour packages, gallery, and a contact/booking system.

---

## 🚀 Live Features

- Beautiful homepage with hero section
- Popular Indian destinations showcase
- Tour packages with pricing
- Travel gallery page
- About us page with mission & vision
- Contact & booking form
- Responsive design for mobile & desktop
- Simple form validation using JavaScript

---

## 🧰 Technologies Used

- HTML5
- CSS3 (Flexbox + Grid)
- JavaScript (Basic validation)

---

## 📁 Project Structure

```

explore-india-travel-website/
│
├── index.html
├── about.html
├── packages.html
├── gallery.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── goa.jpg
│   ├── kerala.jpg
│   ├── kashmir.jpg
│   ├── manali.jpg
│   ├── beach.jpg
│   ├── mountains.jpg
│   └── hero-banner.jpg
│
└── README.md

````

---

## 🏠 Home Page (index.html)

### Features:
- Navigation bar
- Hero section with call-to-action
- Popular destinations (Goa, Kerala, Kashmir, Manali)
- Features section (Why choose us)
- Testimonials
- Footer

### Key Sections:
```html
<section class="hero">
<section class="destinations">
<section class="features">
<section class="testimonials">
````

---

## ℹ️ About Page (about.html)

### Features:

* Company introduction
* Mission & Vision
* Statistics section
* Trust building features

### Key Sections:

```html
<section class="about-section">
<section class="mission-vision">
<section class="stats">
```

---

## 🏝️ Packages Page (packages.html)

### Features:

* Tour packages listing
* Price cards for destinations
* Package details (days, hotels, activities)

### Example Package Card:

```html
<div class="package-card">
    <img src="images/goa.jpg">
    <h2>Goa Beach Package</h2>
    <p>Enjoy beaches, nightlife and water sports.</p>
    <h3>₹15,999</h3>
</div>
```

---

## 🖼️ Gallery Page (gallery.html)

### Features:

* Grid-based image gallery
* Travel destinations showcase

### Layout:

```html
<section class="gallery-section">
<div class="gallery-container">
<div class="gallery-card">
```

---

## 📞 Contact Page (contact.html)

### Features:

* Contact information section
* Booking form
* Dropdown destination selection
* JavaScript validation

### Contact Layout:

```html
<section class="contact-section">

<div class="contact-info">
<div class="booking-form">

</section>
```

---

## 🎨 CSS (style.css)

### Main Features:

* Responsive Flexbox layout
* Grid gallery system
* Card-based UI design
* Hero background image section
* Mobile responsiveness

### Key Classes:

```css
.navbar
.hero
.destinations
.package-card
.gallery-container
.contact-section
.cta
footer
```

---

## ⚙️ JavaScript (script.js)

### Form Validation:

```javascript
function validateForm() {

    let name = document.getElementById("name").value.trim();

    if(name === "") {
        alert("Please enter your name.");
        return false;
    }

    alert("Booking Submitted Successfully!");
    return true;
}
```

---

## 📱 Responsive Design

The website is fully responsive using:

* Flexbox
* Media Queries
* Percentage-based widths

```css
@media(max-width:768px){
    .navbar{
        flex-direction:column;
    }

    .destination-card,
    .package-card,
    .contact-info,
    .booking-form{
        width:100%;
    }
}
```

---

## ✨ Future Improvements

* Add backend form submission (PHP / Node.js)
* Add real booking system
* Add payment gateway
* Add Google Maps integration
* Add animation effects

---


## 📌 License

This project is open-source and free to use for learning purposes.

