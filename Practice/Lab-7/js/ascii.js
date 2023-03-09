
// const { ANIMATIONS } = require('./animations.js');






//animaion
const animationSelect = document.querySelector('#animation-select');

animationSelect.addEventListener('change', () => {
    const selectedAnimation = animationSelect.value;
  
    if (selectedAnimation === 'custom') {
      textArea.value = '';
    } else {
      textArea.value = ANIMATIONS[selectedAnimation];
    }
  
    textArea.dataset.originalText = textArea.value;
  });




// // Get references to the relevant elements on the page
// const textArea = document.querySelector('textarea');
// const playButton = document.querySelector('#play');
// const pauseButton = document.querySelector('#pause');
// const stopButton = document.querySelector('#stop');
// const restartButton = document.querySelector('#restart');

// let animationId; // Used to store the ID of the setInterval function

// // Parse the text in the text area to create an array of frames
// function parseFrames() {
//   const frames = textArea.value.trim().split(/\n====*\n/);
//   return frames;
// }

// // Display the specified frame
// function showFrame(frame) {
//   textArea.value = frame;
// }

// // The current frame index
// let currentFrameIndex = 0;

// // Start the animation
// function startAnimation() {
//   const frames = parseFrames();

//   // Use setInterval to repeatedly show the frames
//   animationId = setInterval(() => {
//     showFrame(frames[currentFrameIndex]);
//     currentFrameIndex++;

//     // Loop back to the beginning if we've reached the end of the frames
//     if (currentFrameIndex === frames.length) {
//       currentFrameIndex = 0;
//     }
//   }, 250);

// //   animationInterval = setInterval(runAnimation, ANIMATION_INTERVALS[animationSpeedSelect.value]);

// }

// // Pause the animation
// function pauseAnimation() {
//   clearInterval(animationId);
// }

// // Stop the animation
// function stopAnimation() {
//     clearInterval(animationId);
//     currentFrameIndex = 0;
//     const originalText = textArea.dataset.originalText;
//     textArea.value = originalText;
//   }
  

// // Restart the animation
// function restartAnimation() {
//   stopAnimation();
//   startAnimation();
// }

// // Add event listeners to the buttons
// playButton.addEventListener('click', startAnimation);
// pauseButton.addEventListener('click', pauseAnimation);
// stopButton.addEventListener('click', stopAnimation);
// restartButton.addEventListener('click', restartAnimation);




// animationSelect.addEventListener('change', () => {
//   const selectedAnimation = animationSelect.value;

//   if (selectedAnimation === 'custom') {
//     textArea.value = '';
//   } else {
//     textArea.value = ANIMATIONS[selectedAnimation];
//   }

//   textArea.dataset.originalText = textArea.value;
// });



// //font size

// const fontSizeDropdown = document.querySelector('#fontsize');
// // const textArea = document.querySelector('textarea');

// fontSizeDropdown.addEventListener('change', () => {
//   textArea.style.fontSize = fontSizeDropdown.value + 'pt';
// });


// //speed
// // global variable to keep track of whether animation is running
// let isPlaying = false;

// // add event listener to the "Turbo" checkbox
// document.getElementById("turbo").addEventListener("click", function() {
//   // check if the checkbox is checked
//   if (this.checked) {
//     // change delay to 50ms
//     clearInterval(animationInterval);
//     animationInterval = setInterval(animate, 50);
//   } else {
//     // change delay back to 250ms
//     clearInterval(animationInterval);
//     animationInterval = setInterval(animate, 250);
//   }
// });

// // function to start the animation
// function startAnimation() {
//   isPlaying = true;
//   // start animation with current delay
//   animationInterval = setInterval(animate, delay);
// }

// // function to stop the animation
// function stopAnimation() {
//   isPlaying = false;
//   // stop animation and clear text area
//   clearInterval(animationInterval);
//   document.getElementById("textarea").value = originalText;
// }

// // function to animate the text
// function animate() {
//   // get the animation frames from the textarea value
//   let frames = document.getElementById("textarea").value.split("=====\n");

//   // get the current frame index and increment it
//   let currentFrame = parseInt(document.getElementById("frame").value);
//   currentFrame = (currentFrame + 1) % frames.length;

//   // update the textarea with the new frame
//   document.getElementById("textarea").value = frames[currentFrame];

//   // update the frame number
//   document.getElementById("frame").value = currentFrame;
// }

// // set the initial delay and animation frames
// let delay = 250;
// let originalText = document.getElementById("textarea").value;

// // start the animation when the "Start" button is clicked
// document.getElementById("start").addEventListener("click", function() {
//   if (!isPlaying) {
//     startAnimation();
//   }
// });

// // stop the animation when the "Stop" button is clicked
// document.getElementById("stop").addEventListener("click", function() {
//   stopAnimation();
// });

// // set the default font size to "Medium"
// document.getElementById("fontsize").value = "12";

// // add event listener to the font size dropdown
// document.getElementById("fontsize").addEventListener("change", function() {
//   // set the font size of the textarea
//   let fontSize = this.value;
//   document.getElementById("textarea").style.fontSize = fontSize;
// });

// // set the initial checkbox state to unchecked
// document.getElementById("turbo").checked = false;


// //control enabling/disabling

// // Disable Stop button initially
// document.getElementById("stop").disabled = true;

// // Enable/disable controls based on animation state
// function toggleControls(disableStart, disableStop, disableSelect) {
//   document.getElementById("start").disabled = disableStart;
//   document.getElementById("stop").disabled = disableStop;
//   document.getElementById("animation").disabled = disableSelect;
// }

// // Attach event listeners to Play and Stop buttons
// document.getElementById("start").addEventListener("click", function() {
//   toggleControls(true, false, true);
//   startAnimation();
// });

// document.getElementById("stop").addEventListener("click", function() {
//   toggleControls(false, true, false);
//   stopAnimation();
// });

// // Attach event listener to Animation dropdown
// document.getElementById("animation").addEventListener("change", function() {
//   stopAnimation();
//   document.getElementById("text-area").value = ANIMATIONS[this.value];
// });

// // Function to start animation
// function startAnimation() {
//   // Code to start animation
// }

// // Function to stop animation
// function stopAnimation() {
//   // Code to stop animation
//   toggleControls(false, true, false);
// }



// console.log(ANIMATIONS);


const { ANIMATIONS } = require('./animations.js');


// Get references to the relevant elements on the page
const textArea = document.querySelector('#ascii-input');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const stopButton = document.querySelector('#stop-button');
const restartButton = document.querySelector('#restart-button');

// Parse the text in the text area to create an array of frames
function parseFrames() {
  const frames = textArea.value.trim().split(/\n====*\n/);
  return frames;
}

// Display the specified frame
function showFrame(frame) {
  textArea.value = frame;
}

// The current frame index
let currentFrameIndex = 0;

// Used to store the ID of the setInterval function
let animationId;

// Start the animation
function startAnimation() {
  const frames = parseFrames();
  // Use setInterval to repeatedly show the frames
  animationId = setInterval(() => {
    showFrame(frames[currentFrameIndex]);
    currentFrameIndex++;
    // Loop back to the beginning if we've reached the end of the frames
    if (currentFrameIndex === frames.length) {
      currentFrameIndex = 0;
    }
  }, 250);
}

// Pause the animation
function pauseAnimation() {
  clearInterval(animationId);
}

// Stop the animation
function stopAnimation() {
  clearInterval(animationId);
  currentFrameIndex = 0;
  const originalText = textArea.dataset.originalText;
  textArea.value = originalText;
}

// Restart the animation
function restartAnimation() {
  stopAnimation();
  startAnimation();
}

// Add event listeners to the buttons
playButton.addEventListener('click', startAnimation);
pauseButton.addEventListener('click', pauseAnimation);
stopButton.addEventListener('click', stopAnimation);
restartButton.addEventListener('click', restartAnimation);

//animation selector
// const animationSelect = document.querySelector('#animation-select');

animationSelect.addEventListener('change', () => {
  const selectedAnimation = animationSelect.value;
  if (selectedAnimation === 'custom') {
    textArea.value = '';
  } else {
    textArea.value = ANIMATIONS[selectedAnimation];
  }
  textArea.dataset.originalText = textArea.value;
});

//font size selector
const fontSizeDropdown = document.querySelector('#fontsize');
fontSizeDropdown.addEventListener('change', () => {
  textArea.style.fontSize = fontSizeDropdown.value + 'pt';
});

// Turbo checkbox
const turboCheckbox = document.querySelector('#turbo');
turboCheckbox.addEventListener('change', () => {
  const isChecked = turboCheckbox.checked;
  // Clear the old interval and start a new one with the new delay
  clearInterval(animationId);
  if (isChecked) {
    animationId = setInterval(() => {
      showFrame(frames[currentFrameIndex]);
      currentFrameIndex++;
      if (currentFrameIndex === frames.length) {
        currentFrameIndex = 0;
      }
    }, 50);
  } else {
    startAnimation();
  }
});
