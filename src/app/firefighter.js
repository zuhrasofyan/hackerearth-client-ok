angular
  .module('app')
  .component('firefighter', {
    templateUrl: 'app/firefighter.html',
    controller: firefighterController,
    controllerAs: 'vm'
  });

function firefighterController($rootScope, $scope, $http, $timeout, API_URL) {
  var vm = this;
  vm.data = [];

  $scope.getData = function () {
    $http.get(API_URL).then(function successCallback(response)  {
      vm.data = response.data;
    });
  };
  $scope.getData();

  $scope.intervalFunction = function () {
    $timeout(function () {
      $scope.getData();
      $scope.intervalFunction();
    }, 5000);
  };
  $scope.intervalFunction();
}