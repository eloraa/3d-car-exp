import AsyncLoader from '../classes/AsyncLoader';
import { AudioController } from '../classes/AudioController';

let initiated = false;

export const AudioEffect = button => {
  if (!button) return;
  if (initiated) return;
  initiated = true;

  const info = button.parentNode.querySelector('.info');
  const wave = button.parentNode.querySelector('.wave');
  const loader = new AsyncLoader.loader().setResponseType('arraybuffer');

  return new Promise(res => {
    loader.load(
      '/assets/audio/bgm.mp3',
      function (audio) {
        const controller = new AudioController(audio);
        window.controller = controller;
        info.style.opacity = 1;
        let control = true;

        document.addEventListener(
          'click',
          () => {
            button.addEventListener('click', () => {
              control ? (control = false) : (control = true);
              controller.setVolume(control);
            });
            window.addEventListener('blur', () => controller.pause());
            window.addEventListener('focus', () => controller.play());
            wave.innerText = '';
            controller.append(document.querySelector('.wave')).then(() => {
              if (controller.isPlaying) {
                controller.setVolume.bind(controller)(true);
                info.style.opacity = 0;
                info.addEventListener('transitionend', info.remove);
              }
            });
          },
          { once: true }
        );
        res(controller);
      },
      function (xhr) {
        if (xhr.lengthComputable) {
          wave.innerText = ((xhr.loaded / xhr.total) * 100).toFixed(0);
        }
      }
    );
  });
};

export const bindEvent = button => {
  const eff = AudioEffect(button);

  if (eff) {
    return new Promise(res => {
      eff.then(controller => {
        const mouseDown = () => {
          document.querySelector('.overlay').style.opacity = 1;
          document.querySelector('.top').style.transform = 'translateY(0%)';
          document.querySelector('.bottom').style.transform = 'translateY(0%)';
          button && (button.style.transform = 'translateY(-150%)');
          controller.mouseDown()
        };

        const mouseUp = () => {
          document.querySelector('.overlay').style.opacity = 0;
          document.querySelector('.top').style.transform = 'translateY(-100%)';
          document.querySelector('.bottom').style.transform = 'translateY(100%)';
          button && (button.style.transform = 'translateY(0%)');
          // controller.mouseUp()
        };
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mouseup', mouseUp);
        document.addEventListener('touchstart', mouseDown);
        document.addEventListener('touchend', mouseUp);
        res(controller)
      });
    });
  }
};
