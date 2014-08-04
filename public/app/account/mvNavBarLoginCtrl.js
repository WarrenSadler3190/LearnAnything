angular.module('app').controller('mvNavBarLoginCtrl',function($scope){
  $scope.signIn = function(username, password){
    console.log('Username: ' + username + 'Password: ' + password);
  }
})