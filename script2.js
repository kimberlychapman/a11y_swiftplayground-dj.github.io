$(document).ready(function() {
    $('.side-panel-toggle').on('click', function() {
      $('.content').toggleClass('content-is-open');
    });
  });
  
  function allowDrop(ev) {
      ev.preventDefault();
  }
  
  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
    var origThing = document.getElementById(data);
    var newThing = origThing.cloneNode(true);
      ev.target.appendChild(newThing);
  }
  
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
    //   document.getElementById('test').innerHTML="for i in 1 ... 4 {";
      document.getElementById('test').style.color="white";
      document.getElementById('test').style.borderBottom="solid transparent 2px"; 
      document.getElementById('test').style.borderTop="solid #eee 2px";

      document.getElementById('test0').style.color="white";
      document.getElementById('test0').style.borderBottom="solid 2px transparent";
      document.getElementById('test0').style.borderBottom="solid transparent 2px";

      document.getElementById('test1').style.color="white";
 
      document.getElementById('test2').style.color="#eee";
      document.getElementById('test2').style.borderBottom="solid #eee 2px";

    //   document.getElementById('test3').style.borderTop="solid #eee 2px";
      document.getElementById('test3').style.color="#eee";

      document.getElementById('test4').style.color="#eee";

      document.getElementById('test10').style.color="#eee";
    //   document.getElementById('test4').style.borderBottom="solid #eee 2px";

      document.getElementById('test5').style.color="white";
      document.getElementById('test5').style.borderBottom="solid transparent 2px"; 

      document.getElementById('test6').style.color="white";
      document.getElementById('test6').style.borderBottom="solid transparent 2px"; 

      document.getElementById('test7').style.color="white";
      document.getElementById('test7').style.borderBottom="solid transparent 2px"; 

      document.getElementById('test8').style.color="white";
      document.getElementById('test8').style.borderBottom="solid transparent 2px";

      document.getElementById('test9').style.color="white";
      document.getElementById('test9').style.borderBottom="solid transparent 2px";
  }
  
  function totalLoops(){
    //   document.getElementById('test').innerHTML="Queue";
      // document.getElementById('test').style.backgroundColor="#333";
      document.getElementById('test').style.color="transparent";
      document.getElementById('test').style.borderBottom="solid #222 1px";
      document.getElementById('test').style.fontWeight="normal";
      document.getElementById('test').style.borderTop="transparent";

      document.getElementById('test0').style.color="transparent";
      document.getElementById('test0').style.borderBottom="solid #222 1px";
      document.getElementById('test0').style.fontWeight="normal";
      document.getElementById('test0').style.borderTop="transparent";

      document.getElementById('test1').style.color="transparent";
      document.getElementById('test1').style.borderBottom="solid #222 1px";
      document.getElementById('test1').style.fontWeight="normal";
      document.getElementById('test1').style.borderTop="transparent";

      document.getElementById('test2').style.color="transparent";
      document.getElementById('test2').style.borderBottom="solid #222 2px";
      document.getElementById('test2').style.fontWeight="normal";

      document.getElementById('test3').style.borderTop="transparent";
      document.getElementById('test3').style.borderBottom="solid #222 2px";
      document.getElementById('test3').style.color="transparent";

      document.getElementById('test4').style.borderTop="transparent";
      document.getElementById('test4').style.borderBottom="solid #222 2px";
      document.getElementById('test4').style.color="transparent";

      document.getElementById('test10').style.borderTop="transparent";
      document.getElementById('test10').style.borderBottom="solid #222 2px";
      document.getElementById('test10').style.color="transparent";

      document.getElementById('test5').style.borderTop="transparent";
      document.getElementById('test5').style.borderBottom="solid #222 2px";
      document.getElementById('test5').style.color="transparent";

      document.getElementById('test6').style.borderTop="transparent";
      document.getElementById('test6').style.borderBottom="solid #222 2px";
      document.getElementById('test6').style.color="transparent";


      document.getElementById('test7').style.borderTop="transparent";
      document.getElementById('test7').style.borderBottom="solid #222 2px";
      document.getElementById('test7').style.color="transparent";

      document.getElementById('test8').style.borderTop="transparent";
      document.getElementById('test8').style.borderBottom="solid #222 2px";
      document.getElementById('test8').style.color="transparent";

      document.getElementById('test9').style.borderTop="transparent";
      document.getElementById('test9').style.borderBottom="solid #222 2px";
      document.getElementById('test9').style.color="transparent";
    //   document.get1px solid #222;
  }
  
  function runTest(){
    //   document.getElementById('test1').innerHTML="if &nbsp !minors {";
    //   document.getElementById('test1').style.color="aqua";
      document.getElementById('test1').style.borderBottom="solid aqua 2px";
      document.getElementById('test1').style.borderTop="solid aqua 2px";
      document.getElementById('test1').style.fontWeight="bold";
      // document.getElementById('test1').style.backgroundColor="black";
  }
  function endTest(){
      document.getElementById('test1').innerHTML="Queue";
      // document.getElementById('test1').style.backgroundColor="#333";
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
      // document.getElementById('test0').style.backgroundColor="black";   
  }
  
  function stopTrack(){
      document.getElementById('test0').innerHTML="Queue";
      // document.getElementById('test0').style.backgroundColor="#333";
      document.getElementById('test0').style.color="#eee";
      document.getElementById('test0').style.borderBottom="solid #222 1px";
      document.getElementById('test0').style.fontWeight="normal";
      document.getElementById('test0').style.borderTop="transparent";
  }
  
//   function showInt(){
    //   document.getElementById('test2').innerHTML="playExplicit( ) }";
    //   document.getElementById('test2').style.color="#eee";
    //   document.getElementById('test2').style.borderBottom="solid #eee 2px";
    //   document.getElementById('test2').style.borderTop="solid #eee 2px";
    //   document.getElementById('test2').style.fontWeight="bold";
      // document.getElementById('test2').style.backgroundColor="black";   
//   }
  
//   function hideInt(){
    //   document.getElementById('test2').innerHTML="Queue";
      // document.getElementById('test2').style.backgroundColor="#333";
    //   document.getElementById('test2').style.color="transparent";
    //   document.getElementById('test2').style.borderBottom="solid #222 2px";
    //   document.getElementById('test2').style.fontWeight="normal";
    //   document.getElementById('test2').style.borderTop="transparent";
//   }
  
//   function showWhile(){
    //   document.getElementById('test3').innerHTML="else if areMinors( ) {";
    //   document.getElementById('test3').style.color="#eee";
    //   document.getElementById('test3').style.borderBottom="solid #eee 2px";
    //   document.getElementById('test3').style.borderTop="solid #eee 2px";
    //   document.getElementById('test3').style.fontWeight="bold";
      // document.getElementById('test3').style.backgroundColor="black";   
//   }
  
//   function hideWhile(){
    //   document.getElementById('test3').innerHTML="Queue";
      // document.getElementById('test3').style.backgroundColor="#333";
    //   document.getElementById('test3').style.color="#eee";
    //     document.getElementById('test3').style.color="transparent";
    //   document.getElementById('test3').style.borderBottom="solid #222 1px";
    //   document.getElementById('test3').style.fontWeight="normal";
//       document.getElementById('test3').style.borderTop="transparent";
//   }
  
  function playClean(){
      document.getElementById('test4').innerHTML="playClean( ) }&nbsp }";
      document.getElementById('test4').style.color="magenta";
      document.getElementById('test4').style.borderBottom="solid magenta 2px";
      document.getElementById('test4').style.borderTop="solid magenta 2px";
      document.getElementById('test4').style.fontWeight="bold";
      // document.getElementById('test4').style.backgroundColor="black";   
  }
  
  function stopClean(){
      document.getElementById('test4').innerHTML="Queue";
      // document.getElementById('test4').style.backgroundColor="#333";
      document.getElementById('test4').style.color="#eee";
      document.getElementById('test4').style.borderBottom="solid #222 1px";
      document.getElementById('test4').style.fontWeight="normal";
      document.getElementById('test4').style.borderTop="transparent";
  }
  
  $('.main-nav').on('click',function(){
      $('ul').slideToggle(280);
    });
  
  function showCode1(){
      document.getElementById('thing6').style.color="lime";
      document.getElementById('thing6').style.border="1px solid lime";
  }
  
  function showCode2(){
      document.getElementById('thing7').style.color="aqua";
      document.getElementById('thing7').style.border="1px solid aqua";
  }
  
  function showCode3(){
      document.getElementById('thing8').style.color="red";
      document.getElementById('thing8').style.border="1px solid red";
  }
  
  function showCode4(){
      document.getElementById('thing9').style.color="yellow";
      document.getElementById('thing9').style.border="1px solid yellow";
  }
  
  function showCode5(){
      document.getElementById('thing10').style.color="magenta";
      document.getElementById('thing10').style.border="1px solid magenta";
  }
  
  function playSound1(){
      var firstsound=document.getElementById('minors');
      firstsound.play();
  }
  
  function stopSound1(){
      var firstsound=document.getElementById('minors');
      firstsound.pause();
      firstsound.currentTime = 0;
  }
  
  function playSound2(){
      var nextsound=document.getElementById('college');
      nextsound.play();
  }
  
  function stopSound2(){
      var nextsound=document.getElementById('college');
      nextsound.pause();
     nextsound.currentTime = 0;
  }
  
  function playSound3(){
      var thensound=document.getElementById('college');
      thensound.play();
  }
  
  function stopSound3(){
      var thensound=document.getElementById('college');
      thensound.pause();
     thensound.currentTime = 0;
  }
  
  function playSound4(){
      var finallysound=document.getElementById('college');
      finallysound.play();
  }
  
  function stopSound4(){
      var finallysound=document.getElementById('college');
      finallysound.pause();
     finallysound.currentTime = 0;
  }
  
  function playTrack1(){
      var track1=document.getElementById('wap-clean');
      track1.play();
      document.getElementById('speaker1').src="img/spotify-speaker.png";
  }
  
  function endTrack1(){
      var track1=document.getElementById('wap-clean');
      track1.pause();
      track1.currentTime = 0;
      document.getElementById('speaker1').src="img/spotify-play.png";
  }
  
  function playTrack2(){
      var track2=document.getElementById('wap-explicit');
      track2.play();
      document.getElementById('speaker2').src="img/spotify-speaker.png";
  }
  
  function endTrack2(){
      var track2=document.getElementById('wap-explicit');
      track2.pause();
      track2.currentTime = 0;
      document.getElementById('speaker2').src="img/spotify-play.png";
  }
  
  function playTrack3(){
      var track3=document.getElementById('night-explicit');
      track3.play();
      document.getElementById('speaker3').src="img/spotify-speaker.png";
  }
  
  function endTrack3(){
      var track3=document.getElementById('night-explicit');
      track3.pause();
      track3.currentTime = 0;
      document.getElementById('speaker3').src="img/spotify-play.png";
  }
  
  function playTrack4(){
      var track4=document.getElementById('right-explicit');
      track4.play();
      document.getElementById('speaker4').src="img/spotify-speaker.png";
  }
  function endTrack4(){
      var track4=document.getElementById('right-explicit');
      track4.pause();
      track4.currentTime = 0;
      document.getElementById('speaker4').src="img/spotify-play.png";
  }

//   function showList(){
//   document.getElementById('drop-box7').innerHTML="var winners=[1,2,3,4,5,6,7,8,9,10,11,12,<br>13,14,15,16]";
//   document.getElementById('drop-box7').style.color="white";
//   }

//   function hideList(){
//     document.getElementById('drop-box7').innerHTML="test";
//     document.getElementById('drop-box7').style.color="transparent";
//     }

    function showCounter(){
    // document.getElementById('drop-box7').innerHTML="var winners=[1,2,3,4,5,6,7,8,9,10,11,12,<br>13,14,15,16]";
    document.getElementById('drop-box7').style.color="white";
    // document.getElementById('drop-box8').innerHTML="var currentRound:<br>Int=0 &nbsp Champion=4";
    document.getElementById('drop-box8').style.color="white";
    // document.getElementById('drop-box9').innerHTML="while (currentRound &lt Champion) {";
    document.getElementById('drop-box9').style.color="white";
    // document.getElementById('drop-box10').innerHTML="for team in winners {";
    document.getElementById('drop-box10').style.color="white";
    }
        
    function hideCounter(){
    // document.getElementById('drop-box7').innerHTML="test";
    document.getElementById('drop-box7').style.color="transparent";
    // document.getElementById('drop-box8').innerHTML="test";
    document.getElementById('drop-box8').style.color="transparent";
    // document.getElementById('drop-box9').innerHTML="test";
    document.getElementById('drop-box9').style.color="transparent";
    // document.getElementById('drop-box10').innerHTML="test";
    document.getElementById('drop-box10').style.color="transparent";
    }

    function showZero(){
    document.getElementById('counter0').style.color="black";
    }

    function hideZero(){
    document.getElementById('counter0').style.color="transparent";
    }

    function roundOne(){
    document.getElementById('counter1').style.color="black";
    document.getElementById('ball1').src="img/eight.png";
    }

    function hideRoundOne(){
    document.getElementById('counter1').style.color="transparent";
    document.getElementById('ball1').src="img/bball.jpeg";
    }

    function roundTwo(){
    document.getElementById('counter2').style.color="black";
    document.getElementById('ball2').src="img/four.png";
    }

    function hideRoundTwo(){
    document.getElementById('counter2').style.color="transparent";
    document.getElementById('ball2').src="img/bball.jpeg";
    }

    function roundThree(){
    document.getElementById('counter3').style.color="black";
    document.getElementById('ball3').src="img/two.png";
    }

    function hideRoundThree(){
    document.getElementById('counter3').style.color="transparent";
    document.getElementById('ball3').src="img/bball.jpeg";
    }

    function roundFour(){
    document.getElementById('counter4').style.color="black";
    document.getElementById('ball4').src="img/one.png";
    }

    function hideRoundFour(){
    document.getElementById('counter4').style.color="transparent";
    document.getElementById('ball4').src="img/bball.jpeg";
    }

    function showPlay(){
        document.getElementById('thing3').style.color="#eee";
    }

    function hidePlay(){
        document.getElementById('thing3').style.color="transparent";
    }

    function showWin(){
        document.getElementById('thing11').style.color="#eee";
    }

    function hideWin(){
        document.getElementById('thing11').style.color="transparent";
    }

    function showRemoveTeam(){
        document.getElementById('thing12').style.color="#eee";
    }

    function hideRemoveTeam(){
        document.getElementById('thing12').style.color="transparent";
    }

    function showElseTeams(){
        document.getElementById('thing5').style.color="#eee";
    }

    function hideElseTeam(){
        document.getElementById('thing5').style.color="transparent";
    }

    function showWinnersMove(){
        document.getElementById('thing14').style.color="#eee";
    }

    function hideWinnersMove(){
        document.getElementById('thing14').style.color="transparent";
    }

    function showCurrentRound(){
        document.getElementById('thing21').style.color="#eee";
    }

    function hideCurrentRound(){
        document.getElementById('thing21').style.color="transparent";
    }
  // 