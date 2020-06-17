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
    });
}
SoundCloudAPI.getTrack("Rilo Kiley");



/* 3. Display the cards */



/* 4. Add to playlist and play. */