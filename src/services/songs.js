angular
  .module('music-app')
  .factory('songs', function($http, artists, $q) {
    return {
      findAll: function() {
        return $http.get('https://itp-api.herokuapp.com/songs').then(function(response) {
          return response.data.songs;
        });
      },

      findByArtist: function(artistName) {
        // get all songs and get all artists and wait for both to resolve
        var songsPromise = this.findAll();
        var artistsPromise = artists.findAll();

        return $q.all([ songsPromise, artistsPromise ]).then(function(responses) {
          var songs = responses[0];
          var artists = responses[1];
          var foundArtist;
          var songsForArtist = [];

          // loop through artists to find the id
          artistName = artistName.toLowerCase();

          for (var i = 0; i < artists.length; i++) {
            if (artistName === artists[i].artistName.toLowerCase()) {
              foundArtist = artists[i];
            }
          }

          // loop through songs and find those that match the artist id and return those
          songs.forEach(function(song) {
            if (song.artistId === foundArtist.id) {
              songsForArtist.push(song);
            }
          });
          return songsForArtist;
        });

      }
    };
  });
