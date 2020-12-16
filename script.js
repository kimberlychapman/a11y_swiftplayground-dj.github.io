$(document).ready(function() {
  $('.side-panel-toggle').on('click', function() {
    $('.content').toggleClass('content-is-open');
  });
});

// function writeTitle(){
//     document.getElementById('function').innerHTML="func";
//     document.getElementById('function').style.color="white";
//     document.getElementById('function').style.borderBottom="solid magenta 2px";
//     document.getElementById('function').style.borderTop="solid magenta 2px";
//     document.getElementById('function').style.fontWeight="bold";
//     document.getElementById('function').style.backgroundColor="black";
// }
// function writeFunction(){
//     document.getElementById('function').innerHTML="Command";
//     document.getElementById('function').style.backgroundColor="#333";
//     document.getElementById('function').style.color="#eee";
//     document.getElementById('function').style.borderBottom="solid #222 1px";
//     document.getElementById('function').style.fontWeight="normal";
//     document.getElementById('function').style.borderTop="transparent";
// }
function countLoops(){
    document.getElementById('test').innerHTML="for i in 1 ... 4 {";
    document.getElementById('test').style.color="white";
    document.getElementById('test').style.borderBottom="solid white 2px";
    document.getElementById('test').style.borderTop="solid white 2px";
    document.getElementById('test').style.fontWeight="bold";
    document.getElementById('test').style.backgroundColor="black";
}
function totalLoops(){
    document.getElementById('test').innerHTML="Command";
    document.getElementById('test').style.backgroundColor="#333";
    document.getElementById('test').style.color="#eee";
    document.getElementById('test').style.borderBottom="solid #222 1px";
    document.getElementById('test').style.fontWeight="normal";
    document.getElementById('test').style.borderTop="transparent";
}
function runTest(){
    document.getElementById('test1').innerHTML="if &nbsp !minors {";
    document.getElementById('test1').style.color="aqua";
    document.getElementById('test1').style.borderBottom="solid aqua 2px";
    document.getElementById('test1').style.borderTop="solid aqua 2px";
    document.getElementById('test1').style.fontWeight="bold";
    document.getElementById('test1').style.backgroundColor="black";
}
function endTest(){
    document.getElementById('test1').innerHTML="Command";
    document.getElementById('test1').style.backgroundColor="#333";
    document.getElementById('test1').style.color="#eee";
    document.getElementById('test1').style.borderBottom="solid #222 1px";
    document.getElementById('test1').style.fontWeight="normal";
    document.getElementById('test1').style.borderTop="transparent";
}

function getTrack(){
    document.getElementById('test0').innerHTML="getSongRequest( )";
    document.getElementById('test0').style.color="lime";
    document.getElementById('test0').style.borderBottom="solid lime 2px";
    document.getElementById('test0').style.borderTop="solid lime 2px";
    document.getElementById('test0').style.fontWeight="bold";
    document.getElementById('test0').style.backgroundColor="black";   
}

function stopTrack(){
    document.getElementById('test0').innerHTML="Command";
    document.getElementById('test0').style.backgroundColor="#333";
    document.getElementById('test0').style.color="#eee";
    document.getElementById('test0').style.borderBottom="solid #222 1px";
    document.getElementById('test0').style.fontWeight="normal";
    document.getElementById('test0').style.borderTop="transparent";
}

function playExplicit(){
    document.getElementById('test2').innerHTML="playExplicit( ) }";
    document.getElementById('test2').style.color="red";
    document.getElementById('test2').style.borderBottom="solid red 2px";
    document.getElementById('test2').style.borderTop="solid red 2px";
    document.getElementById('test2').style.fontWeight="bold";
    document.getElementById('test2').style.backgroundColor="black";   
}

function stopExplicit(){
    document.getElementById('test2').innerHTML="Command";
    document.getElementById('test2').style.backgroundColor="#333";
    document.getElementById('test2').style.color="#eee";
    document.getElementById('test2').style.borderBottom="solid #222 1px";
    document.getElementById('test2').style.fontWeight="normal";
    document.getElementById('test2').style.borderTop="transparent";
}

function elseTrack(){
    document.getElementById('test3').innerHTML="else if areMinors( ) {";
    document.getElementById('test3').style.color="yellow";
    document.getElementById('test3').style.borderBottom="solid yellow 2px";
    document.getElementById('test3').style.borderTop="solid yellow 2px";
    document.getElementById('test3').style.fontWeight="bold";
    document.getElementById('test3').style.backgroundColor="black";   
}

function elsePlay(){
    document.getElementById('test3').innerHTML="Command";
    document.getElementById('test3').style.backgroundColor="#333";
    document.getElementById('test3').style.color="#eee";
    document.getElementById('test3').style.borderBottom="solid #222 1px";
    document.getElementById('test3').style.fontWeight="normal";
    document.getElementById('test3').style.borderTop="transparent";
}

function playClean(){
    document.getElementById('test4').innerHTML="playClean( ) }&nbsp }";
    document.getElementById('test4').style.color="magenta";
    document.getElementById('test4').style.borderBottom="solid magenta 2px";
    document.getElementById('test4').style.borderTop="solid magenta 2px";
    document.getElementById('test4').style.fontWeight="bold";
    document.getElementById('test4').style.backgroundColor="black";   
}

function stopClean(){
    document.getElementById('test4').innerHTML="Command";
    document.getElementById('test4').style.backgroundColor="#333";
    document.getElementById('test4').style.color="#eee";
    document.getElementById('test4').style.borderBottom="solid #222 1px";
    document.getElementById('test4').style.fontWeight="normal";
    document.getElementById('test4').style.borderTop="transparent";
}