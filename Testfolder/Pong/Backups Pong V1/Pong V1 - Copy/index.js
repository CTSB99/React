document.onkeydown = detectKey;

var truePosTop = document.getElementById('myId').offsetTop;
var truePosLeft = document.getElementById('myId').offsetLeft;
function detectKey(e) {
    var posLeft = document.getElementById('myId').offsetLeft;
    var posTop = document.getElementById('myId').offsetTop;
    var x = 10;
    e = e || window.event;
    if (e.keyCode == '87') {
        // up arrow
        document.getElementById('myId').style.marginTop  = (posTop-x-truePosTop)+"px";
        console.log("Top " + posTop);
        console.log("Left " + posLeft)
    }
    else if (e.keyCode == '83') {
        // down arrow
        document.getElementById('myId').style.marginTop  = (posTop+x-truePosTop)+"px";
        console.log("Top " + posTop);
        console.log("Left " + posLeft)
    }
    else if (e.keyCode == '65') {
       // left arrow
        document.getElementById('myId').style.marginLeft  = (posLeft-x-truePosLeft)+"px";
        console.log("Top " + posTop);
        console.log("Left " + posLeft)
    }
    else if (e.keyCode == '68') {
       // right arrow
        document.getElementById('myId').style.marginLeft  = (posLeft+x-truePosLeft)+"px";
        console.log("Top " + posTop);
        console.log("Left " + posLeft)
    }
}