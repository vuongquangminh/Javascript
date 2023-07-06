// class VietnameseDate extends Date {
//   constructor() {
//     super();
//   }

//   getVietnameseDateString() {
//     const day = this.getDate();
//     const month = this.getMonth() + 1;
//     const year = this.getFullYear();

//     return `${day}/${month}/${year}`;
//   }

//   getVietnameseDayOfWeek() {
//     const daysOfWeek = [
//       'Chủ nhật',
//       'Thứ hai',
//       'Thứ ba',
//       'Thứ tư',
//       'Thứ năm',
//       'Thứ sáu',
//       'Thứ bảy'
//     ];

//     const dayOfWeek = this.getDay();
//     return daysOfWeek[dayOfWeek];
//   }
// }

// // Sử dụng lớp VietnameseDate
// const vietnameseDate = new VietnameseDate();
// console.log(vietnameseDate.getVietnameseDateString()); // Kết quả: "3/7/2023"
// console.log(vietnameseDate.getVietnameseDayOfWeek()); // Kết quả: "Thứ ba"


// class RandomMe {
//     constructor () {

//     }
//     get run() {
//         console.log(Math.floor(Math.random() * 100))
//     }
// }
// for(let i=0; i<100; i++) {
//     const hihi = new RandomMe()
//     hihi.run
// }

class MathUtils { 
    constructor(x, y) { 
        this.x = x; 
        this.y = y; 
      } 
    static add(x, y) { 
      return x + y; 
    } 
   
    subtract() { 
      return this.x - this.y; 
    } 
   
    
  } 
   
  const mathUtils = new MathUtils(10, 20); 

  console.log(MathUtils.add(10, 20)); // 30 
  console.log(mathUtils.subtract()); // -10