/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [];


const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


function renderTweets(tweets) {
  $(".tweets").empty();
  for (let i = 0; i < tweets.length; i++) {
    const newTweet = createTweetElement(tweets[i]);
    $('.tweets').append(newTweet);
    
  }
}

function createTweetElement(tweet) {


  const markup = `
  <article class="tweet">
          <div class="tweetHeader">
            <div class="tweetHeaderAvatar">
              <img class="tweetProfilePicture" src=${tweet.user.avatars} alt="avatar">
              <p class="userName">${escape(tweet.user.name)}</p>
            </div>
            <p class="handle">${escape(tweet.user.handle)}</p>
          </div>
          <div class="tweetContent">
            ${escape(tweet.content.text)}
          </div>
          <hr class="breakLine">
          <div class="tweetFooter">
            <p>${escape(timeago.format(tweet.created_at))}</p>
            <div class="icons">
              <i class="fa-solid fa-flag flag"></i>
              <i class="fa-solid fa-retweet retweet"></i>
              <i class="fa-solid fa-heart heart"></i>
            </div>
          </div>
        </article>
  `;

  //console.log(markup);
  return markup;
}

function tweetLoader() {
  $.get( "/tweets", function( data ) {
   renderTweets(data);
  });
}


$(document).ready(function() {

tweetLoader();

$(".tweetSend").submit( function(event) {
  event.preventDefault();
  
  if (!$(this).children(".newTweetTop").children("#tweet-text").val()) {
    return $('.errorText').text('Please enter a valid tweet').slideDown();
  }

  if ($(this).children(".newTweetTop").children("#tweet-text").val().length > 140) {
    return $('.errorText').text('Your Tweet exceeds the maximum character limit').slideDown();
  }
  
  const payload = $(this).serialize();
  $.post("/tweets", payload).then(function() {
    $(".errorText").slideUp();
    
    tweetLoader();
  })
})


});

