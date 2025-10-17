
function updateTime() {
  document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
