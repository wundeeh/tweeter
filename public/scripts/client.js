/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [];

function renderTweets(tweets) {
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
              <p class="userName">${tweet.user.name}</p>
            </div>
            <p class="handle">${tweet.user.handle}</p>
          </div>
          <div class="tweetContent">
            ${tweet.content.text}
          </div>
          <hr class="breakLine">
          <div class="tweetFooter">
            <p>${timeago.format(tweet.created_at)}</p>
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
  const payload = $(this).serialize();

  $.post("/tweets",
  payload,
);
})

});

