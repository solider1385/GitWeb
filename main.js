const coinCount = document.getElementById('coinCount');
const coinButton = document.getElementById('coinButton');

// Load saved count from local storage
let currentCount = localStorage.getItem('coinCount') || 18;
coinCount.textContent = currentCount + ' D';

coinButton.addEventListener('click', () => {
  currentCount++;
  coinCount.textContent = currentCount + ' D';
  // Save current count to local storage
  localStorage.setItem('coinCount', currentCount);
});
