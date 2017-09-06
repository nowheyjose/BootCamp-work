angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function(listings) {
      $scope.listings.push({
        'code': listings.code,
        'name': listings.name,
        'latitude': listings.coordinates.latitude,
        'longitude': listings.coordinates.longitude,
        'address': listings.address,
      });
      $scope.BD = {};
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.listings = index;
    };
  }
]);
