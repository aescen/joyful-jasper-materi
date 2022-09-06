let listOfFlags = document.getElementById("list-flags");

const getFlags = async () => {
  const url = "https://restcountries.com/v2/all";

  const respons = await fetch(url);
  const result = await respons.json();

  result.forEach((item) => {
    listOfFlags.innerHTML += 
    `<div>
        <img src="${item.flags.svg}" alt="" width="100">
        <h3>${item.name}</h3>
      </div>
    `;
  });

  console.log(result);
};

getFlags();
