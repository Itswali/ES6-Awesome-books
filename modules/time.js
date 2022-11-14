function refreshTime() {
  const timeDisplay = document.getElementById('date-time');
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dateString = new Date().toLocaleString('en-us', dateOptions);
  timeDisplay.textContent = dateString;
}

function initTime() {
  refreshTime();
  setInterval(refreshTime, 1000);
} 

// initTime();

export { refreshTime, initTime };