$(document).ready(function() {
  $("#tweet-text").on("input", function(element) {
    let charCount = $(this).val().length;
    let charsLeft = 140 - charCount;

  let charLimit = $(this).parents("form").children(".newTweetBottom").children(".counter");

  charLimit.text(charsLeft);
  if (charsLeft < 0) {
    charLimit.css('color', 'red');
  } else {
    charLimit.css('color', '#545149');
  }
  });
});