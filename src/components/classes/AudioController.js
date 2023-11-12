export class AudioController {
  constructor(audioBlob) {
    this.audio = new Audio();
    this.audio.src = URL.createObjectURL(audioBlob);
    this.audio.loop = true;
    this.isPlaying = false;
    this.targetVolume = 0;
    this.currentVolume = 0;
    this.animate = null;
    this.maxVolume = 0.2;
  }

  play() {
    if (!this.isPlaying) {
      this.audio.play();
      this.audio.loop = true;
      this.isPlaying = true;
      this.fade(true);
    }
  }

  pause() {
    if (this.isPlaying) {
      this.fade(false);
    }
  }

  setVolume(value) {
    if (value) {
      this.targetVolume = 1 * this.maxVolume;
      if (this.audio.paused) this.audio.play();
    } else {
      this.targetVolume = 0;
    }

    this.value = value;
    this.fade();
  }

  fade() {
    if(this.animate) cancelAnimationFrame(this.animate)
    const duration = 3000;
    const startTime = performance.now();
    const startVolume = this.currentVolume;

    const easeInExpo = t => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1)));
    const easeInOutCirc = t => (t < 0.5 ? 0.5 * (1 - Math.sqrt(1 - 4 * t * t)) : 0.5 * (Math.sqrt(-(2 * t - 3) * (2 * t - 1)) + 1));

    const easingFunction = this.value ? easeInExpo : easeInOutCirc;
    this.animate = timestamp => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      this.currentVolume = startVolume + (this.targetVolume - startVolume) * easingFunction(progress);

      this.audio.volume = this.currentVolume;

      if (progress < 1) {
        requestAnimationFrame(this.animate.bind(this));
      } else {
        if (!this.value && this.currentVolume === 0) {
          this.audio.pause();
          this.isPlaying = false;
        }
      }
    };
    requestAnimationFrame(this.animate.bind(this));
  }

  appendEqualizer(node) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 40;
    this.canvas.height = 40;
    this.context = this.canvas.getContext('2d');
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    this.source = this.audioContext.createMediaElementSource(this.audio);

    node.appendChild(this.canvas);

    const frequency = 0.15;
    let time = 0;

    const analyser = this.audioContext.createAnalyser();
    analyser.fftSize = 256;

    this.source.connect(analyser);
    analyser.connect(this.audioContext.destination);

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
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
      this.context.beginPath();
    
      const amplitude = getAmplitude() * 20.0;
      const saturation = Math.min(100, (amplitude / 3.0) * 100); 
    

      this.context.strokeStyle = `hsl(74.59deg ${saturation}% 50%)`;
    
      this.context.lineWidth = 2;
    
      for (let x = 0; x < this.canvas.width; x++) {
        const y = amplitude * Math.sin(frequency * x + time);
        this.context.lineTo(x, this.canvas.height / 2 + y);
      }
    
      this.context.stroke();
    
      time += 0.1;
      requestAnimationFrame(draw);
    };


    draw();
  }
}
