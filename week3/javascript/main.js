/* 1. Search soundcloud*/



/* 2. Query Soundcloud API*/
var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
    SC.initialize({
      client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
} 
SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue) {
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
SoundCloudAPI.getTrack("Rilo Kiley");

SoundCloudAPI.renderTracks = function(track) {

/*   track.forEach(function(track_) {      //method 1

  }); */

  console.log(track);
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

  card.appendChild(imageDiv);
  card.appendChild(content);
  card.appendChild(button);

 document.querySelector('.js-search-results').appendChild(card); 
  
}

SoundCloudAPI.renderTracks();



/* 3. Display the cards */



/* 4. Add to playlist and play. */

//console.log(`This is the car ${car}`);