import { menus } from "../../index.js";
function Show_Child() {
  let List = document.querySelectorAll(".header_Center .List");
  console.log(List)
  
  List.forEach((item,index) => {
    item.onclick =() => {
      const group = document.querySelector(".group");
      group && group.remove()
      List.forEach((item) => {
        item.style.removeProperty("background-color","position");
      });
      item.style.backgroundColor = "#61a861";
      item.style.position= 'relative';
      let txt = `<div class="group">`;
      menus[index].childrent.forEach((child) => {
        if(child.title == undefined) {
          child.title = ''
          
        }
        txt += `
              <div class = "list_gr">
                  <p class="title">${child.title}</p>
                  <div class ="list_Item">`;
          child.option.forEach((op) => {
            txt += `
                      <a class ="item" href="">${op}</a>
                  `;
          });
          txt += "</div></div>";
          // console.log(txt)
        });
        txt += "</div>"

        item.innerHTML += txt;
        // group.style.display = "flex";
        // document.querySelector('.group').classList.toggle('d-none')
    }
  })
}

export default Show_Child;