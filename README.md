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
git clone https://github.com/AnkushMane345/digital-clock.git
```

2. Navigate to the project folder

```bash
cd digital-clock
```

3. Open the project

Simply open **index.html** in your browser. 

---

## 📸 Screenshot
<img width="1914" height="868" alt="Screenshot 2026-03-12 134954" src="https://github.com/user-attachments/assets/72e1c512-9e01-4935-91bb-f18dca9c4fd9" />

---
<img width="1919" height="866" alt="Screenshot 2026-03-12 135006" src="https://github.com/user-attachments/assets/f6ac5553-d01d-4cdb-855a-98cd37ba8dec" />

---
<img width="1919" height="868" alt="Screenshot 2026-03-12 135016" src="https://github.com/user-attachments/assets/fe5f0595-1012-4d2e-8b86-abd23172f9c3" />


---

## 📌 Future Improvements

* Add multiple time zones
* Add alarm feature
* Add stopwatch and timer
* Add customizable themes

---


## 👨‍💻 Author

Developed by **Ankush Mane**

If you like this project, feel free to ⭐ the repository!
