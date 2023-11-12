import AsyncLoader from '../classes/AsyncLoader';
import { AudioController } from '../classes/AudioController';

let initiated = false;

export const AudioEffect = button => {
  if (initiated) return;
  initiated = true;

  const info = button.parentNode.querySelector('.info');
  const loader = new AsyncLoader.loader().setResponseType('blob');

  loader.load(
    '/assets/audio/01.mp3',
    function (audio) {
      const controller = new AudioController(audio);
      info.style.opacity = 1;
      let control = false;
      button.addEventListener('click', () => {
        control ? (control = false) : (control = true);
        controller.setVolume(control);
      });

      document.addEventListener(
        'click',
        () => {
          window.addEventListener('blur', () => controller.audio.pause());
          window.addEventListener('focus', () => controller.audio.play());
          controller.appendEqualizer(document.querySelector('.wave'));
          if (controller.audio.paused) {
            controller.play();
            controller.setVolume(true);
            button.querySelector('.wave').innerText = ''
            info.style.opacity = 0;
            info.addEventListener('transitionend', info.remove);
            return;
          }
        },
        { once: true }
      );
    },
    function (xhr) {
      if (xhr.lengthComputable) {
        button.querySelector('.wave').innerText = ((xhr.loaded / xhr.total) * 100).toFixed(0);
      }
    }
  );
};
