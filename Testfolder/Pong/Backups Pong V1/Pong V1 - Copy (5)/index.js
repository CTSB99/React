document.onkeydown = detectKey;
// Board and Paddle Vars
const truePosTop = document.getElementById('paddle_1').offsetTop;
const truePosLeft = document.getElementById('paddle_1').offsetLeft;

var p1Height = (document.getElementById('paddle_1').clientHeight);
var p2Height = (document.getElementById('paddle_2').clientHeight);

var p1HeightInt = parseInt(p1Height, 10);
var p2HeightInt = parseInt(p2Height, 10);

var boardHeight = document.getElementById('board').clientHeight;
var boardWidth = document.getElementById('board').clientWidth;


var y1 = p1HeightInt / 5;
var x1 = boardHeight / y1; //position change on w/s 

var y2 = p2HeightInt / 5;
var x2 = boardHeight / y2; //position change on i/k



// Ball Vars
var ballHeight = document.getElementById('ball').clientHeight;
var ballWidth = document.getElementById('ball').clientWidth;

let ballTopOffset = document.getElementById('ball').offsetTop;
let ballTopMargin = document.getElementById('ball').style.marginTop;

let ballMargin = document.getElementById('ball').style.margin;

let ballColor = document.getElementById('ball').style.backgroundColor;

var randomStart;

var ball = document.getElementById("ball");

var left 
var up 

var circle = 32;



function detectKey(e) {
    var posTop1 = document.getElementById('paddle_1').offsetTop;
    var posTop2 = document.getElementById('paddle_2').offsetTop;

    var p1Top = (document.getElementById('paddle_1').style.marginTop);

    var p1TopInt = parseInt(p1Top,10);

    
    var p2Top = (document.getElementById('paddle_2').style.marginTop);

    var p2TopInt = parseInt(p2Top,10);

    var p2Height = (document.getElementById('paddle_2').clientHeight);

    var p2HeightInt = parseInt(p2Height, 10);


    var boardHeightInt = parseInt(boardHeight, 10);

    e = e || window.event;
    
    if (e.keyCode == '87') { //up

        if (p1TopInt < x1) {
            document.getElementById('paddle_1').style.marginTop  = 0;
        } else {
            document.getElementById('paddle_1').style.marginTop  = (posTop1-x1-truePosTop)+"px";
        }   
    }

    else if (e.keyCode == '83') {

        if (p1TopInt + x1 > boardHeightInt - p1HeightInt) {
            document.getElementById('paddle_1').style.marginTop = (boardHeight - p1Height - 1 +"px");
        } else {
            document.getElementById('paddle_1').style.marginTop  = (posTop1+x1-truePosTop)+"px";
        }
    }

    if (e.keyCode == '73') {
        // up arrow

        if (p2TopInt < x2) {
            document.getElementById('paddle_2').style.marginTop  = 0;
        } else {
            document.getElementById('paddle_2').style.marginTop  = (posTop2-x2-truePosTop)+"px";
        }   
    }
    else if (e.keyCode == '75') {
        // down arrow

        if (p2TopInt + x2 > boardHeightInt - p2HeightInt) {
            document.getElementById('paddle_2').style.marginTop = (boardHeight - p2Height -1 +"px");
        } else {
            document.getElementById('paddle_2').style.marginTop  = (posTop2+x2-truePosTop)+"px";
        }
    }

    if (e.keyCode == '69') { // E, Test Button
        // console.log("P1 Top Margin: " + p1Top);
        // console.log("P1 Top Margin as int: " + p1TopInt);
        // console.log("P1 Height: " + p1Height);
        // console.log("P1 Height as int: " + p1HeightInt);
        // console.log("Board Height: " + boardHeight);
        // console.log("Board Height as int: " + boardHeightInt);
        // console.log("P1 Top Offset / True Pos: " + truePosTop);
        console.log("ballTopOffset: " + ballTopOffset);
        console.log("ballTopMargin: " + ballTopMargin);
    }

    if (e.keyCode == '82') { // R, reload

        setBall();
        
    }

    if (e.keyCode == '84') { // T, move Ball 1px up
        
        setInterval(() => {
            moveBall();
        }, 100);
    }
}


// Ball logic


function setBall() {

    document.getElementById('ball').style.marginTop = ((boardHeight / 2) - ballHeight / 2) + 'px';

    document.getElementById('ball').style.marginLeft = ((boardWidth / 2) - ballWidth / 2) + 'px';

    getRandomNumber();

    console.log(randomStart);

}

function getRandomNumber() {
    randomStart = (Math.floor(Math.random()*circle)) ;
    // randomStart = 9;
}

function moveBall() {

    if (randomStart % 8 === 0) {
        setBall();
    }

    else if (randomStart > 0 && randomStart <= 8) {

        var left = Math.floor(randomStart);
        var up = Math.floor(8 - randomStart);

        var moveLeft = parseInt(ball.style.marginLeft, 10);
        moveLeft += left;
        ball.style.marginLeft = moveLeft.toString() + 'px';

        var moveUp = parseInt(ball.style.marginTop, 10);
        moveUp -= up;
        ball.style.marginTop = moveUp.toString() + 'px';

    } else if (randomStart > 8 && randomStart <= 16) {
        
        var left = Math.floor(randomStart) - 8;
        var up = Math.floor(16 - randomStart);

        var moveLeft = parseInt(ball.style.marginLeft, 10);
        moveLeft += left;
        ball.style.marginLeft = moveLeft.toString() + 'px';

        var moveUp = parseInt(ball.style.marginTop, 10);
        moveUp += up;
        ball.style.marginTop = moveUp.toString() + 'px';

    } else if (randomStart > 16 && randomStart <= 24) {
        
        var left = Math.floor(randomStart) - 24;
        var up = Math.floor(16 - randomStart);

        var moveLeft = parseInt(ball.style.marginLeft, 10);
        moveLeft += left;
        ball.style.marginLeft = moveLeft.toString() + 'px';

        var moveUp = parseInt(ball.style.marginTop, 10);
        moveUp -= up;
        ball.style.marginTop = moveUp.toString() + 'px';

    } else if (randomStart > 24 && randomStart <= 32) {
        
        var left = Math.floor(randomStart) - 32;
        var up = Math.floor(24 - randomStart);

        var moveLeft = parseInt(ball.style.marginLeft, 10);
        moveLeft += left;
        ball.style.marginLeft = moveLeft.toString() + 'px';

        var moveUp = parseInt(ball.style.marginTop, 10);
        moveUp += up;
        ball.style.marginTop = moveUp.toString() + 'px';
    } 
    // console.log("left " + left);
    // console.log("up " + up);
}




