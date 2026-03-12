function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Check if 12-hour format is enabled
    const is12Hour = localStorage.getItem('is12Hour') === 'true';
    let ampm = '';

    if (is12Hour) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
    }

    // Add leading zeros
    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    const time = is12Hour ? `${hours}:${minutes}:${seconds} ${ampm}` : `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = time;

    // Display date
    const dateOptions = { 
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined,dateOptions);
}

setInterval(updateClock,1000);

updateClock();

// Load preferences from localStorage
const savedTheme = localStorage.getItem('theme');
const savedFormat = localStorage.getItem('is12Hour');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}

if (savedFormat === 'true') {
    // Update button text if needed, but since it's toggle, maybe not
}

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Format toggle functionality
document.getElementById('format-toggle').addEventListener('click', function() {
    const is12Hour = localStorage.getItem('is12Hour') === 'true';
    const newFormat = !is12Hour;
    localStorage.setItem('is12Hour', newFormat.toString());
    updateClock(); // Update immediately
});