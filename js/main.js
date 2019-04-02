// the web address of the api
var url = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&json=?";

// declaring variables for dom objects (quotefield, authorifled, quotebutton)
var quoteField = document.getElementById("quote");
var authorField = document.getElementById("author");
var quoteButton = document.getElementById("quoteButton");

// updates the document with a random color and random bg image
function viewUpdate() {
  // sets color of body to blank with 50% opacity
  var newColor = [0, 0, 0, 0.5];
  // this function uses a for loop to update background color
  for (var i = 0; i < 3; i++) {
    var color = Math.floor(Math.random() * (255 - 1) + 0);
    newColor[i] = color;
  };
  // turns the color into a string to be passed on to ...
  var color = "rgba(" + newColor + ")";
  // this updates the body#main with the new color in line 19 above
  document.getElementById("body").style.background = color;
  // choose a random number between 1 - 23
  var randNum = Math.floor(Math.random() * 22 + 1);
  // updates the background image to one that matches the rand num above
  return document.body.style.backgroundImage = 'url("./img/' + randNum + '.png")';
};

function getQuote() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var quote = data.quoteText;
      var author = data.quoteAuthor;
      quoteField.innerHTML = '"' + quote + '"';
      if (author === "" || author == null) {
        authorField.innerHTML = "- Anonymous";
      } else {
        authorField.innerHTML = "- " + data.quoteAuthor;
      }
    })
    .catch(function() {
      if (quoteField.innerHTML == "An error occured.  Please try again.") {
        getQuote();
      }
    });
  viewUpdate();
};

// tweet button
function displayQuote() {
  var quote = document.getElementById("quote").textContent;
  var author = document.getElementById("author").textContent;
  window.open(`https://twitter.com/intent/tweet?text=${quote} \n \n + ${author}`);
};

// events
window.onload = getQuote();
quoteButton.addEventListener("click", getQuote);
tweet.addEventListener("click", displayQuote);
