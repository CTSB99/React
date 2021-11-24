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
let dx ;
let dy ;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);
let p1Score = document.getElementById('Player_1_Score');
let p2Score = document.getElementById('Player_2_Score');
let speed = 2.5


document.addEventListener('keydown', (e) => {
    if (e.key == 'e') {
    console.log(gameState);
    gameState = gameState == 'start' ? 'play' : 'start';
    console.log(gameState);
    if (gameState == 'play') {
      requestAnimationFrame(() => {
        dx = speed;
        dy = speed;
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

    if (e.key == 'i') {
      paddle_2.style.top =
        Math.max(
          board_coord.top,
          paddle_2_coord.top - window.innerHeight * 0.1
        ) + 'px';
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
    if (e.key == 'k') {
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
  if (ball_coord.top <= board_coord.top)                              // Ball bounce on top
  {                            
    dyd = 1;
  }
  if (ball_coord.bottom >= board_coord.bottom)                        // Ball bounce on bottom
  {  
    dyd = 0;
  }
  if (                                                                // Ball bounce on left Paddle
    ball_coord.left <= paddle_1_coord.right &&
    ball_coord.top >= paddle_1_coord.top &&
    ball_coord.bottom <= paddle_1_coord.bottom
  ) {
    dxd = 1;
    dx = speed;
    dy = speed;
    document.getElementById('message2').style.display = "block";
  }
  if (                                                                // Ball bounce on right Paddle
    ball_coord.right >= paddle_2_coord.left &&
    ball_coord.top >= paddle_2_coord.top &&
    ball_coord.bottom <= paddle_2_coord.bottom
  ) {
    dxd = 0;
    dx = speed;
    dy = speed;
    document.getElementById('message').style.display = "block";
  }
  if (                                                                // Ball out on left or right
    ball_coord.left <= board_coord.left ||
    ball_coord.right >= board_coord.right
  ) {
    if (ball_coord.left <= board_coord.left)                          // Point for Player 2; increase Score
      {
      p2Score.innerHTML ++; 
      console.log("P1: " + p1Score);
      console.log("P2: " + p2Score);
    } else if (ball_coord.right >= board_coord.right)                 // Point for Player 1; increase Score
      {
      p1Score.innerHTML ++;
      console.log("P1: " + p1Score);
      console.log("P2: " + p2Score);
    }

    gameState = 'start';                                              // Reset Game after Point
    ball_coord = initial_ball_coord;
    ball.style = initial_ball.style;
    document.getElementById('message1').style.display = "none";
    document.getElementById('message2').style.display = "none";
    document.getElementById('message2').style.backgroundColor = "green";

    return;
  }

  ball_coord = ball.getBoundingClientRect();

  ball.style.top = ball_coord.top + dy * speed * (dyd == 0 ? -1 : 1) + 'px';
  ball.style.left = ball_coord.left + dx * speed *(dxd == 0 ? -1 : 1) + 'px'; // Direction change after bounce

  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}


// Todo

// fix 'e' reset

// fix Ball starting point

// improve Colision testing / trefferabfrage

// Slider for Speed

// responsiveness

// 2 Balls? 4 Paddles

// Message "Game Started"

// more css (color, shape of paddles and ball etc)

// new score system (more points for certain areas)

// Score events / end game after certain score / color change

// computer controlled paddle

// controll panel with mouse