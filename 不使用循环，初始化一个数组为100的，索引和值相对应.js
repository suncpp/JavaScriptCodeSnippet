
// 1、不使用循环，初始化一个数组为100的，索引和值相对应。 可以使用定时器，递归调动，map(最优)
var arr = [],
i=0;
var timer = setInterval(function(){
  i<100 ? arr.push(i++) : clearInterval(timer);
},0);

var arr = [];
function index(i){
  if(i<100){
    arr.push(i++);
    index(i)
  }
}
index(0);
console.log(arr);

var arr = new Array(100).join(',').split(',');// var arr = new Array(100);arr输出【empty*100】,在map循环中是不会对进行处理的。es6的fill()方法。
var _arr = arr.map(function(item,index) {
  return index;
});
console.log(_arr);

// 2 重洗排序
var arr = [1,2,3,4,5,6,7,8];
arr.sort(function(a,b){
  //Math.random() 返回0-1之间的数值，不包括0和1;
  return Math.random()>0.5 ? 1 : -1;
});
console.log(arr);

// 3 截取指定位置求和
var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
var _arr = arr.slice(0,10).reduce(function(current,prev){
  return current+prev;
});
console.log(_arr)

// 4 优雅继承
function Parent(){};
Parent.prototype = {
  play:function(){}
}
function Son(){}
Son.prototype = Object.create(Parent.prototype);
Son.prototype.eat = function(){};
Son.prototype.contructor = Son;
console.log(new Son());

// 立执行输出
var test = (function(a){
  this.a = a;
  return function(b){
    return this.a+b;
  }
})(function(a,b){
  return a;
}(1,2));
console.log(test(3))