angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller: mainController,
    controllerAs: 'vm'
  });

function mainController($rootScope, $scope, $http, $timeout) {
  var vm = this;
  vm.data = [];

  var apiUrl = 'http://localhost:1339/image-all';

  $scope.getData = function() {
    $http.get(apiUrl).then(function successCallback(response)  {
      vm.data=response.data;
      console.log(response.data);
    });
  };

  $scope.intervalFunction = function() {
    $timeout(function(){
      $scope.getData();
      $scope.intervalFunction();
    }, 8000);
  };
  $scope.intervalFunction();

}