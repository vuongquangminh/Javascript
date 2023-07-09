// // import axios from 'axios';

// const wrapper = document.querySelector("#wrapper");
// console.log(wrapper);
// for (let i = 0; i < 3; i++) {
//   wrapper.innerHTML += `<select name="" id="menu_${i}">`;
//   const select = document.querySelector(`#menu_${i}`);
//   select.innerHTML = `<option value="">--Choose--</option>`;
// }
// // get API
// async function getData(url, func, paramID) {
//   await fetch(url)
//     .then((data) => data.json())
//     .then((data) => {
//       func(data, paramID);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getData("https://provinces.open-api.vn/api/?depth=1", ThanhPho, "menu_0");

// function ThanhPho(data, paramID) {
//   const menu = document.getElementById(paramID);
//   data.forEach((item) => {
//     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
//   });
//   menu.addEventListener("change", () => {
//     getData(
//       "https://provinces.open-api.vn/api/d/search/?q=" + menu.value,
//       quanhuyen, "menu_1"
//     );
//   });
// }

// function quanhuyen(data, paramID) {
//   const menu = document.getElementById(paramID);
//   menu.innerHTML = '<option value="">--Choose--</option>'
//   const last_menu = document.getElementById('menu_2');
//   last_menu.innerHTML = '<option value="">--Choose--</option>'
//   data.forEach((item) => {
//     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
//   });
//   menu.addEventListener("change", () => {
//     getData(
//       "https://provinces.open-api.vn/api/w/search/?q=" + menu.value,
//       phuongxa,"menu_2"
//     );
//   });
// }

// function phuongxa(data, paramID) {
//   const menu = document.getElementById(paramID);
//   menu.innerHTML = '<option value="">--Choose--</option>'
//   data.forEach((item) => {
//     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
//   });
// }





class DateVN extends Date {
  constructor(ngay, thang,nam) {
    super()
    this.ngay = super.getDate(),
    this.thu = super.getDay(),
    this.thang = super.getMonth(),
    this.nam = super.getFullYear(),
    this.gio = super.getHours(),
    this.phut = super.getMinutes(),
    this.giay = super.getSeconds()
  }

  get Ngay() {
    return `Ngày ${this.ngay}`
  }
  // Ngay VN
  get Thu() {

    const listNgay = [
      'Chủ nhật',
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',

    ]
    return (
      ` ${listNgay[this.thu]}`)
  }
  set Thu(value) {
    const listNgay = [
      'Chủ nhật',
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
    ]
    listNgay.forEach(ngay => {
      if (ngay === value) {
        this.thu = value
        console.log(`Hôm nay là: ${this.thu} là đúng  `)
      }
    })
  }
  // Nam VN
  get Nam() {
    return (
      `Năm ${this.nam}`
      )
  }
  SetNam(value) {

    if(value == super.getFullYear()) {
      console.log(`Bạn đã nhập đúng năm`)
    } else {
      console.log(`Bạn nhập sai năm`)
    }
  }

  // Thang VN

  get Thang() {

    const thang = this.getMonth();
    const listThang = [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ]
    return ` ${listThang[thang]}`
  }
  set Thang(value) {
    if(value == super.getMonth()) {
      console.log(`Bạn đã nhập đúng tháng`)
    } else {
      console.log(`Bạn đã nhập sai tháng`)
    }
  }
  
  get Gio() {
    return `${this.gio}`
  }
  get Phut() {
    return `${this.phut}`
  }
  get Giay() {
    return `${this.giay}`
  }



}
// debugger

// console.log(VN.Thu)
// // VN.Thu = 'Thu 3'
// console.log(VN.Nam)
// // VN.SetNam(2024)
// VN.Thang;
// // VN.Thang = 'Thang 9'
// VN.Gio
// console.log(VN.Ngay)
const wrapper = document.querySelector('#wrapper')

const VN = new DateVN
wrapper.innerHTML = `<p>${VN.Thu}, ${VN.Ngay} ${VN.Thang} ${VN.Nam}</p> <p>${VN.Gio}:${VN.Phut}:${VN.Giay}</p>`
// var aa = setInterval(()=> {
//   const VN = new DateVN
//   wrapper.innerHTML = `<p>${VN.Thu}, ${VN.Ngay} ${VN.Thang} ${VN.Nam}</p> <p>${VN.Gio}:${VN.Phut}:${VN.Giay}</p>`
// },1000)
// clearInterval(aa);
