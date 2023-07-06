    class Hight_Light {
        constructor(input, regex) {
            this.input = input;
            this.regex = regex;
        }
        HightLight() {
            
            // change to RegExp to use for search string
            const regex = new RegExp(this.regex, "gi");
            // Trỏ đến thẻ app mình muốn hiển thị ra kết quả
            const app = document.querySelector('.app')
            // Vòng lặp qua input mình cho vào cũng chính là mảng danh sách
            for (let index = 0; index < this.input.length; index++) {
                const element = this.input[index];
                
                if(regex.test(element)) {       // Nếu như có tồn tại cụm từ cần tìm trong chuỗi chính thì:
                    // kiểm tra chỗ nào có phần tử giống thì thanh nó thành thẻ span và thêm css
                    const output = element.replace(regex, `<span class = "text-danger">${this.regex}</span>`)
                    // Tạo thẻ con để thêm vào chỗ         app.insertBefore(child, app.firstChild) vì nó bắt phải là 1 node
                    const child = document.createElement("p")
                    child.innerHTML= output             // Thêm chuỗi mà mình vừa setup vào
                    
                    app.insertBefore(child, app.firstChild)   // Thêm phần thẻ vừa đc set vào đầu tiên của thẻ cha
                }else {
                    app.innerHTML += `<p>${element}</p>` 
                }
            }
        }

    }


    const arr = [
        'xin chao cac ban minh la nguoi vui ve day chao',
        'rat vui duco gap moi nguoi',
        'Toi la cua ban',
        'Hoc sinh ca biet',
        'Qua mon thoi nao'
    ]
    const value_input = document.querySelector('.input input')  //Thẻ input
    value_input.onkeyup =  () => {                             // Lắng nghe mỗi lần change thì mình gọi lại class
        document.querySelector('.app').innerHTML = ''
        const hihi = new Hight_Light(arr,`${value_input.value}`)
        hihi.HightLight()
        if(value_input.value == '') {
            document.querySelector('.app').innerHTML = ''
        }
    }
    
