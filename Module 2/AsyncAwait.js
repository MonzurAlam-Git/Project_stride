const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Task One Completed");
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task Two Completed"), 3000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task Three Completed"), 2000);
  });
};
console.log(taskOne());
console.log(taskTwo());
console.log(taskThree());

const show = async () => {
  const t1 = await taskOne();
  console.log(t1);
  const t2 = await taskTwo();
  console.log(t2);
  const t3 = await taskThree();
  console.log(t3);
};
show();

// When you call console.log(taskOne()), console.log(taskTwo()), and console.log(taskThree()), the console logs the promise objects, not their resolved values, because the promises may not have settled yet when the log statements are executed.

// An async function that uses await to wait for each task to complete before logging its result

// In the show function, tasks are awaited sequentially, which means taskTwo will only start after taskOne has completed, and taskThree will start after taskTwo has completed.
