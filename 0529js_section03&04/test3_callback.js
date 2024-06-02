// function task1() {
//   console.log("task1");
// }
// function task2() {
//   console.log("task2");
// }
// function task3() {
//   console.log("task3");
// }
// function task4() {
//   console.log("task4");
// }

// task1();
// task2();
// task3();
// task4();

// console.log("task all done");

function task1(callback) {
  console.log("task1");
  callback();
}
function task2(callback) {
  setTimeout(() => {
    console.log("task2");
    callback();
  }, 1000);
}
function task3(callback) {
  console.log("task3");
  callback();
}
function task4(callback) {
  console.log("task4");
  callback();
}

task1(() =>
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("task all done");
      });
    });
  })
);
