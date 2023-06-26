import { list_Icon, Login } from "../../index.js";

function Icon_HeadRight() {
    const list_icon = document.querySelector(".list_icon");
    list_Icon[0].icon.forEach((icon, index) => {
      // Cach 1
      const ic = document.createElement('div')
      ic.setAttribute('class','icon')
      const tag_i = document.createElement('i')
      tag_i.setAttribute('class',`${icon}`)
      ic.appendChild(tag_i)
      list_icon.appendChild(ic)
  
  
      // Cach 2:
      // list_icon.innerHTML += `
      // <div class="icon">
      //   <i class="${icon}"></i>
      // </div>`;
    });
  
  
    //Cach 1:
    const id_Login = document.createElement('div')
    id_Login.setAttribute('id','Login')
  
  
    // con 1 (p)
    const tag_p =document.createElement('p')
    tag_p.setAttribute('class','login')
    const btn = document.createElement('button')
    btn.setAttribute('class','btn btn-light login')

    btn.textContent = 'Login'
    console.log(btn)
  
    tag_p.appendChild(btn)
    id_Login.appendChild(tag_p)
  
    //con 2 ()
  
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    const NavBar = document.querySelector("#NavBar");
  
    NavBar.appendChild(card)
  
    // id_Login.appendChild()
    const card_body = document.createElement('div')
    card_body.setAttribute('class','card card-body')
    card.appendChild(card_body)
  
    // con 1 of card_body
    const tag_ul = document.createElement('ul')
    tag_ul.setAttribute('class','list_items')
    card_body.appendChild(tag_ul)
  
    const tag_li_1 = document.createElement('li')
    tag_li_1.setAttribute('class','nav-item')
  
  
    tag_ul.appendChild(tag_li_1)
  
    const tag_a_1 = document.createElement('a')
    tag_a_1.setAttribute('class','nav-link active')

    tag_a_1.setAttribute('href','#')
    tag_a_1.textContent = `${Login[0].name}`
  
    tag_li_1.appendChild(tag_a_1)
  
    const tag_li_2 = document.createElement('li')
    tag_li_2.setAttribute('class','nav-item')
    tag_ul.appendChild(tag_li_2)
  
    const tag_a_2 = document.createElement('a')
    tag_a_2.setAttribute('class','nav-link')
    tag_a_2.setAttribute('href','#')
    tag_a_2.textContent = `${Login[1].name}`
    tag_li_2.appendChild(tag_a_2)
  
    // childe 2 of card_body
    const gr_login = document.createElement('div')
    gr_login.setAttribute('class','groupLogin')
    
    // mini child 1
    const email = document.createElement('div')
    email.setAttribute('class','email')
    
    gr_login.appendChild(email)
  
    const tag_label_1 = document.createElement('label')
    tag_label_1.setAttribute('for','username')
    tag_label_1.textContent = `${Login[0].email.label}`
    tag_label_1.setAttribute('for','username')
    email.appendChild(tag_label_1)
    const tag_ip_1 = document.createElement('input')
    tag_ip_1.setAttribute('type','text')
    tag_ip_1.setAttribute('id','username')
    tag_ip_1.setAttribute('name','username')
    tag_ip_1.setAttribute('value','')
    email.appendChild(tag_ip_1)
    card_body.appendChild(gr_login)
    // mini child 2
    const password = document.createElement('div')
    password.setAttribute('class','password')
  
    gr_login.appendChild(password)
  
    const tag_label_2 = document.createElement('label')
    tag_label_2.setAttribute('for','username')
    tag_label_2.textContent = `${Login[0].pass.label}`
    tag_label_2.setAttribute('for','username')
    password.appendChild(tag_label_2)
    const tag_ip_2 = document.createElement('input')
    tag_ip_2.setAttribute('type','text')
    tag_ip_2.setAttribute('id','username')
    tag_ip_2.setAttribute('name','username')
    tag_ip_2.setAttribute('value','')
    password.appendChild(tag_ip_2)
  
    const btn_inside = document.createElement('div')
    btn_inside.setAttribute('class','d-grid gap-2')
    const btn_text = document.createElement('button')
    btn_text.setAttribute('class','inside btn btn-primary border-0 mt-4')
    btn_text.setAttribute('type','button')
    btn_text.setAttribute('style','background: #71b171;');
    btn_text.textContent = 'Sign in'
    btn_inside.appendChild(btn_text)
    gr_login.appendChild(btn_inside)
  
    list_icon.appendChild(id_Login)
  
  
    const btn_show = document.querySelector('.btn.login')
    btn_show.onclick = () => {
      const check = document.querySelector('.card.language')
      if(check.classList.contains('d-block')) {
        check.classList.remove('d-block')
      }
      document.querySelector('#NavBar .card-body').classList.toggle('d-block')
    }
  
  
  
    // Cach 2:
    // list_icon.innerHTML += `
    // <div id="Login">
    //   <p class="login">
    //       <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    //           Login
    //       </button>
    //   </p>
    //   <div class="collapse aa" id="collapseExample">
    //       <div class="card card-body">
    //           <ul class="nav nav-underline">
    //               <li class="nav-item">
    //                   <a class="nav-link active" aria-current="page" href="#">${Login[0].name}</a>
    //               </li>
    //               <li class="nav-item">
    //                   <a class="nav-link " href="#">${Login[1].name}</a>
    //               </li>
    //           </ul>
    //           <div class ="groupLogin">
    //             <div class='email'>
    //                 <label for="username">${Login[0].email.label}</label>
    //                 <input type="text" id="username" name="username" value=''>
    //             </div>
    //             <div class='password'>
    //                 <label for="username">${Login[0].pass.label}</label>
    //                 <input type="password" id="password" name="username" value=''>
    //             </div>
    //             <div class="d-grid gap-2">
    //                 <button class="inside btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Sign in</button>
    //             </div>
    //           </div>
  
    //       </div>
    //   </div>
      
    // </div>
    // `;

    console.log(123)
}

export default Icon_HeadRight;