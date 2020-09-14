'use strict';

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`key[data-key]`);
  audio.play();
  keys.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
