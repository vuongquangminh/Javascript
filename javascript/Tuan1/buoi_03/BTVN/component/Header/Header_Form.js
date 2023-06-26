import { menus,list_Icon } from "../../index.js";

function Header_Form() {
    const header = document.querySelector(".header");
//Cach 1 
    const content = document.createElement('div')
    content.setAttribute('class','content')

    const card = document.createElement('div')
    card.setAttribute('class','card text-bg-dark')
        content.appendChild(card)
    
    const tag_img = document.createElement('img')
    tag_img.setAttribute('src','https://api.gbif.org/v1/image/unsafe/1500x750/http:%2F%2Fimages.ctfassets.net%2Fuo17ejk9rkwj%2FDwhektwBvXdBaayDUUm2D%2F2b362f6116c7781c2355ed61a4a0499c%2Fvaticano.jpg')
    tag_img.setAttribute('class','card-img')
        card.appendChild(tag_img)
    
    const card_overlay = document.createElement('div')
    card_overlay.setAttribute('class','card-img-overlay')
    
        card.appendChild(card_overlay)
// Child 1 of card_overlay
    const fixed_Head = document.createElement('div')
    fixed_Head.setAttribute('class','fixed_Head')

        card_overlay.appendChild(fixed_Head)

    const tag_nav = document.createElement('nav')
    tag_nav.setAttribute('id','NavBar')
        fixed_Head.appendChild(tag_nav)

    const img = document.createElement('div')
    img.setAttribute('class','img')
        tag_nav.appendChild(img)

    const tag_svg = document.createElement('svg')
    tag_svg.setAttribute('viewBox','90 239.1 539.7 523.9')
    tag_svg.setAttribute('xmlns','http://www.w3.org/2000/svg')
        img.appendChild(tag_svg)

    const tag_path1 = document.createElement('path')
    tag_path1.setAttribute('class','gbif-logo-svg')
    tag_path1.setAttribute('d','M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4')
    const tag_path2 = document.createElement('path')
    tag_path2.setAttribute('class','gbif-logo-svg')
    tag_path2.setAttribute('d','M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6c28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8c1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731')

        tag_svg.appendChild(tag_path1)
        tag_svg.appendChild(tag_path2)

    const h_Center = document.createElement('div')
    h_Center.setAttribute('class','header_Center')
        tag_nav.appendChild(h_Center)
// Child 2 of card_overlay

    const overlay = document.createElement('div')
    overlay.setAttribute('class','overlay')
        card_overlay.appendChild(overlay)

    const tag_h3 = document.createElement('h3')
    tag_h3.textContent = 'GBIF | Global Biodiversity Information Facility'
    const tag_h1 = document.createElement('h1')
    tag_h1.textContent = 'Free and open access to biodiversity data'
        overlay.appendChild(tag_h3)
        overlay.appendChild(tag_h1)
    const list_search_Top1 = document.createElement('div')
    list_search_Top1.setAttribute('class','list_search_Top')
        overlay.appendChild(list_search_Top1)
    const tag_a_1 = document.createElement('a')
    tag_a_1.setAttribute('href','')
    tag_a_1.textContent = 'Occurrences'

    const tag_a_2 = document.createElement('a')
    tag_a_2.setAttribute('href','')
    tag_a_2.textContent = 'Species'

    const tag_a_3 = document.createElement('a')
    tag_a_3.setAttribute('href','')
    tag_a_3.textContent = 'Datasets'

    const tag_a_4 = document.createElement('a')
    tag_a_4.setAttribute('href','')
    tag_a_4.textContent = 'Publishers'

    const tag_a_5 = document.createElement('a')
    tag_a_5.setAttribute('href','')
    tag_a_5.textContent = 'Resources'
        list_search_Top1.appendChild(tag_a_1)
        list_search_Top1.appendChild(tag_a_2)
        list_search_Top1.appendChild(tag_a_3)
        list_search_Top1.appendChild(tag_a_4)
        list_search_Top1.appendChild(tag_a_5)

    const tag_ip = document.createElement('input')
    tag_ip.setAttribute('type','text')
    tag_ip.setAttribute('placeholder','Search')
        overlay.appendChild(tag_ip)
    
    const list_search_Top2 = document.createElement('div')
    list_search_Top2.setAttribute('class','list_search_Top')
        overlay.appendChild(list_search_Top2)
    const tag_a_01 = document.createElement('a')
    tag_a_01.setAttribute('href','')
    tag_a_01.textContent = 'What is GBIF?'

    const tag_a_02 = document.createElement('a')
    tag_a_02.setAttribute('href','')
    tag_a_02.textContent = 'About GBIF Viet Nam'
        list_search_Top2.appendChild(tag_a_01)
        list_search_Top2.appendChild(tag_a_02)

        header.appendChild(content)
    // Cach 2
// header.innerHTML = `
// <div class="content">
//     <div class="card text-bg-dark">
//        <img src="https://api.gbif.org/v1/image/unsafe/1500x750/http:%2F%2Fimages.ctfassets.net%2Fuo17ejk9rkwj%2FDwhektwBvXdBaayDUUm2D%2F2b362f6116c7781c2355ed61a4a0499c%2Fvaticano.jpg" class="card-img" alt="..."> 
//         <div class="card-img-overlay">
//         <div class= "fixed_Head">
//               <nav id="NavBar">
//                   <div class="img">
//                   <svg viewBox="90 239.1 539.7 523.9" xmlns="http://www.w3.org/2000/svg">
//                   <path class="gbif-logo-svg" d="M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4"></path>
//                   <path class="gbif-logo-svg" d="M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6
//                     c28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8
//                     c1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731"></path>
//                   </svg></div>
//                   <div class = 'header_Center'></div>
//                   </nav>
//                 </div>
            
//             <div class="overlay">

//                 <h3>GBIF | Global Biodiversity Information Facility</h3>
//                 <h1>Free and open access to biodiversity data</h1>
//                 <div class="list_search_Top">
//                     <a href="">Occurrences</a>
//                     <a href="">Species</a>
//                     <a href="">Datasets</a>
//                     <a href="">Publishers</a>
//                     <a href="">Resources</a>
//                 </div>
//                 <input type="text" placeholder="Search">
//                 <div class="list_search_Top">
//                     <a href="">What is GBIF?</a>
//                     <a href="">About GBIF Viet Nam</a>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>`;

    
const NavBar = document.querySelector("#NavBar");
const header_Center = document.querySelector(".header_Center");
menus.forEach((menu, index) => {
  header_Center.innerHTML += `<div class ="List">${menu.name}</div>`;
});



}

export default Header_Form;
