angular.module('MainCtrl', []).controller('CarouselDemoCtrl', function($scope) {
  $scope.myInterval = 5000;
  $scope.desc = ['Nam Sai Noodles','Dark Soup','Tom Seb','Aroi Jing Jing','E-haa','Gan Tad','Khan Hee','Moi Pong','I Sad','Ham Yai','Ham Lek'];
  $scope.slides = [
    {
      image: 'img/menuA.png'
    },
    {
      image: 'img/menuB.png'
    },
    {
      image: 'img/menuC.png'
    },
    {
      image: 'img/menuD.png'
    },
    {
      image: 'img/menuE.png'
    },
    {
      image: 'img/menuF.png'
    },
    {
      image: 'img/menuG.png'
    },
    {
      image: 'img/menuH.png'
    },
    {
      image: 'img/menuI.png'
    },
    {
      image: 'img/menuJ.png'
    },
    {
      image: 'img/menuK.png'
    }    
  ];
});