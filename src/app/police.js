angular
  .module('app')
  .component('police', {
    templateUrl: 'app/police.html',
    controller: policeController,
    controllerAs: 'vm'
  });

function policeController($rootScope, $scope, $http, $timeout, API_URL) {
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
