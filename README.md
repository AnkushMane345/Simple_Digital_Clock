# ⏰ Digital Clock Website

A simple and modern **Digital Clock web application** built using **HTML, CSS, and JavaScript**.
It displays the current time and date in real-time with options to switch between **light/dark themes** and **12-hour / 24-hour time formats**.

---

## 🚀 Features

* 🕒 Real-time digital clock
* 📅 Displays the current date
* 🌗 Toggle between **Dark Mode** and **Light Mode**
* ⏱ Switch between **12-hour** and **24-hour** time formats
* 💾 Saves user preferences using **localStorage**
* 🎨 Smooth UI with gradient background and glassmorphism effect
* 📱 Responsive and centered layout

---

## 🛠 Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling, layout, gradients, glassmorphism
* **JavaScript (Vanilla JS)** – Clock functionality and user preferences

---

## 📂 Project Structure

```
digital-clock/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and theme design
├── script.js       # Clock logic and interactivity
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

The clock updates every second using JavaScript.

```javascript
setInterval(updateClock,1000);
```

The `updateClock()` function gets the current time using the **Date object**, formats it, and updates the clock display dynamically. 

User preferences like **theme** and **time format** are saved using **localStorage**, so the settings remain even after refreshing the page. 

---

## 🎨 UI Overview

The UI includes:

* A centered clock container
* A gradient background
* Glassmorphism card effect
* Two buttons:

  * Toggle Theme
  * 12H / 24H format switch

These styles are handled using CSS transitions and gradients. 

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/digital-clock.git
```

2. Navigate to the project folder

```bash
cd digital-clock
```

3. Open the project

Simply open **index.html** in your browser. 

---

## 📸 Screenshot

*(Add a screenshot here after uploading the project to GitHub)*

---

## 📌 Future Improvements

* Add multiple time zones
* Add alarm feature
* Add stopwatch and timer
* Add customizable themes

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Developed by **[Your Name]**

If you like this project, feel free to ⭐ the repository!
