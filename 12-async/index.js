// async callback

const mainFunc = (number1, number2, callback) => {
  console.log(number1 * number2);
  callback();
  console.log(number1 + number2);
};

const callbackFunc = () => {
  console.log("callback");
};

mainFunc(10, 20, callbackFunc);

// setTimeOut

const p1 = () => {
  console.log("proses 1");
};

const p2 = () => {
  setTimeout(() => {
    console.log("proses 2");
  }, 5000);
};

const p3 = () => {
  p1();
  p2();
  console.log("proses 3");
};

p3();

let photoProfile = document.getElementById("photoProfile");
let username = document.getElementById("username");
let followers = document.getElementById("followers");

// promise fetch
// get data API
// const getDataGithubPromise = () => {
const url = "https://api.github.com/users/bilasta89";

// melakukan fetch data
fetch(url)
  .then((response) => response.json()) // membuka paket
  .then((result) => {
    console.log(result);
    photoProfile.src = result.avatar_url;
    username.innerText = result.login;
    followers.innerText = result.followers;
  })
  .catch((error) => console.log(error));
// };

// getDataGithubPromise()
// console.log(data);

// async fetch
const getDataGithubAsync = async () => {
  const url = "https://api.github.com/users/bilasta89";

  // melakukan fetch data
  let response = await fetch(url);
  // membuka paket
  let result = await response.json();
  console.log(result);

  photoProfile.src = result.avatar_url;
  username.innerText = result.login;
  followers.innerText = result.followers;

  // function async jika di dalamnya dikasih return
  // maka function ini akan bernilai sebuah promise
  // return result
};

getDataGithubAsync();
