import { menus } from "../../index.js";
function Show_Child() {
  let List = document.querySelectorAll(".header_Center .List");
  console.log(List);

  List.forEach((item, index) => {
    item.onclick = () => {
      const group = document.querySelector(".group");
      group && group.remove();
      List.forEach((item) => {
        item.style.removeProperty("background-color", "position");
      });

      item.style.backgroundColor = "#61a861";
      item.style.position = "relative";

      const gr = document.createElement("div");
      gr.setAttribute("class", "group");
      menus[index].childrent.forEach((child) => {
        if (child.title == undefined) {
          child.title = "";
        }

        const list_gr = document.createElement("div");
        list_gr.setAttribute("class", "list_gr");
        gr.appendChild(list_gr);
        const tag_p = document.createElement("p");
        tag_p.setAttribute("class", "title");
        tag_p.textContent = `${child.title}`;
        list_gr.appendChild(tag_p);
        const list_Item = document.createElement("div");
        list_Item.setAttribute("class", "list_Item");
        list_gr.appendChild(list_Item);
        child.option.forEach((op) => {
          const tag_a = document.createElement("a");
          tag_a.setAttribute("class", "item");
          tag_a.setAttribute("href", "");
          tag_a.textContent = `${op}`;
          list_Item.appendChild(tag_a);
        });
      });
      item.appendChild(gr);

      // Cach 2
      // let txt = `<div class="group">`;
      // menus[index].childrent.forEach((child) => {
      //   if(child.title == undefined) {
      //     child.title = ''

      //   }
      //   txt += `
      //         <div class = "list_gr">
      //             <p class="title">${child.title}</p>
      //             <div class ="list_Item">`;
      //     child.option.forEach((op) => {
      //       txt += `
      //                 <a class ="item" href="">${op}</a>
      //             `;
      //     });
      //     txt += "</div></div>";
      //     // console.log(txt)
      //   });
      //   txt += "</div>"

      //   item.innerHTML += txt
    };
  });
}

export default Show_Child;
