function Language() {
    const language = {
        title: "Change language",
        value: [
          "English",
          "العربية",
          "简体中文",
          "Français",
          "Русский",
          "Español",
          "繁體中文",
          "日本語",
          "Português",
          "Українська",
        ],
      };
    
      
      const NavBar = document.querySelector("#NavBar");
      
      const card = document.createElement('div')
        card.setAttribute('class','card language')
          NavBar.appendChild(card)
        const card_header = document.createElement('div')
        card_header.setAttribute('class','card-header')
        card_header.textContent = `${language.title}`
        card.appendChild(card_header)

        const list_check = document.createElement('div')
        list_check.setAttribute('class','list_check')
        card.appendChild(list_check)

        language.value.forEach((item,index) => {
            const form_check = document.createElement('div')
            form_check.setAttribute('class','form-check')
              list_check.appendChild(form_check)
            const tag_input = document.createElement('input')
            tag_input.setAttribute('class','form-check-input')
            tag_input.setAttribute('type','radio')
            tag_input.setAttribute('name','flexRadioDefault')
            tag_input.setAttribute('id',`flexRadioDefault${index}`)
            tag_input.setAttribute('checked','')
              form_check.appendChild(tag_input)

            const tag_label = document.createElement('label')
            tag_label.setAttribute('class','form-check-label')
            tag_input.setAttribute('for',`flexRadioDefault${index}`)
            tag_label.textContent = `${item}`
              form_check.appendChild(tag_label)


        })

      // NavBar.innerHTML += `
      // <div class="card language">
      //     <div class="card-header">
      //       ${language.title}
      //     </div>
      //   <div class="list_check">
      //     `
      //     const list_check = document.querySelector('.list_check')
      //     language.value.forEach((item,index) => {
      //       list_check.innerHTML += `
      //         <div class="form-check">
      //           <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${index}" checked>
      //           <label class="form-check-label" for="flexRadioDefault${index}">
      //             ${item}
      //           </label>
      //         </div>`
      //     })
      //   + '</div>'
      // +'</div>'
      // ;
      const icons = document.querySelectorAll(".list_icon .icon");
icons[1].onclick = () => {
  const check = document.querySelector('#NavBar .card-body')
  if(check.classList.contains('d-block')) {
    check.classList.remove('d-block')
  }
  document.querySelector(".card.language").classList.toggle("d-block");
};
}

export default Language;