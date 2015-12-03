angular
.module('orders-app')
.factory('orders', function($http){
  return{
    getTotalSpent:  function(){
      return $http.get('https://some-shopping-site.com/orders').then(function(response){
        var totalResponse = 0;
        response.data.orders.forEach(function(order){
          totalResponse += order.total;
        });
        return totalResponse;
      });
    }
  };
});
//.config(){

//}
