/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function renderTweets(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i]);
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
            <p>${tweet.created_at}</p>
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


$(document).ready(function() {

// Test / driver code (temporary)
const $tweets = renderTweets(tweetData);
console.log("tweet:--------------------------->", $tweets); // to see what it looks like
$('.tweets').append($tweets); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
//const $tweet = createTweetElement(tweetData);

});

