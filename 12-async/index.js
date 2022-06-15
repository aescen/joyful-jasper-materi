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

// promise fetch
const data = {};
const getData = () => {
  // get data API
  const url = "https://api.github.com/users/bilasta89";

  // melakukan fetch data
  fetch(url)
    // membuka paket
    .then((response) => response.json())
    // mengecheck hasil paketnya sudah sesuai atau belum
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

getData();

// async fetch
const getDataGithub = async () => {
  const url = "https://api.github.com/users/bilasta89";

  // melakukan fetch data
  let response = await fetch(url);
  // membuka paket
  response = await response.json();
  console.log(response);
};

getDataGithub();
