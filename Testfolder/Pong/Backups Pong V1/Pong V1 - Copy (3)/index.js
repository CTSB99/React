document.onkeydown = detectKey;

const truePosTop = document.getElementById('paddle_1').offsetTop;
const truePosLeft = document.getElementById('paddle_1').offsetLeft;


var p1Height = (document.getElementById('paddle_1').clientHeight);
var p2Height = (document.getElementById('paddle_2').clientHeight);

var p1HeightInt = parseInt(p1Height, 10);
var p2HeightInt = parseInt(p2Height, 10);

var z = document.getElementById('board').clientHeight;

var y1 = p1HeightInt / 5;
var x1 = z / y1; //position change on w/s 

var y2 = p2HeightInt / 5;
var x2 = z / y2; //position change on i/k


function detectKey(e) {
    var posTop1 = document.getElementById('paddle_1').offsetTop;
    var posTop2 = document.getElementById('paddle_2').offsetTop;

    var p1Top = (document.getElementById('paddle_1').style.marginTop);

    var p1TopInt = parseInt(p1Top,10);

    


    var p2Top = (document.getElementById('paddle_2').style.marginTop);

    var p2TopInt = parseInt(p2Top,10);

    var p2Height = (document.getElementById('paddle_2').clientHeight);

    var p2HeightInt = parseInt(p2Height, 10);


    var zInt = parseInt(z, 10);

    e = e || window.event; // Keine Ahnung was das macht
    
    if (e.keyCode == '87') { //up

        if (p1TopInt < x1) {

        } else {
            document.getElementById('paddle_1').style.marginTop  = (posTop1-x1-truePosTop)+"px";
        }   
    }

    else if (e.keyCode == '83') {

        if (p1TopInt + x1 > zInt - p1HeightInt) {

        } else {
            document.getElementById('paddle_1').style.marginTop  = (posTop1+x1-truePosTop)+"px";
        }
    }

    if (e.keyCode == '73') {
        // up arrow

        if (p2TopInt < x2) {
            
        } else {
            document.getElementById('paddle_2').style.marginTop  = (posTop2-x2-truePosTop)+"px";
        }   
    }
    else if (e.keyCode == '75') {
        // down arrow

        if (p2TopInt + x2 > zInt - p2HeightInt) {
            
        } else {
            document.getElementById('paddle_2').style.marginTop  = (posTop2+x2-truePosTop)+"px";
        }
    }

    if (e.keyCode == '69') {
        console.log(p1Top);
        console.log(p1TopInt);
        console.log(p1Height);
        console.log(p1HeightInt);
        console.log(z);
    }
}

// function move_ball {
    
// }

