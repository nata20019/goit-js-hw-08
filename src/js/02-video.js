// import Player from '@vimeo/player';
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// console.log(Player);
// player.on('play', function () {
//   console.log('played the video!');
// });

// const onPlay = function (data) {};

// player.on('play', onPlay);
// const currentTime = {
//   duration: 61.857,
//   percent: 0.049,
//   seconds: 3.034,
// };

// iframe.addEventListener('timeupdate', function () {
//   const currentTime = iframe.currentTime;
//   const totalTime = iframe.duration;
//   console.log(currentTime);

//   // Отримати елемент для відображення часу відтворення
//   const timeDisplay = document.querySelector('#time-display');

//   // Змінити текст елементу з часом відтворення
//   timeDisplay.textContent = `${currentTime} / ${totalTime}`;
// });

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
