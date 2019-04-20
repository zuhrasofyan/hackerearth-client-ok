angular
  .module('app')
  .component('fountainHeader', {
    templateUrl: 'app/components/header/header.html',
    controller: headerController,
    controllerAs: 'vm'
  });

function headerController($rootScope, store, $location) {
  var vm = this;
  // if(store.get('user')){
  //   vm.username = store.get('user').username;
  // } else vm.username = null;

}