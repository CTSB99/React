let gameState = 'start';
let paddle_1 = document.getElementById('paddle_1');
let paddle_2 = document.getElementById('paddle_2');
let board = document.getElementById('board');
let initial_ball = document.getElementById('ball');
let ball = document.getElementById('ball');
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
let initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;
let board_coord = board.getBoundingClientRect();
let paddle_common = document.querySelector('.paddle').getBoundingClientRect();
let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

document.addEventListener('keydown', (e) => {
    if (e.key == 'e') {
    console.log(gameState);
    gameState = gameState == 'start' ? 'play' : 'start';
    console.log(gameState);
    if (gameState == 'play') {
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Math.floor(Math.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }
  if (gameState == 'play') {
    if (e.key == 'w') {
      paddle_1.style.top =
        Math.max(
          board_coord.top,
          paddle_1_coord.top - window.innerHeight * 0.1
        ) + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    }
    if (e.key == 's') {
      paddle_1.style.top =
        Math.min(
          board_coord.bottom - paddle_common.height,
          paddle_1_coord.top + window.innerHeight * 0.1
        ) + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    }

    if (e.key == 'w') {
      paddle_2.style.top =
        Math.max(
          board_coord.top,
          paddle_2_coord.top - window.innerHeight * 0.1
        ) + 'px';
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
    if (e.key == 's') {
      paddle_2.style.top =
        Math.min(
          board_coord.bottom - paddle_common.height,
          paddle_2_coord.top + window.innerHeight * 0.1
        ) + 'px';
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
  }
});

function moveBall(dx, dy, dxd, dyd) {
  if (ball_coord.top <= board_coord.top) {
    dyd = 1;
  }
  if (ball_coord.bottom >= board_coord.bottom) {
    dyd = 0;
  }
  if (
    ball_coord.left <= paddle_1_coord.right &&
    ball_coord.top >= paddle_1_coord.top &&
    ball_coord.bottom <= paddle_1_coord.bottom
  ) {
    dxd = 1;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.right >= paddle_2_coord.left &&
    ball_coord.top >= paddle_2_coord.top &&
    ball_coord.bottom <= paddle_2_coord.bottom
  ) {
    dxd = 0;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.left <= board_coord.left ||
    ball_coord.right >= board_coord.right
  ) {
    gameState = 'start';

    ball_coord = initial_ball_coord;
    ball.style = initial_ball.style;
    return;
  }
  ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
  ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
  ball_coord = ball.getBoundingClientRect();
  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}