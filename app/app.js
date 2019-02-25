'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'myApp.version'
])
.controller('mainCtrl',function($scope){
    $scope.dimen = null;
    $scope.n = 10;
    $scope.max = 100;
    /* $scope.getNum = function(){
      arr = [];
      for(i = 2 ; i <= $scope.max; i++) {
        arr.push(i);
      }
      //console.log(arr);
      return arr;
    }(); */
    $scope.getColName = function(){
        let arr = [];
        for(let i = 1; i <= $scope.dimen; i++) {
            let j = Math.floor(i/26); // used to calculate first Alphabet in two letter column name
            if(i <= 26) {
                arr.push(String.fromCharCode(64+i)); // For A-Z one character
            } else if(i % 26 == 0) {
                arr.push(String.fromCharCode(64+j-1,64+(i-26*(j-1)))); // For last Z in two character
            }
            else {
                arr.push(String.fromCharCode(64+j,64+(i-26*j)));
            }
        }
        //console.log(arr);
        return arr;
    };
    $scope.getRow = function(){
        let arr = [];
        for (let i = 1; i <= $scope.dimen; i++) {
            arr.push(i);
        }
        //console.log(arr);
        return arr;
    };
    $scope.getColNum = function() {
        let arr = [];
        for(let i = 1; i <= $scope.dimen; i++) {
            arr.push(i);
        }
        return arr;
    };
});

