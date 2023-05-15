const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('popup-close');
const popupOverlay = document.getElementById('popup-overlay');

openPopupBtn.addEventListener('click', function() {
  popupOverlay.style.display = 'block';
});

closePopupBtn.addEventListener('click', function() {
  popupOverlay.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});