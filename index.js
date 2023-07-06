// // // import axios from 'axios';

// // const wrapper = document.querySelector("#wrapper");
// // console.log(wrapper);
// // for (let i = 0; i < 3; i++) {
// //   wrapper.innerHTML += `<select name="" id="menu_${i}">`;
// //   const select = document.querySelector(`#menu_${i}`);
// //   select.innerHTML = `<option value="">--Choose--</option>`;
// // }
// // // get API
// // async function getData(url, func, paramID) {
// //   await fetch(url)
// //     .then((data) => data.json())
// //     .then((data) => {
// //       func(data, paramID);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }
// // getData("https://provinces.open-api.vn/api/?depth=1", ThanhPho, "menu_0");

// // function ThanhPho(data, paramID) {
// //   const menu = document.getElementById(paramID);
// //   data.forEach((item) => {
// //     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
// //   });
// //   menu.addEventListener("change", () => {
// //     getData(
// //       "https://provinces.open-api.vn/api/d/search/?q=" + menu.value,
// //       quanhuyen, "menu_1"
// //     );
// //   });
// // }

// // function quanhuyen(data, paramID) {
// //   const menu = document.getElementById(paramID);
// //   menu.innerHTML = '<option value="">--Choose--</option>'
// //   const last_menu = document.getElementById('menu_2');
// //   last_menu.innerHTML = '<option value="">--Choose--</option>'
// //   data.forEach((item) => {
// //     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
// //   });
// //   menu.addEventListener("change", () => {
// //     getData(
// //       "https://provinces.open-api.vn/api/w/search/?q=" + menu.value,
// //       phuongxa,"menu_2"
// //     );
// //   });
// // }

// // function phuongxa(data, paramID) {
// //   const menu = document.getElementById(paramID);
// //   menu.innerHTML = '<option value="">--Choose--</option>'
// //   data.forEach((item) => {
// //     menu.innerHTML += `<option value='${item.name}'>${item.name}</option>`;
// //   });
// // }





class DateVN extends Date {
  constructor(ngay, thang,nam) {
    super()
    this.ngay = super.getDay(),
    this.thang = super.getMonth(),
    this.nam = super.getFullYear()

  }
  // Ngay VN
  get NgayVN() {

    const listNgay = [
      'CN',
      'Thu 2',
      'Thu 3',
      'Thu 4',
      'Thu 5',
      'Thu 6',
      'Thu 7',

    ]
    return (
      `Hom nay la: ${listNgay[this.ngay]}`)
  }
  set NgayVN(value) {
    const listNgay = [
      'CN',
      'Thu 2',
      'Thu 3',
      'Thu 4',
      'Thu 5',
      'Thu 6',
      'Thu 7',
    ]
    listNgay.forEach(ngay => {
      if (ngay === value) {
        this.ngay = value
        console.log(`Hom nay la: ${this.ngay} la sai  `)
      }
    })
  }
  // Nam VN
  get Nam() {
    return (
      `Nam cua ban la: ${this.nam}`
      )
  }
  SetNam(value) {

    if(value == super.getFullYear()) {
      console.log(`Nam cua ban la: ${value}`)
    } else {
      console.log(`Nam ${value} cua ban sai voi nam thuc te`)
    }
  }

  // Thang VN

  get Thang() {

    const thang = this.getMonth();
    const listThang = [
      'Thang 1',
      'Thang 2',
      'Thang 3',
      'Thang 4',
      'Thang 5',
      'Thang 6',
      'Thang 7',
      'Thang 8',
      'Thang 9',
      'Thang 10',
      'Thang 11',
      'Thang 12',
    ]
    console.log(`Thang nay la: ${listThang[thang]}`)
  }
  set Thang(value) {
    if(value == super.getMonth()) {
      console.log(`Ban da nhap dung Thang cua ban : ${value}`)
    } else {
      console.log(`Thang ${value} cua ban khong dung voi thuc te`)
    }
  }



}
// debugger
const VN = new DateVN
console.log(VN.NgayVN)
VN.NgayVN = 'Thu 3'
console.log(VN.Nam)
VN.SetNam(2024)
VN.Thang;
VN.Thang = 'Thang 9'
VN.Gio