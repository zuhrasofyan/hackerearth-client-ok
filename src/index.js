angular
  .module('app', ['ui.router', 'angular-storage', 'angular-jwt'])
  // for production, change to this:
  .constant('API_URL', 'http://bappeda.bandaacehkota.go.id/service/hackerearth/image-all');
  // .constant('API_URL', 'http://localhost:1339/image-all');
