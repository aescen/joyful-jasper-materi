const checkLogin = () => {
  const statusLogin = JSON.parse(localStorage.getItem("isLogin"));
  console.log("login checker", statusLogin);

  if (statusLogin === true) {
    console.log("sukses login");
  } else {
    console.log("tes");
    alert("Please login");
    window.location.replace("./index.html");
  }
};

checkLogin();

const getDataMockAPI = async () => {
  const url = "https://62b13d4a196a9e987031d41c.mockapi.io/buku";

  let response = await fetch(url);
  response = await response.json();
  console.log(response);
};

getDataMockAPI();
