function task1() {
  return new Promise((resolve) => {
    console.log("task1");
    resolve();
  });
}
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task2");
      resolve();
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve) => {
    console.log("task3");
    resolve();
  });
}
function task4() {
  return new Promise((resolve) => {
    console.log("task4");
    resolve();
  });
}

// task1().then(() => {
//   console.log("task1 done");
//   task2().then(() => {
//     console.log("task2 done");
//     task3().then(() => {
//       console.log("task4 done");
//       console.log("done");
//     });
//   });
// });

task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => console.log("done"));
