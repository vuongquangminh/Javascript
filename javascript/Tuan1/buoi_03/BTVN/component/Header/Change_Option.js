import { Login } from "../../index.js";
import Check_Value from "./Check_Value.js";


function Change_Option() {
  const cardLogin = document.querySelector("#NavBar .groupLogin");
  const Options = document.querySelectorAll(".list_items li");
  let active = document.querySelectorAll(".list_items li a");
  console.log(active)
  Options[0].onclick = (e) => {
    active.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    
    
    while(cardLogin.firstChild) {
        cardLogin.removeChild(cardLogin.firstChild)
    }
    //Cach 1

    const email = document.createElement('div')
        email.setAttribute('class','email')
            cardLogin.appendChild(email)
        const tag_lable_1 = document.createElement('label')
        tag_lable_1.setAttribute('for','username')
        tag_lable_1.textContent = `${Login[0].email.label}`
            email.appendChild(tag_lable_1)

        const tag_input_1 = document.createElement('input')
            tag_input_1.setAttribute('type','text')
            tag_input_1.setAttribute('id','username')
            tag_input_1.setAttribute('name','username')
            tag_input_1.setAttribute('value','')
                email.appendChild(tag_input_1)

    const password = document.createElement('div')
        password.setAttribute('class','password')
            cardLogin.appendChild(password)

        const tag_lable_2 = document.createElement('label')
            tag_lable_2.setAttribute('for','username')
            tag_lable_2.textContent = `${Login[0].pass.label}`
                password.appendChild(tag_lable_2)

        const tag_input_2 = document.createElement('input')
            tag_input_2.setAttribute('type','password')
            tag_input_2.setAttribute('id','password')
            tag_input_2.setAttribute('name','username')
            tag_input_2.setAttribute('value','')
                password.appendChild(tag_input_2)

    const btn_inside = document.createElement('div')
        btn_inside.setAttribute('class','d-grid gap-2')
            cardLogin.appendChild(btn_inside)

        const tag_btn_inside = document.createElement('button')
            tag_btn_inside.setAttribute('class','inside btn btn-primary border-0 mt-4')
            tag_btn_inside.setAttribute('type','button')
            tag_btn_inside.setAttribute('style','background: #71b171;')
            tag_btn_inside.textContent = 'Sign in'
                btn_inside.appendChild(tag_btn_inside)

        





    // Cach 2
    // cardLogin.innerHTML = `
    //         <div class='email'>
    //             <label for="username">${Login[0].email.label}</label>
    //             <input type="text" id="username" name="username" value=''>
    //         </div>
    //         <div class='password'>
    //             <label for="username">${Login[0].pass.label}</label>
    //             <input type="password" id="password" name="username" value=''>
    //         </div>
    //         <div class="d-grid gap-2">
    //             <button class="inside btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Sign in</button>
    //         </div>`;

            Check_Value()
  };

  Options[1].onclick = (e) => {
    active.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    while(cardLogin.firstChild) {
        cardLogin.removeChild(cardLogin.firstChild)
    }

    //Cach 1


    const location = document.createElement('div')
        location.setAttribute('class','location')
            cardLogin.appendChild(location)
        const tag_lable_1 = document.createElement('label')
        tag_lable_1.setAttribute('for','username')
        tag_lable_1.textContent = `${Login[1].location.country}`
            location.appendChild(tag_lable_1)

        const tag_input_1 = document.createElement('input')
        tag_input_1.setAttribute('type','text')
        tag_input_1.setAttribute('id','username')
        tag_input_1.setAttribute('name','username')
        tag_input_1.setAttribute('value',`${Login[1].location.placehoder}`)
            location.appendChild(tag_input_1)

    const email = document.createElement('div')
        email.setAttribute('class','email')
            cardLogin.appendChild(email)
        const tag_lable_2 = document.createElement('label')
            tag_lable_2.setAttribute('for','username')
            tag_lable_2.textContent = `${Login[1].email.label}`
                email.appendChild(tag_lable_2)
    
        const tag_input_2 = document.createElement('input')
            tag_input_2.setAttribute('type','text')
            tag_input_2.setAttribute('id','username')
            tag_input_2.setAttribute('name','username')
            tag_input_2.setAttribute('value','')
                email.appendChild(tag_input_2)
    
    const user = document.createElement('div')
        user.setAttribute('class','user')
            cardLogin.appendChild(user)
        const tag_lable_3 = document.createElement('label')
            tag_lable_3.setAttribute('for','username')
            tag_lable_3.textContent = `${Login[1].user.label}`
                user.appendChild(tag_lable_3)

        const tag_input_3 = document.createElement('input')
            tag_input_3.setAttribute('type','text')
            tag_input_3.setAttribute('id','username')
            tag_input_3.setAttribute('name','username')
            tag_input_3.setAttribute('value','')
                user.appendChild(tag_input_3)

    const password = document.createElement('div')
        password.setAttribute('class','password')
            cardLogin.appendChild(password)

        const tag_lable_4 = document.createElement('label')
            tag_lable_4.setAttribute('for','username')
            tag_lable_4.textContent = `${Login[1].pass.label}`
                password.appendChild(tag_lable_4)

        const tag_input_4 = document.createElement('input')
            tag_input_4.setAttribute('type','password')
            tag_input_4.setAttribute('id','password')
            tag_input_4.setAttribute('name','username')
            tag_input_4.setAttribute('value','')
                password.appendChild(tag_input_4)

    
    const btn_inside = document.createElement('div')
        btn_inside.setAttribute('class','d-grid gap-2')
            cardLogin.appendChild(btn_inside)

        const tag_btn_inside = document.createElement('button')
            tag_btn_inside.setAttribute('class','inside btn btn-primary border-0 mt-4')
            tag_btn_inside.setAttribute('type','button')
            tag_btn_inside.setAttribute('style','background: #71b171;')
            tag_btn_inside.textContent = 'Next'
                btn_inside.appendChild(tag_btn_inside)


    // // Cach 2
    // cardLogin.innerHTML = `
    //         <div class='location'>
    //             <label for="username">${Login[1].location.country}</label>
    //             <input type="text" id="username" name="username" value = '${Login[1].location.placehoder}'>
    //         </div>
    //         <div class='email'>
    //             <label for="username">${Login[1].email.label}</label>
    //             <input type="text" id="username" name="username" value='' required>
    //         </div>
    //         <div class='user'>
    //             <label for="username">${Login[1].user.label}</label>
    //             <input type="text" id="password" name="username" value='' required>
    //         </div>
    //         <div class='password'>
    //             <label for="username">${Login[1].pass.label}</label>
    //             <input type="password" id="password" name="username" value='' required>
    //         </div>
    //         <div class="d-grid gap-2">
    //             <button class="inside btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Next</button>
    //         </div>`;

        Check_Value()

  };
}
export default Change_Option;