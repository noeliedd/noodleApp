angular.module('MainCtrl', []).controller('CarouselDemoCtrl', function($scope) {
  $scope.myInterval = 6500;
  $scope.desc = ['Nam Sai Noodles','Dark Soup','Tom Seb','Aroi Jing Jing'];
  $scope.slides = [
    {
      image: 'img/foodA.png'
    },
    {
      image: 'img/foodB.png'
    }   
  ];
});