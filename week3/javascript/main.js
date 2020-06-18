/* 1. Search soundcloud*/
//let input = "";
let inpu = document.querySelector(".input-search").value;

  document.querySelector(".js-submit").addEventListener('click', function(e){
   let inpu = document.querySelector(".input-search").value;
    console.log(inpu);
    SoundCloudAPI.getTrack(inpu);
    input = "";
    document.querySelector(".js-search-results").textContent = ' ';
});
  document.querySelector(".input-search").addEventListener('keyup', function(e){
    
      if ( e.which === 13 ){
        let inpu = document.querySelector(".input-search").value;
        console.log(inpu);
          SoundCloudAPI.getTrack(inpu);
          //input = "";
          document.querySelector(".js-search-results").textContent = ' ';
      }
      let inpu = document.querySelector(".input-search").value;
      console.log(inpu);
  });



/* 2. Query Soundcloud API && Displaying the cards */
var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
    SC.initialize({
      client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
} 
SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue) {
      console.log(inputValue);
      // find all sounds of buskers licensed under 'creative commons share alike'
      SC.get('/tracks', {
        q: inputValue
      }).then(function(tracks) {
        console.log(tracks);
        /* SoundCloudAPI.renderTracks(tracks)*/  // method 1
        for(let i in tracks){
          SoundCloudAPI.renderTracks(tracks[i]);  // method 2
        }
      });
  }
 //SoundCloudAPI.getTrack("Kozoro");

  SoundCloudAPI.renderTracks = function(track) {

  /*   track.forEach(function(track_) {      //method 1

    }); */

    let card = document.createElement('div');
    card.classList.add("card");

    let imageDiv = document.createElement('div');
    imageDiv.classList.add("image");

    let image_img = document.createElement('img');
    image_img.classList.add("image_img");
    image_img.src = track.artwork_url || 'https://picsum.photos/200/200';

    imageDiv.appendChild(image_img);

    let content = document.createElement('div');
    content.classList.add("content");

    let header = document.createElement('div');
    header.classList.add("header");
    header.innerHTML = '<a href="'+track.permalink_url +'" target="_blank">' + track.title + '</a>';

    let button = document.createElement('div');
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

    let icon = document.createElement('i');
    icon.classList.add('add', 'icon');
    
    let buttonText = document.createElement('span');
    buttonText.innerHTML = "Add To Playlist";

    content.appendChild(header);

    button.appendChild(icon);
    button.appendChild(buttonText);

    button.addEventListener('click', function() {
        SoundCloudAPI.getEmbed(track.permalink_url);
    });

    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

  document.querySelector('.js-search-results').appendChild(card); 
}

// Adding to the playlist and playing the song.

SoundCloudAPI.getEmbed = function(trackURL) {
  console.log(trackURL);
  SC.oEmbed(trackURL, { 
    auto_play: true
  }).then(function(embed){
    console.log('oEmbed response: ', embed);

    let sideBar =  document.querySelector(".js-playlist");
    let box = document.createElement('div');
    box.innerHTML = embed.html;
    // sideBar.appendChild(box);
    sideBar.insertBefore(box, sideBar.firstChild);
    localStorage.setItem("key", sideBar.innerHTML);
  });
}
//console.log(`This is the car ${car}`);

let sideBar =  document.querySelector(".js-playlist");
sideBar.innerHTML = localStorage.getItem("key");
