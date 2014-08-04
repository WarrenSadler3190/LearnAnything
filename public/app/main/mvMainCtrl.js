angular.module('app').controller('mvMainCtrl',function($scope){
  $scope.courses = [
    {name:'LearnJavascript', featured:true, published: new Date('3/14/2014')}
    ,{name:'LearnHTML', featured:false, published: new Date('2/11/2014')}
    ,{name:'LearnC++', featured:false, published: new Date('8/1/2014')}
    ,{name:'LearnSwift', featured:true, published: new Date('7/30/2014')}
    ,{name:'LearnGuitar', featured:true, published: new Date('4/11/2014')}
  ]
})