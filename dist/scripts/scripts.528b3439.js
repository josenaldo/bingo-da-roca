"use strict";angular.module("bingadorApp",[]),angular.module("bingadorApp").controller("MainCtrl",["$scope",function(a){a.max=60,a.toggle=function(b){"true"==a.numbers[b].value?a.numbers[b].value="false":(a.numbers[b].value="true",a.lastNumber=b+1)},a.generate=function(){a.numbers=[];for(var b=0;b<a.max;b++)a.numbers[b]={id:b,value:"false"}},a.generate()}]);