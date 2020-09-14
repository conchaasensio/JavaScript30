'use strict';

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return;
  ev.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
keys.forEach((key) => key.addEventListener('transitioned', removeTransition));
