document.onkeydown = detectKey;

var truePosTop = document.getElementById('paddle_1').offsetTop;
var truePosLeft = document.getElementById('paddle_1').offsetLeft;

function detectKey(e) {
    var posLeft1 = document.getElementById('paddle_1').offsetLeft;
    var posTop1 = document.getElementById('paddle_1').offsetTop;
    var posLeft2 = document.getElementById('paddle_2').offsetLeft;
    var posTop2 = document.getElementById('paddle_2').offsetTop;
    var x = 10;
    e = e || window.event;
    if (e.keyCode == '87') {
        // up arrow
        document.getElementById('paddle_1').style.marginTop  = (posTop1-x-truePosTop)+"px";
        console.log("Top " + posTop1);
        console.log("Left " + posLeft1)
    }
    else if (e.keyCode == '83') {
        // down arrow
        document.getElementById('paddle_1').style.marginTop  = (posTop1+x-truePosTop)+"px";
        console.log("Top " + posTop1);
        console.log("Left " + posLeft1)
    }

    if (e.keyCode == '73') {
        // up arrow
        document.getElementById('paddle_2').style.marginTop  = (posTop2-x-truePosTop)+"px";
        console.log("Top " + posTop2);
        console.log("Left " + posLeft2)
    }
    else if (e.keyCode == '75') {
        // down arrow
        document.getElementById('paddle_2').style.marginTop  = (posTop2+x-truePosTop)+"px";
        console.log("Top " + posTop2);
        console.log("Left " + posLeft2)
    }
}



