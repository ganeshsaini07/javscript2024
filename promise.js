
//https://www.youtube.com/watch?v=NJwRQgsu1Q8&t=1778s

// when we create a promise also the create promise we need to cunsume

// create a promise(promisOne)

// const promiseOne=new Promise(function (resolve,reject) {

//     setTimeout(()=>{
//         console.log("Asyn is complete");
//         resolve()                             //// Note
//     },1000)

// })

// // cunsume the promise   // then  connections => resolve
// promiseOne.then(() => {
//     console.log("promise is cunsumed");
// })

// // Note :- in this case very first we need to connect .then()  and resolve , mathod of resolve()

// new Promise(function(resolve ,reject) {
//     setTimeout(function(){
//         console.log("asyn task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise 2 is consumed");
// })

// /// we can take value from the mathod of   .then() and
// /// we can take the error value mathod of  .catch()

// ///////////////////////////

// const promiseThree= new Promise(function(resolve,reject){
// setTimeout(function(){
//          resolve({userName:"hello" , email:"example@gmail.com"})
// },1000)
// })

// promiseThree.then(function(user){
// console.log(user);
// })
// Input => { userName: 'hello', email: 'example@gmail.com' }

///////////////////////////

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hello", password: 32134 });
//     } else {
//       reject("Error:something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (userName) {
//     console.log(userName);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => console.log("finally promise is either resolve or reject"));

// in this promise if i want to error then we need to go the else statement (check the uper promisFour)
//   and  check (let error = true/false)

/// catch => to connect "reject"
/// then  => to connect "resolve"

/// second type of promiseFour



//////////////////////////////////////////////////////////////

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;     // also we need to try false for better understanding
//     if (!error) {
//       resolve({ userName: "js", score: 100 });
//     } else {
//       reject("error:js is wrong");
//     }
//   }, 1000);
// });

// async function cousumepromiseFive(){
//   const response=await promiseFive
//   console.log(response);
  
//   // error(condisition false) for upder code => [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "error:js is wrong".] 

//   // but if i try for condisition true let say  => let error = false (for true condistion) = try for 
//   // input :- { userName: 'js', score: 100 }

//   // note:- async await not handel directly error we need to try and catch(error)  
// }

// best type for 
// async function cousumepromiseFive(){

//   try {
//     const response=await promiseFive
//   console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
//   // note:- async await not handel directly error we need to try and catch(error)  
// }

// // output: error:js is wrong

// cousumepromiseFive()

///////////////////////////////////////////////////////

// fetch take always a url

async function getAllusers(){

  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  // console.log(response);  // try

  const data=response.json()
  console.log(data);   // input - Promise { <pending> }

  //////////////////////////////////////////////////////////////////////

  try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
  } catch (error) {
    console.log("something Error" , error);
  }
}
// getAllusers()   // done

///////////////////////second mathod through the .then   //////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
      console.log(data);
}).catch((error)=> console.log(error))


////////////////////////////// some extra for better understanding //////

// this bloew code helps to understand to diffrence between .then(for true)  and .catch(false/error) please try and checkk the


// const promise =new Promise(function(resolve,reject){

//   let value= true
  
//   if (value==true) {
//     resolve({userName:"hello" , userValue:45})
//   }
//   else{
//     reject("error:value is not found")
//   }
  
//   })
  
//   promise.then(function(user){
//     console.log(user);
//   }).catch(function(a){
//     console.log(a);
//   }).finally(()=>{
//     console.log(" value is either true or false ");
//   })
