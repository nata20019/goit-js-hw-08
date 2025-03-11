import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
playVideoAfterPause();

player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(timeIs, 500));

function timeIs(evt) {
  console.log(evt);
  console.log(evt.seconds);

  const currentTime = evt.seconds;
  localStorage.setItem(localStorageKey, JSON.stringify(currentTime));
}
function playVideoAfterPause() {
  const saveTime = localStorage.getItem(localStorageKey);
  if (saveTime) {
    const parsedCurrentTime = JSON.parse(saveTime);
    player.setCurrentTime(parsedCurrentTime);
  }
}
