// import axios from 'axios';

const wrapper = document.querySelector("#wrapper");
console.log(wrapper);
for (let i = 0; i < 3; i++) {
  wrapper.innerHTML += `<select name="" id="menu_${i}">`;
  const select = document.querySelector(`#menu_${i}`);
  select.innerHTML = `<option value="">--Choose--</option>`;
}
// get API
async function getData(url, func, paramID) {
  await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      func(data, paramID);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData("https://provinces.open-api.vn/api/?depth=1", ThanhPho, "menu_0");

function ThanhPho(data, paramID) {
  const menu = document.getElementById(paramID);
  data.forEach((item) => {
    menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
  });
  menu.addEventListener("change", () => {
    getData(
      "https://provinces.open-api.vn/api/d/search/?q=" + menu.value,
      quanhuyen, "menu_1"
    );
  });
}

function quanhuyen(data, paramID) {
  const menu = document.getElementById(paramID);
  menu.innerHTML = '<option value="">--Choose--</option>'
  const last_menu = document.getElementById('menu_2');
  last_menu.innerHTML = '<option value="">--Choose--</option>'
  data.forEach((item) => {
    menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
  });
  menu.addEventListener("change", () => {
    getData(
      "https://provinces.open-api.vn/api/w/search/?q=" + menu.value,
      phuongxa,"menu_2"
    );
  });
}

function phuongxa(data, paramID) {
  const menu = document.getElementById(paramID);
  menu.innerHTML = '<option value="">--Choose--</option>'
  data.forEach((item) => {
    menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
  });
}

class Loc {
  constructor(data) {
    this.data = data
  }

}