'use strict'

const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&key="

function randomizer() {
  var temp = Math.floor(Math.random() * 10000);
  return url + temp;
}

function getQuote() {
  // identify html objects
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let address = document.getElementById("address");

  let randomQuote = randomizer();

  // get quote from randomQuote

  // update quote and author section
  console.log('quote button working');
  quote.innerHTML = "quote update working";
  author.innerHTML = "author update working";
  address.innerHTML = randomQuote;

};

//
//
// $(document).ready(function() {
//   $("#generate").on("click", function() {
//       $.getJSON(randomURL, function(json) {
//         $(".text").html(JSON.stringify(json.quoteText));
//
//         let author = json.quoteAuthor;
//   //removes quotes from author name and returns unknown when no author name is provided
//         if (author) {
//           var newAuthor = author.replace(/"/i, "");
//         } else {
//           newAuthor = "Unknown";
//         }
//
//         $(".author").html("-" + " " + newAuthor);
//
//         const tweetUrl = "https://twitter.com/intent/tweet?text=";
//
//         let newArr = [];
//
//         let str1 = json.quoteText;
//
//         let splitStr = str1.split(" ");
//
//         let x = splitStr.length - 1;
//   //this code replaces whitespace with %20 so it is in the proper twitter URL format. A better way to do this would be to use the "replace" method
//         for (var i = 0; i < splitStr.length - 1; i++) {
//           newArr.push(splitStr[i] + "%20");
//         }
//         newArr.push(splitStr[x]);
//
//         let newStr = newArr.join("");
//
//         let newUrl = tweetUrl + newStr;
//   //this function updates the twitter button to link it to the new URL which will present a new tweet autopopulated with the current quote
//         $("#tweetlink").attr("href", newUrl);
//       });
//     });
//   });
