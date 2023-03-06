


//font timer

let blingCheckbox = document.getElementById("blingcheck");
let click = document.getElementById("click");
let myText = document.getElementById("myTextarea");
let biggerButton = document.getElementById("bigger");

let fontSize = 12;
let intervalId = null;

function onClick() {
  if (blingCheckbox.checked) {
    myText.style.color = "green";
    myText.style.textDecoration = "underline";
    myText.style.fontWeight = "bold";
  } else {
    myText.style.color = "black";
    myText.style.textDecoration = "none";
    myText.style.fontWeight = "normal";
  }
}






// final for fun
let blingCheck = document.getElementById("blingCheck");
let textArea = document.getElementById("textArea");
let bigButton = document.getElementById("biggerButton");
let igpayButton = document.getElementById("igpayButton");
let malkovitchButton = document.getElementById("malkovitchButton");

// Bigger Decorations button
let currentSize = 12;
bigButton.addEventListener("click", function(){
  currentSize += 2;
  textArea.style.fontSize = currentSize + "pt";
});

// Bling checkbox
blingCheck.addEventListener("change", function(){
  if (blingCheck.checked){
    textArea.style.color = "green";
    textArea.style.textDecoration = "underline";
    document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
  } else {
    textArea.style.color = "";
    textArea.style.textDecoration = "";
    document.body.style.backgroundImage = "";
  }
});

// Igpay Atinlay button
function igpayAtinlay(text) {
  let words = text.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstChar = word[0];
    let restOfWord = word.substring(1);
    if ("aeiouAEIOU".indexOf(firstChar) !== -1) {
      result += word + "ay";
    } else {
      result += restOfWord + firstChar + "ay";
    }
    if (i < words.length - 1) {
      result += " ";
    }
  }
  return result;
}

igpayButton.addEventListener("click", function(){
  let text = textArea.value;
  let result = igpayAtinlay(text);
  textArea.value = result;
});

// Malkovitch button
function malkovitch(text) {
  let words = text.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
      result += "Malkovich";
    } else {
      result += word;
    }
    if (i < words.length - 1) {
      result += " ";
    }
  }
  return result;
}

malkovitchButton.addEventListener("click", function(){
  let text = textArea.value;
  let result = malkovitch(text);
  textArea.value = result;
});
