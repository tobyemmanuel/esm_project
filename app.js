// 10. import() - Dynamic import
// import("./module/utils.js").then((module) => {
//   console.log(module.greetings("tobi"), module.passwordLength); // Dynamic import allows loading a module asynchronously
// });

// // 11. await import() - Dynamic import with await
async function loadModule() {
  console.log("I am here three");

  const module = await import("./module/utils.js"); // Awaiting dynamic import or API call
  console.log("I am here too");

  return module.greetings("Joshua");
}

// const result = await loadModule();
// console.log(result);
// console.log("I am here");

// 12. top-level await - Using await at the top-level of a module
const module = await import("./module/utils.js"); // Directly awaiting a dynamic import
// console.log(module.passwordLength)
// console.log("I am here");

// try {
//   milk = 500;
//   // checkingMilo();
// } catch (error) {
//   // console.log(error);
//   throw new Error('Operation failed');
// } finally {
//   // console.log('attempts: 1')
// }

// function checkingMilo() {

//   ovaltine = 60000

//   try {
//     milo = 500;
//   } catch (error) {
//     console.log(error);
//   }
// }

// let numberOfLog = 10;
// let numberOfLog2 = 10;

// const logSomething = setInterval(() => {
//   console.log("I am in class");
//   ++numberOfLog;

//   if (numberOfLog >= 15) {
//     clearInterval(logSomething)
//     console.log('we are done')
//   }
// }, 1000);

// console.log('i am here')
// const logSomething2 = setInterval(() => {
//   console.log("I am in class 2");
//   ++numberOfLog2;

//   if (numberOfLog2 >= 15) {
//     clearInterval(logSomething2)
//     console.log('we are done 2')
//   }
// }, 500);


setTimeout(()=>{console.log('time out')}, 1000)

// we are trying to add something here in the future