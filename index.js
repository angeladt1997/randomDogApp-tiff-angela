'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
//for of loop thru responseJson.message

function displayResults(responseJson) {
  console.log(responseJson.message);
  //replace the existing image with the new one
  for (let i = 0; i < responseJson.message.length; i++){
  $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`)
  }
  // $('.results-img').replaceWith(
  //   `<img src="${responseJson.message[]}" class="results-img">`
  // )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

// function fetchNumber(){
//   let num = null; //or #if that doesn't work
//   console.log("working")
// }

//create data store arr
//create variable for number in fetch
//create function that takes in fetchNumber and outputs fetchNumber pictures


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

//The then() method returns a Promise. It takes up to two arguments:
//callback functions for the success & failure cases of the Promise.