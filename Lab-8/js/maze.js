

$(document).ready(function() {
    // set up click event handler for start square
    $('#start').on('click', function() {
      // reset maze walls to white
      $('.boundary').removeClass('youlose');
  
      // reset status message
      $('#status').text('Click the "S" to begin.');
  
      // set flag to track whether any walls have been touched
      touchedWall = false;
    });
  
    // set up mouseover event handler for maze walls
    $('.boundary').on('mouseover', function() {
      // turn wall red on mouseover
      $(this).addClass('youlose');
  
      // update status message and set touchedWall flag
      $('#status').text('You lose!');
      touchedWall = true;
    });
  
    // set up event handler for reaching end of maze
    $('#end').on('mouseover', function() {
      if (!touchedWall) {
        // user made it to the end without touching any walls
        $('#status').text('You win!');
      }
    });
  
    // set up mouseleave event handler for maze area
    $('#maze').on('mouseleave', function(event) {
      if (event.target === this && event.relatedTarget.tagName !== 'HTML') {
        // user moved mouse out of maze area
        // handle losing logic here
        lose();
      }
    });
  
    // initialize touchedWall flag to false
    var touchedWall = false;
  
    // lose function to turn all walls red and update status message
    function lose() {
      $('.boundary').addClass('youlose');
      $('#status').text('You lose!');
    }
  });
  












// $(document).ready(function(){

//     var hitWall = false;
//     var mouseOut = false;

//     function lose() {
//         $('.boundary').addClass('youlose');
//         $('#status').text('You lose!');
//       }
      
//       $('#maze').on('mouseleave', function(event) {
//         if (event.target === this && event.relatedTarget.tagName !== 'HTML') {
//           lose();
//         }
//       });
      
      

//     $("#boundary1").mouseover(function(){
//         $(this).addClass("youlose");
//     });

//     $(".boundary").mouseover(function(){
//         hitWall = true;
//         $(this).addClass("youlose");
//     });

//     $("#end").mouseover(function(){

//     if(!hitWall && mouseOut){
//         $("#status").text("You win! :]");
//     }else
//         $("#status").text("You lose! [:");
//     });

//     $("#start").click(function(){
//         hitWall = false;
//         if(!mouseOut){
//         $(".boundary").removeClass("youlose");
//         $("#status").text("Click the \"S\" to begin.");
//         }
//     });


// });









// $(document).ready(function() {
//     var isGameStarted = false;
//     var isGameWon = false;
//     var hasLost = false;
  
//     $("#start").click(function() {
//       isGameStarted = true;
//       isGameWon = false;
//       hasLost = false;
//       $(".boundary").removeClass("youlose");
//       $("#status").text("Click the \"S\" to begin.");
//     });
  
//     $("#end").mouseover(function() {
//       if (isGameStarted && !hasLost) {
//         isGameWon = true;
//         $("#status").text("You win!");
//       }
//     });
  
//     $(".boundary").mouseover(function() {
//       if (isGameStarted && !isGameWon) {
//         hasLost = true;
//         $(".boundary").addClass("youlose");
//         $("#status").text("You lose! Click the \"S\" to play again.");
//       }
//     });
  
//     $(document).mousemove(function(event) {
//       if (isGameStarted && !hasLost && !isGameWon && event.target.id !== "maze") {
//         hasLost = true;
//         $(".boundary").addClass("youlose");
//         $("#status").text("You lose! Click the \"S\" to play again.");
//       }
//     });
//   });
  