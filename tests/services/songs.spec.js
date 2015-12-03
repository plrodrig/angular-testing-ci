describe("songs service", function() {
  var songs, $httpBackend;

  beforeEach(module('music-app'));
  beforeEach(inject(function($injector) {
    songs = $injector.get('songs');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://itp-api.herokuapp.com/artists')
      .respond(200, {
        artists: [
          {
            id: 1,
            artistName: "The Offspring"
          },
          {
            id: 2,
            artistName: "Pennywise"
          },
          {
            id: 3,
            artistName: "Eminem"
          }
        ]
      });

    $httpBackend
      .whenGET('https://itp-api.herokuapp.com/songs')
      .respond(200, {
        songs: [
          {
            id: 1,
            title: "Wake me up",
            artistId: 4,
            genreId: 8,
            price: 1.29,
            playCount: 7
          },
          {
            id: 2,
            title: "Monster",
            artistId: 3,
            genreId: 3,
            price: 1.29,
            playCount: 8
          },
          {
            id: 3,
            title: "Victim of Reality",
            artistId: 2,
            genreId: 1,
            price: 0.99,
            playCount: 3
          },
          {
            id: 4,
            title: "Stan",
            artistId: 3,
            genreId: 2,
            price: 1.29,
            playCount: 22
          }
        ]
      });
  }));

  it("findByArtist() should resolve with an array of songs for an artist", function() {
    songs.findByArtist('Eminem').then(function(eminemSongs) {
      expect(eminemSongs).toEqual([
        {
          id: 2,
          title: "Monster",
          artistId: 3,
          genreId: 3,
          price: 1.29,
          playCount: 8
        },
        {
          id: 4,
          title: "Stan",
          artistId: 3,
          genreId: 2,
          price: 1.29,
          playCount: 22
        }
      ]);
    });

    $httpBackend.flush();
  });

  it("findByArtist() should search based on any casing of an artist name", function() {
    songs.findByArtist('eminem').then(function(eminemSongs) {
      expect(eminemSongs).toEqual([
        {
          id: 2,
          title: "Monster",
          artistId: 3,
          genreId: 3,
          price: 1.29,
          playCount: 8
        },
        {
          id: 4,
          title: "Stan",
          artistId: 3,
          genreId: 2,
          price: 1.29,
          playCount: 22
        }
      ]);
    });

    $httpBackend.flush();
  });

  it("findAll() should return an array of songs", function() {
    songs.findAll().then(function(allSongs) {
      expect(allSongs.length).toEqual(4);
    });

    $httpBackend.flush();
  });
});
