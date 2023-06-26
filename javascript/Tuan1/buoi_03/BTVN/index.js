import ClickOver from "./component/Header/ClickOver.js";
import ScrollY_Header from "./component/Header/ScrollY_Header.js";
import Show_Child from "./component/Header/Show_Child.js";
import Language from "./component/Header/Language.js";
import Change_Option from "./component/Header/Change_Option.js";
import Header_Form from "./component/Header/Header_Form.js";
import Random_img from "./component/Header/Random_img.js";
import Check_Value from "./component/Header/Check_Value.js";
import Icon_HeadRight from "./component/Header/Icon_HeadRight.js";

const menus = [
  {
    name: "Get data",
    childrent: [
      {
        option: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Occurrence snapshots",
          "Hosted portals",
          "Data papers",
        ],
      },
    ],
  },
  {
    name: "How_To",
    childrent: [
      {
        title: "Share data",
        option: [
          "Quick-start guide",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Use data",
        option: [
          "Featured data use",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "Tools",
    childrent: [
      {
        title: "Publishing",
        option: [
          "IPT",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Data access and use",
        option: [
          "Hosted portals",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
      {
        title: "GBIF labs",
        option: [
          "Species matching",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "Community",
    childrent: [
      {
        title: "Network",
        option: [
          "Participant network",
          "Nodes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Volunteers",
        option: [
          "Mentors",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
      {
        title: "Activities",
        option: [
          "Capacity enhancement",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "About",
    childrent: [
      {
        title: "Inside GBIF",
        option: [
          "What is GBIF?",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "News & outreach",
        option: [
          "News",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
];
const list_Icon = [
  {
    name: "Right_Header",
    icon: [
      "fa-solid fa-heart-pulse",
      "fa-solid fa-language",
      "fa-solid fa-magnifying-glass",
      "fa-regular fa-message",
    ],
  },
];
Header_Form()
function headeRight() {
  //cach 1
  const head_R = document.createElement('div')
  head_R.setAttribute('class','headRight')
  const list_ic = document.createElement('div')
  list_ic.setAttribute('class','list_icon')
  head_R.appendChild(list_ic)
  NavBar.appendChild(head_R)

  //cach 2
//   NavBar.innerHTML += `<div class="headRight">
//     <div class="list_icon">
        
//     </div>
// </div>`;
}
headeRight();

const Login = [
  {
    name: "Login",
    email: {
      label: "Username or email",
      placehoder: "nhap email",
    },
    pass: {
      label: "Password",
      placehoder: "nhap matkhau",
    },
  },
  {
    name: "Register",
    location: {
      country: "Country",
      placehoder: "Viet Nam",
    },
    email: {
      label: "email",
      placehoder: "nhap email",
    },
    user: {
      label: "Username",
      placehoder: "nhap matkhau",
    },
    pass: {
      label: "Password",
      placehoder: "nhap matkhau",
    },
  },
];

Icon_HeadRight();




// Random Img
Random_img();


//  add form language
Language();


//Check validate
Check_Value()

// Scroll change color
ScrollY_Header();


// Show child header
Show_Child();


// Click over title Header
ClickOver();


// Change option Login
Change_Option()
// ////////////////////////////////////////////////////////////////



export {menus, Login, list_Icon}
