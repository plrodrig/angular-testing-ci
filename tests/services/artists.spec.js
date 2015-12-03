describe("artists service", function() {
  var artists, $httpBackend;

  beforeEach(module('music-app'));
  beforeEach(inject(function($injector) {
    artists = $injector.get('artists');
    $httpBackend = $injector.get('$httpBackend');
    //allows us to unit test artist service in isolation
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
  }));
//test artist service with a findall method & resolve with an array of artists
//up to here is plain Jasmine
  it("findAll() should return an array of artists", function() {
    //act & arrange
    artists.findAll().then(function(allArtists) {
      //assert
      expect(allArtists.length).toEqual(3);
    });

    $httpBackend.flush();
  });
});
