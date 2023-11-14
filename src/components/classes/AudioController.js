export class AudioController {
  constructor(audioBuffer) {
    this.audioBuffer = audioBuffer;
    this.isPlaying = false;
    this.currentVolume = 0;
    this.currentFrequency = 24000;
    this.initialized = false;
    this.anim = {};
  }

  mouseDown() {
    if (this.forced) return;
    if (!this.isPlaying) return;
    this.onDown = true;
    this.animate(.5, 275, 800, 'audio');
  }
  mouseUp() {
    if (this.forced) return;
    if (!this.isPlaying) return;
    this.onDown = false;
    this.animate(.5, 24000, 800, 'audio');
  }

  play() {
    this.source = this.audioContext.createBufferSource();
    this.effect()
    this.source.buffer = this.buffer;
    this.isPlaying = true;

    this.source.onended = () => {
      if (!this.intention) {
        this.pausedAt = 0;
        this.startedAt = 0;
        this.play();
      }
      this.intention = false;
    };

    if (this.pausedAt) {
      this.startedAt = Date.now() - this.pausedAt;
      this.source.start(0, this.pausedAt / 1000);
      this.effect();
      this.equalize();
    } else {
      this.startedAt = Date.now();
      this.source.start(0);
      this.effect();
      this.equalize();
    }
  }

  pause() {
    this.intention = true;
    this.source.stop(0);
    this.pausedAt = Date.now() - this.startedAt;
    this.isPlaying = false;
  }

  setVolume(value) {
    let target = 0;
    if (value) {
      target = 1;
      if (!this.isPlaying) this.play();
    } else {
      target = 0;
    }

    this.value = value;
    this.fade(target);
  }

  fade(target) {
    this.animate(target, this.currentFrequency, 3000, 'audio');
    this.isvol = true;
  }

  animate(target, targetFrequency, duration, type, easing, force) {
    if (!this.isPlaying) return;
    this.forced = force;
    if (!this.initialized) return;
    if (this.anim[type]) cancelAnimationFrame(this.anim[type]);
    const startTime = performance.now();
    const startValue = this.currentVolume;
    const startFrequency = this.currentFrequency;

    const easingFunction = {
      easeInExpo: t => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
      easeInOutCirc: t => (t < 0.5 ? 0.5 * (1 - Math.sqrt(1 - 4 * t * t)) : 0.5 * (Math.sqrt(-(2 * t - 3) * (2 * t - 1)) + 1)),
      easeInOut: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    };

    const getEasing = () => (this.value ? easingFunction.easeInExpo : easingFunction.easeInOutCirc);

    this.anim[type] = timestamp => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);

      this.currentVolume = startValue + (target - startValue) * getEasing()(progress);
      this.currentFrequency = startFrequency + (targetFrequency - startFrequency) * easingFunction[easing || 'easeInOutCirc'](progress);

      if (type === 'audio') {
        this.effect(this.currentVolume, this.currentFrequency);
      }

      if (progress < 1) {
        requestAnimationFrame(this.anim[type]);
      } else {
        if (!this.value && this.currentVolume === 0) {
          this.pause();
        }
      }
    };

    requestAnimationFrame(this.anim[type]);
  }

  append(node) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 40;
    this.canvas.height = 40;
    this.context = this.canvas.getContext('2d');
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    node.appendChild(this.canvas);

    return new Promise(r => {
      this.audioContext.decodeAudioData(this.audioBuffer, buffer => {
        this.source = this.audioContext.createBufferSource();
        this.buffer = buffer;
        this.source.buffer = buffer;

        this.play();
        this.effect();
        this.equalize();
        this.initialized = true;
        r();
      });
    });
  }

  equalize() {
    const frequency = 0.15;
    let time = 0;
    const analyser = this.audioContext.createAnalyser();
    analyser.fftSize = 256;

    this.source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const getAmplitude = () => {
      analyser.getByteFrequencyData(dataArray);

      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i] / 255;
      }
      return sum / dataArray.length;
    };

    const draw = () => {
      if (this.frame) cancelAnimationFrame(this.frame);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.beginPath();

      const amplitude = getAmplitude() * 60.0 * this.gainNode.gain.value;
      const saturation = Math.min(100, (amplitude / 2.0) * 100);

      this.context.strokeStyle = `hsl(0deg ${saturation}% 45.69%)`;

      this.context.lineWidth = 2;

      for (let x = 0; x < this.canvas.width; x++) {
        const y = amplitude * Math.sin(frequency * x + time);
        this.context.lineTo(x, this.canvas.height / 2 + y);
      }

      this.context.stroke();

      time += 0.1;
      this.frame = requestAnimationFrame(draw);
    };

    draw();
  }

  effect(value, frequency) {
    if (!isNaN(value)) {
      this.gainNode.gain.value = value;
      this.filter.frequency.value = frequency;
      return;
    }

    if (!this.filter) this.filter = this.audioContext.createBiquadFilter();
    this.filter.frequency.value = this.currentFrequency;
    this.filter.Q.value = 1;

    if (!this.gainNode) this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = this.currentVolume;

    this.filter.connect(this.gainNode);
    this.source.connect(this.filter);
    this.gainNode.connect(this.audioContext.destination);
  }
}
