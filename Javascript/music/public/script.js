let audio, ctx, audioSrc, analyser, source, bufferLength, dataArray;

function init() {
  // Get Element
  audio = document.getElementById('audio');
  canvas = document.getElementById('canvas');

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

function start() {
  audio.src = './test.mp3';
  audio.play();
}

function stop() {
  audio.pause();
}
