$(document).ready(function() {
  // Counts the amount of characters in the text field
  $("#tweet-text").on("input", function(element) {
    let charCount = $(this).val().length;
    let charsLeft = 140 - charCount;

  // A variable assigned to the number at the bottom right that represents the amount of characters left 
  let charLimit = $(this).parents("form").children(".newTweetBottom").children(".counter");

  // Turns the charLimit number red when going overboard
  charLimit.text(charsLeft);
  if (charsLeft < 0) {
    charLimit.css('color', 'red');
  } else {
    charLimit.css('color', '#545149');
  }
  });
});
