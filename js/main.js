var url = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&json=?";

function getQuote() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("quote").innerHTML = '"' + data.quoteText + '"';
      if (data.quoteAuthor === "" || data.quoteAuthor == null) {
        document.getElementById("author").innerHTML = "- Anonymous";
      } else {
        document.getElementById("author").innerHTML = data.quoteAuthor;
      }
    })
    .catch(function() {
      document.getElementById("quote").innerHTML = "An error occured.  Please try again.";
    });
};
