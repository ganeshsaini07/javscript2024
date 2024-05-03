
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

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hello", password: 32134 });
    } else {
      reject("Error:something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("finally promise is either resolve or reject"));

// in this promise if i want to error then we need to go the else statement (check the uper promisFour)
//   and  check (let error = true/false)

/// catch => to connect "reject"
/// then  => to connect "resolve"

/// second type of promiseFour

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;     // also we need to try false for better understanding
    if (!error) {
      resolve({ userName: "js", score: 100 });
    } else {
      reject("error:js is wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive()


//////////////////////////////
