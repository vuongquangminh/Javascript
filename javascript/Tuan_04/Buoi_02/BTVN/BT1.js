// BT1

const makeNetworkRequest = function() { 
    const app = document.querySelector('.app')
    setTimeout (async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); 
        const data = await response.json(); 
        console.log(data[3]); 
        if(data[3].id==4) {
            app.innerHTML = 'da thao tac xong<br>'
        }
    }
    catch(error) {
        console.log(error)
    }
    
    },5000) 
    app.innerHTML = 'doi 1 chut'
  }

const readFile =  function() {
    const app = document.querySelector('.app')
    setTimeout(async () => {
        try{
            const file = await     fetch("https://raw.githubusercontent.com/openai/gym/master/README.md"); 
            const contents = await file.text(); 
            console.log(contents); 
        }
        catch(error) {
            app.innerHTML += 'function thu 2'
        }
    },5000) 
}
const API3 = function() {
    const app = document.querySelector('.app')
    setTimeout(async () => {
        try{
            const api3 = await fetch('https://provinces.open-api.vn/api/?depth=1')
            const data = await api3.json()
            console.log(data)
            app.innerHTML +='day la api 3'
        }
        catch(error) {
            app.innerHTML += 'api3 nay bi sai'
        }
    },5000)
}

const AllApi = function() {
    return Promise.all([makeNetworkRequest, readFile, API3])
    .then (results => {
        makeNetworkRequest()
        readFile()
        API3()
    })
}
AllApi()



