describe("orders service", function(){

  var orders, $httpBackend;
  //run before every single test
  //angular mocks provide us this function called module, and sets up angular module
  //that we wanna test. ours is called order-app.
  //In angular services are not global (not picked off window object), we are pretending we have service called order
  //how to get access? We need to set up and before each block call inject function
  beforeEach(module('orders-app'));
  //injector service allows you to grab from internal look up system, we need access to  orders service
  //use injector service to grab an instance of the orders service
  beforeEach(inject(function($injector){
    orders = $injector.get('orders');
    //AngularMocks HTTPBACKEND service- overrides native AJAX system in browser, when you try to make an AJAX request,
    //it will not make a request, it will intercept it and return and specify a static response.
    $httpBackend = $injector.get('$httpBackend');
    //intercepts all requests so we can unit test order service in isolation
    $httpBackend
    .whenGET('https://some-shopping-site.com/orders')
    .respond(200, {
      orders: [
       {
         id: 1234,
         total: 56.99
       },
       {
         id: 1234,
         total: 6.99
        },
       {
         id: 1234,
         total: 5.99
       },
       {
         id: 1234,
         total: 9.00
       },
       {
        id: 1234,
        total: 8.03
       },
       {
         id: 1234,
         total: 87.00
       }
     ]
    });

  }));
  it("getTotalSpent() should resolve with a single number that is the sum of the total property for all orders", function(){
    //Act&Arrange
    orders.getTotalSpent().then(function(total){
      //assert
      expect(total).toEqual(174);
    });
    $httpBackend.flush();
  });
});
