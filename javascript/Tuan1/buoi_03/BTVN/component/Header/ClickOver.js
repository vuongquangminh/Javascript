function ClickOver() {
  document.addEventListener("click", function (e) {
    // Kiểm tra xem sự kiện click có xảy ra bên ngoài của toast hay không
    if (e.target.classList != "List") {
      const group = document.querySelector(".group");
      group && group.remove()
      let List = document.querySelectorAll(".header_Center .List");
      List.forEach(item => {
        item.style.removeProperty('background-color')
      })
    }
  })
}

export default ClickOver;