var url = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&json=?";
var quoteField = document.getElementById("quote");
var authorField = document.getElementById("author");
var quoteButton = document.getElementById("quoteButton");
var tweetButton = document.getElementById("tweet");
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
      quoteField.innerHTML = "An error occured.  Please try again.";
      authorField.innerHTML = "";
    });
      	};
	
	quoteButton.addEventListener("click", getQuote);
	tweet.addEventListener("click", tweetQuote);


	function tweetQuote() {
		tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}`);
	}
	

