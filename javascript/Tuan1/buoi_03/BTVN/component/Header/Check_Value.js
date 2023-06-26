import ValidateEmail from "./ValidateEmail.js";

function Check_Value() {
  const inside = document.querySelector(".inside");
  // Xu ly error
  const input = document.querySelectorAll(".groupLogin input");
  // Khi click vao Sign
  inside.onclick = () => {
    // reset input
    const old_Error = document.querySelectorAll(".error");
    // console.log()
    old_Error &&
      old_Error.forEach((err) => {
        err.remove();
      });
      const email = document.querySelector(".email input");
    input.forEach((item) => {
      if (item.value.length < 8) {
        item.style.borderBottomColor = "red";
        // item.value = "";
        item.focus()
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerHTML = "Please enter a valid email";
        item.parentNode.appendChild(error);
      } 
      else {
          item.style.borderBottomColor = "#ccc";
      }
    });
    if (!ValidateEmail(email.value)) {
      const old_email = document.querySelector(".email .error");
      old_email && old_email.remove();

        email.style.borderBottomColor =
          "red";
        // email.value = "";
        email.focus()
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerHTML = "Please enter a valid email";
        email.parentNode.appendChild(error);
    }
  };

  // Khi element change
  input.forEach((item) => {
    item.onchange = () => {
      item.parentNode.querySelector(".error") &&
        item.parentNode.querySelector(".error").remove();
      item.style.borderBottomColor = "#ccc";
    };
  });
}

export default Check_Value;
