
// let x=(num)=>{
//     for(i=0,j=num.length-1;i<num.length/2;i++,j--){
//         d=num[i]
//         num[i]=num[j]
//         num[j]=d
//     }
// alert(num)
// }

// x([1,2,3,4,5,6])


// let x=(num)=>{
//     let a=[]
//     for(i=0,j=num.length-1;j>=0;i++,j--){
//         a[i]=num[j]
//     }
// alert(a)
// }
// x([1,2,3,4,5,6])


// let kov=(a)=>{
//     let result=0
//  for(i=0;i<a.length;i++){
//      result=result+a[i]
//  }
//  return result/a.length
// }
// alert(kov([1,2,3,4]))


// let fac = (num)=>{ 
//     let res =1
//   for(i=num;i>0;i--){
//     res=res*num
//     num=num-1  
//   }
// return res
// }
// alert(fac(5))


    
// [1,2,3,4,5].forEach((val,i)=>console.log(val,i))


// let a= [1,2,3,4,5]
// let b=[]
// let i=0
// function fun(arr){
//    arr.forEach(function(val){
//       if(val%2===0){
//        b[i]=val
//        i++
//       }
//    }) 
//    return b
// }   
// console.log(fun(a))

  

// const fun=(a)=>{
//   let gum=0
//     a.map(el=>gum+=el)
//     return gum
// }
// console.log(fun([1,2,3,4,5,7]))

// let a=[
//     {
//         name:'gev'
//     },
//     {
//         phone:8888989
//     },
//     {
//         age:12
//     }
// ]

// let b=a.reduce(function(aggr,val){
//     if(val.name!==undefined){
//       aggr.name=val.name 
//     }
//    return aggr
// },{})
  
// alert(JSON.stringify(b,undefined,6) )



// let map =(arr,fun)=>{
// return arr.reduce(function(aggr,val,i){
//     aggr[i]=fun(val)
//     return aggr
// },[])
// }

// alert(map([1,2,3,4,5],val=>val*2))


// let x= [1,2,3,4,5]
// let y=[7,8,9,10]
// let c =[]
// let res =(a,b)=>{
// a.forEach((val)=>{
//  c.push(val) 
// })
// b.forEach((val)=>{
//     c.push(val) 
//    })
// return c 
// }

// console.log(res(x,y))


// function fun(text){
// let names =text.split(' ')
// let upper=names.map(function(val){
//     return val.substring(0,1).toUpperCase()+val.substring(1,val.lenght).toLowerCase()
// })
// return upper.join(' ')
// }
// alert(fun('vachx barev vonces'))


// function funk(x,n){
//     let res =x
//   for(i=1;i<n;i++){
//      res*=x
//   }
//   return res
// } 

// alert(funk(3,3))
  
// function fun(x){
// max =x[0]
//   for(i=1;i<x.length;i++){

//    val=x[i]
//      if(val>max){
//          max=val
//      }
//   }
//   return max
// }

// console.log(fun([1,2,3,14564,5,44,78]))




// function func(i){
//   if(i<1){
//     return 1
//   }
//   return i*func(i-1)
// }
// alert(func(15))



// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// console.log(JSON.stringify(new Person('gev',33),undefined,1))


// let a =[5,40,23,44,33]
// function funk(a){
// return a.map(el=>el+1).filter(val=>val%2===0)
// }
// console.log(funk(a))




// function car(mark,year){
//    return { 
//             mark,
//             year
//    }
// }

// console.log(car('bmw',2010))



// let a={
//         kov:'gev',
//         ez: 3,
//         tariq:22
// }

// const {kov:vvv,ezz=111111} = a

// console.log(ezz,vvv)



// function func(x,y,collba){
//        const a=x+y
//        const b=y+2 
//        const c=x+y
//        collba(c*2 )
// }
// func(2,4,result=>alert(result))

 

// function fun(){
//     return new Promise((reject,revove)=>{
//         revove()
//     })
// }
// fun()
// .then((result)=>alert(result))
// .catch((error)=>alert('error'))




// function fun(collback){
//     setTimeout(() => {
//         collback(77)
//     }, 2000);
// }

// function kov(resul){
//     alert(resul)
// }
// fun(kov)

// async function f(){
//   alert(await new Promise((resolve, reject)=>resolve("готово!")))
// }
// f()


// async function pageLoader(callback) {
//     const data = await fetch('/ru/docs/Glossary/Callback_function')
//     callback(data)
//   }
  
//   function onPageLoadingFinished(pageData) {
//     console.log('Page was sucessfully loaded!')
//     console.log('Response:')
//     console.log(pageData)
//   }
  
//   pageLoader(onPageLoadingFinished)




// for(var i=0;i<10;i++){
   
//     setTimeout(() => {
//         console.log(i)  
//     }, 0);
  
// }



// for (var i = 0; i < 10; i++) {
//     setTimeout(((i)=>console.log(i))(i),10)
// }


// for(var i=0; i<10;i++){
//   ((i)=>setTimeout(()=>console.log(i),500))(i);
// }








//   /*
//    վարժություն 5
//    Փոխեք կոդը այնպես, որ ֆունկցիայի 
//    գործառույթում this լինի undefined:
//   */
  
//   function func() {
//       alert(this);
//   }
//   func();

// Լուծումը: https://tinyurl.com/thisExc5


//   function func(colback,text){
//       console.log(text)
//       setTimeout(() => {
//          colback() 
//       }, 2000);
//   }


//   function kov(){
//       console.log('vachxar')
//   }

//   func(kov,'vachxarnerrrrrr')


// let obj = {a:1, b:2, c:3};
// let arr = [1,2,3]

// for (let prop in obj) {
//   console.log(prop);
// }

// for (let pro of arr) {
//    console.log(pro)
//   }


// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))



// function fac(c){
//     let x=1
//     for(let a=1;a<=c;a++){
//          x=x*a
         
//     }
//     return x
// }
// console.log(fac(5))


// function fac(a){
//      if(a!==1){
//         x= a*fac(a-1)
//      }else{
//           return 1
//      }
//      return x 
// }


// console.log(fac(170))
// nairihar-js-youtube-tutorials.herokuapp.com

// /v1/weather
// /v1/weather/activities/:temperature
// /v1/activities/:name


















// function getWeatherDetails() {
  
// 	return fetch('https://nairihar-js-youtube-tutorials.herokuapp.com/v1/weather')
//     .then(function(res) {
        
//       return res.json();
          
//     });

// }

// function getWeatherActivities(details) {

// 	return fetch('https://nairihar-js-youtube-tutorials.herokuapp.com/v1/weather/activities/' + details[0].temperature)
//     .then(function(res) {
    
//       return res.json();
//     });
// }

// function getWeatherActivityLocations(activities) {

// 	return fetch('https://nairihar-js-youtube-tutorials.herokuapp.com/v1/activities/' + activities[0])
//     .then(function(res) {
//       return res.json();
//     });
// }

// getWeatherDetails()

//   .then(getWeatherActivities)
  
//   .then(getWeatherActivityLocations)
//   .then(function(data) {
//   	console.log(data)
//   });
  

// alert( 20e-1['toString'](2) );

//  let nam = "Петя";
//  function sayHi() {
//   alert(nam);
// }

// function f() {
 
//   return sayHi() ;
// };

// f()

// let a = [1,2]

// (function() { alert(a) })()




// f.call(null);

// function f() {
//   alert(this);
// }


// f.call(f);

// function f() {
//   alert( this );
// }

// let a = (1,5 - 1) * 2;

// alert(a);



// let f =(a, b)=> a + b 
 
// alert(f(1,2))



// "use strict";

// a = null + undefined;
// alert(a);

// for(let key in  {1:1, 0:0}) {
//   alert(key);
//  }

// let arr =[1,4,2,3]
// alert(Math.max.apply(null,arr))
// alert(Math.max(5,25))


// let a = new Array(1)
// let b = new Array(3,7);
// alert((a[0]));
// alert((b[0]));

// alert(2 && 1 && null && 0 && undefined)
// alert(0&&false)
// alert(Boolean(null))



// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;


// let arr = [1, 2, 3];
// arr.something = 5;

// alert(arr.something); // ?

// alert(0 || "" || 2 || undefined || true || falsе)


// let user = {
//     sayHi: function() {
//       alert(this);
//     }
//   };
  
//   (user.sayBye = user.sayHi)();
// alert(null + {0:1}[0] + [,[1],][1][0])


// "use strict";
// let a = new Array(1,2), b = new Array(3);
// alert(a[0] + b[0]);

// f.call(f);

// function f() {
//   alert( this );
// }
// for(let i=0; i<10; i++) {
//     console.log(i);
//   }


// let f = function(x) {
//     alert(x)
//   }
  
//   (function() {

    
//      f(1)
//   }())

// alert([1,2,3,4].shift(6))

// alert(0 || "" || 2 || undefined || true || falsе)
// alert(0 || 1 && 2 || 3 )
// function User() { }
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// alert(user.admin);



// let kov=function*(params) {
//     yield 1
//     yield 2
//     yield 3
// }

// let inter=kov()
// console.log(inter.next())
// console.log(inter.next())
// console.log(inter.next())
// console.log(inter.next())

// for(let inter of kov()){
//     console.log(inter)
// }

// let arr=[1,2,3,4]
// for(let x of arr){
//     console.log(x)
// }

// console.log(arr.__proto__)


// function*f(start,end) {
//     for(let i=start;i<=end;i++){
//         yield i
//     }
// }

// console.log(...f(1,10));

// function F(){
//   this.x=5
// }
// let obj =new F()
// console.log(obj);

// let obj = {
//     a:5,
//     a:6
// }

// let set=new Set()
// set.add(obj)

// console.log(set)


// function A(){

//     this.names='kovik'
// }

// let a={
//     name:'gev',
//     age:33
// }


// let c ={
//     azg:"hak"
// }


// const b =Object.create(a)
// alert(b.name)
// A.prototype=c
// let t =new A()

// alert(t.azg)

// let k=[1,2,3]

// let [a,b,c]=k

// let z=[c,b,a]

// alert(z)

// let arr = [5, 7, 8];

// let result = arr.some(elem=>elem + 2 === 10);

// console.log(result);



// let arr = [2, 4, 6, 9];

// let result = arr.every(elem => elem % 2 == 0);
// console.log(result);



// function func(...nums) {
// 	let sum = 0;
	
// 	for (let num of nums) {
// 		sum += num;
// 	}
	
// 	return sum;
// }

// let result = func(1, 2, 3);
// console.log(result);



// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let result = {};

// for (let ke in obj) {
// 	if (obj[ke] % 2 == 0) {
// 		result[ke] = obj[ke];
// 	}


// let str = "Hello";
// for (let char of str) 
// console.log(char+"hh");



// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); // выводит символы один за другим
// }



// let obj ={
//     name:'gev',
//     azg:'hak',
//     age:33
// }

// for(let kov in obj){
//     console.log(kov+"lllll")
//     console.log(obj[kov]+"nnnnnnnnnnnnn")
// }

let range = {
    from: 1,
    to: 15
  };
  
  for(let num of range){
   console.log(num)   
  }