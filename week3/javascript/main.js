/* 1. Search soundcloud*/



/* 2. Query Soundcloud API*/

SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: 'rilo kiley'
}).then(function(tracks) {
  console.log(tracks);
});


/* 3. Display the cards */



/* 4. Add to playlist and play. */