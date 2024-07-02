document.addEventListener("DOMContentLoaded", () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
        currentDayElement.textContent = `Current Day: ${day}`;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});
