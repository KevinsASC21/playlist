// Complete Day 1 goals here
let MJ = ["Beat It","Micheal Jackson","https://i3.ytimg.com/vi/WlTlUseVt7E/maxresdefault.jpg","https://www.youtube.com/watch?v=WlTlUseVt7E"]
let MJ2 = ["Billie Jean","Micheal Jackson","https://i3.ytimg.com/vi/OZGtRvYF-A4/maxresdefault.jpg","https://www.youtube.com/watch?v=OZGtRvYF-A4"]
let MJ3 = ["Thriller","Micheal Jackson","https://i3.ytimg.com/vi/BsuEjAw5hg0/maxresdefault.jpg","https://www.youtube.com/watch?v=BsuEjAw5hg0"]

// strip all this down and convert to Song object 
// Future Songs to add:
/*

QUEEN
Radio Ga Ga 
Bohemian Rhapsody
Don't Stop Me Now

George Micheal
Last Christmas
Careless Whisper

Tears For Fear
Everbyody wants to Rule The Woorld


*/



function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
