
playAudio.onclick = function() {
  var el = new Audio();
  el.mozAudioChannelType = 'content';
  el.src = 'song.mp3';
  el.play();
};