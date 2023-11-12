import AsyncLoader from '../classes/AsyncLoader';
import { AudioController } from '../classes/AudioController';

let initiated = false;

export const AudioEffect = button => {
  if (initiated) return;
  initiated = true;

  const manager = new AsyncLoader.manager();
  const loader = new AsyncLoader.loader(manager).setResponseType('blob');

  loader.load('/assets/audio/01.mp3', function (audio) {
    const controller = new AudioController(audio);
    let control = false;
    button.addEventListener('click', () => {
      control ? (control = false) : (control = true);
      controller.setVolume(control);
    });
    document.addEventListener(
      'click',
      () => {
        controller.appendEqualizer(document.querySelector('.wave'));
        if (controller.audio.paused) {
          controller.play();
          controller.setVolume(true);
          const info = button.parentNode.querySelector('.info');
          info.style.opacity = 0
          info.addEventListener('transitionend', info.remove)
          return;
        }
      },
      { once: true }
    );
  });
};
