function ValidateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Ví dụ sử dụng
const email1 = "example@gmail.com";
console.log(ValidateEmail(email1)); // true

const email2 = "invalid_email";
console.log(ValidateEmail(email2)); // false

export default ValidateEmail;
