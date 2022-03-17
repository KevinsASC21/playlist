// Complete Day 1 goals here
// let MJ = ["Beat It","Michael Jackson","https://i3.ytimg.com/vi/WlTlUseVt7E/maxresdefault.jpg","4:19","https://www.youtube.com/watch?v=WlTlUseVt7E"]
// let MJ2 = ["Billie Jean","Michael Jackson","https://i3.ytimg.com/vi/OZGtRvYF-A4/maxresdefault.jpg","4:54","https://www.youtube.com/watch?v=OZGtRvYF-A4"]
// let MJ3 = ["Thriller","Michael Jackson","https://i3.ytimg.com/vi/BsuEjAw5hg0/maxresdefault.jpg","5:57","https://www.youtube.com/watch?v=BsuEjAw5hg0"]
// let GM = ["Careless Whisper","George Michael","https://img.youtube.com/vi/1m6en0SQNFs/maxresdefault.jpg","5:00","https://www.youtube.com/watch?v=1m6en0SQNFs"]
// let GM2 = ["Last Christmas","Wham!","https://img.youtube.com/vi/E8gmARGvPlI/maxresdefault.jpg","4:38","https://www.youtube.com/watch?v=E8gmARGvPlI"]
// let Q = ["Radio Ga Ga","Queen","https://img.youtube.com/vi/7S8vbkTOWnQ/sddefault.jpg","5:43","https://www.youtube.com/watch?v=7S8vbkTOWnQ"]
// let Q2 = ["Bohemian Rhapsody","Queen","https://i3.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg","5:59","https://www.youtube.com/watch?v=fJ9rUzIMcZQ"]
// let Q3 = ["Don't Stop Me Now","Queen","https://i3.ytimg.com/vi/HgzGwKwLmgM/hqdefault.jpg","3:32","https://www.youtube.com/watch?v=HgzGwKwLmgM"]

let MJ = {title:"Beat It",
          artist:"Michael Jackson",
          img_link:"https://i3.ytimg.com/vi/WlTlUseVt7E/maxresdefault.jpg",
          length:"4:19",
          music_link:"https://www.youtube.com/watch?v=WlTlUseVt7E"}

let MJ2 = {title:"Billie Jean",
           artist:"Michael Jackson",
           img_link:"https://i3.ytimg.com/vi/OZGtRvYF-A4/maxresdefault.jpg",
           length:"4:54",
           music_link:"https://www.youtube.com/watch?v=OZGtRvYF-A4"}

let MJ3 = {title:"Thriller",
           artist:"Michael Jackson",
           img_link:"https://img.youtube.com/vi/aUD0juRwb3I/maxresdefault.jpg",
           length:"5:57",
           music_link:"https://www.youtube.com/watch?v=BsuEjAw5hg0"}

let MJ4 = {title:"Remember The Time",
          artist:"Michael Jackson",
          img_link:"https://img.youtube.com/vi/qM19eRgOK1Q/maxresdefault.jpg",
          length:"4:00",
          music_link:"https://www.youtube.com/watch?v=qM19eRgOK1Q&list=PLmKxR1vlf4cxoXWq4sv2hQdFUKGLsBisv&index=5"}

let MJ5 = {title:"Smooth Criminal",
           artist:"Michael Jackson",
           img_link:"https://img.youtube.com/vi/-DlMoJ2V6uk/maxresdefault.jpg",
           length:"4:17",
           music_link:"https://www.youtube.com/watch?v=tOgftEf7UDg"}

let MJ6 = {title:"Don’t Stop 'Til You Get Enough",
           artist:"Michael Jackson",
           img_link:"https://img.youtube.com/vi/n3qQtSRmHxo/maxresdefault.jpg",
           length:"6:05",
           music_link:"https://www.youtube.com/watch?v=n3qQtSRmHxo"}

// let GM = {title:"Careless Whisper",
//           artist:"George Michael",
//           img_link:"https://img.youtube.com/vi/1m6en0SQNFs/maxresdefault.jpg",
//           length:"5:00",
//           music_link:"https://www.youtube.com/watch?v=1m6en0SQNFs"}

// let GM2 = {title:"Last Christmas",
//            artist:"Wham!",
//            img_link:"https://img.youtube.com/vi/E8gmARGvPlI/maxresdefault.jpg",
//            length:"4:38",
//            music_link:"https://www.youtube.com/watch?v=E8gmARGvPlI"}

// let Q = {title:"Radio Ga Ga",
//          artist:"Queen",
//          img_link:"https://img.youtube.com/vi/7S8vbkTOWnQ/sddefault.jpg",
//          length:"5:43",
//          music_link:"https://www.youtube.com/watch?v=7S8vbkTOWnQ"}

// let Q2 = {title:"Bohemian Rhapsody",
//           artist:"Queen",
//           img_link: "https://i3.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
//           length: "5:59",
//           music_link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"}

// let Q3 = {title: "Don't Stop Me Now",
//           artist:"Queen",
//           img_link: "https://i3.ytimg.com/vi/HgzGwKwLmgM/hqdefault.jpg",
//           length:"3:32",
//           music_link:"https://www.youtube.com/watch?v=HgzGwKwLmgM"}


// let defaultPlaylist = [MJ,MJ2,MJ3,GM,GM2,Q,Q2,Q3];

let defaultPlaylist = [MJ,MJ2,MJ3,MJ4,MJ5,MJ6];


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

*/


// function displaySongInfo() {
//   defaultPlaylist.forEach(function(song){
//   $('.images').append(`<img src=${song[2]}></img>`);
//   $('.songs').append(`<p>${song[0]}</p>`);
//   $('.artists').append(`<p>${song[1]}</p>`);
//   $('.lengths').append(`<p>${song[3]}</p>`);
//   $('.links').append(`<a href="${song[4]}">Play</a>`);
// });
  
  
function displaySongInfo() {
  defaultPlaylist.forEach(function(song){
  console.log(song);
  $('.images').append(`<img src=${song.img_link}></img>`);
  $('.songs').append(`<p>${song.title}</p>`);
  $('.artists').append(`<p>${song.artist}</p>`);
  $('.lengths').append(`<p>${song.length}</p>`);
  $('.links').append(`<a href="${song.music_link}"> ▶PLAY</a>`);
  $('#totalL').html(`Current Playlist Length: ${defaultPlaylist.length} songs`);
});
  
  
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
  
  let userSong = $('.title').val();
  let userArtist = $('.artist').val();
  let userImage = $('.image').val();
  let userLength = $('.length').val();
  let userLink = $('.link').val();
  
  let userFullSong = {title: userSong, artist: userArtist, img_link: userImage, length: userLength, music_link: userLink};
  
  console.log("testing here add song funct");
  
  defaultPlaylist.push(userFullSong);
  
  console.log(defaultPlaylist);
  
//   defaultPlaylist.forEach(function(song){
//   $('.images').append(`<img src=${song[2]}></img>`);
//   $('.songs').append(`<p>${song[0]}</p>`);
//   $('.artists').append(`<p>${song[1]}</p>`);
//   $('.lengths').append(`<p>${song[3]}</p>`);
//   $('.links').append(`<a href="${song[4]}">Play</a>`);
  
// });

  // Complete Day 3 goals inside this function
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

$(".delete").click(function() {
  defaultPlaylist.pop();
    console.log("seperator");
  console.log(defaultPlaylist);
    console.log("seperator");
  emptySongInfo();
  displaySongInfo();
});

$("#shuffle").click(function() {
  shuffle(defaultPlaylist);
    console.log("seperator");
  console.log(defaultPlaylist);
    console.log("seperator");
  emptySongInfo();
  displaySongInfo();
});

$(".add").click(function() {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
