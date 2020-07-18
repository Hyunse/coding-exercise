let audio, ctx, audioSrc, analyser, source, bufferLength, dataArray, drawVisual;
const WIDTH = 1024;
const HEIGHT = 350;
const INTERVAL = 128;

function start() {
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  audio.volume = 0.3;
  audio.play();

  draw();
}

function stop() {
  audio.pause();
}

function init() {
  initAudio();
  initCanvas();
}

function initAudio() {
  // Get Element
  audio = document.getElementById('audio');
  audio.src = '/test2.mp3';

  // Get Conetxt & analyser
  ctx = new AudioContext();
  analyser = ctx.createAnalyser();
  analyser.fftSize = 2048; // Fast Fourier Transform

  // Get Data Array
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  // Source Connect
  source = ctx.createMediaElementSource(audio);
  source.connect(analyser);
  source.connect(ctx.destination);
}

function initCanvas() {
  // Get Element & Access Context
  canvas = document.getElementById('canvas');
  canvasCtx = canvas.getContext('2d');
}

function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteFrequencyData(dataArray);

  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';

  var x =0;

  for (var i = 0; i < 32; i++) {
    var y = (dataArray[i] - 128) * 2 + 5;
    if (y <= 1) {
      y = 2;
    }

    canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    canvasCtx.fillRect(x, HEIGHT - y, WIDTH / 32 - 2, y);
    x = x + (WIDTH / 32);
  }
}

