// Async/Await là ES7 nó dùng tiện lợi hơn Promise của ES6




//                              Async / Await là gì?
// Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. 
// Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API. Trong đó:

//          => Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

//          => Tự động biến đổi một hàm thông thường thành một Promise.
// Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
//          => Async cho phép sử dụng Await.
//          => Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()😉.

// Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
// Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
// Await chỉ có thể được sử dụng bên trong các function async.


//  Dưới đây chúng ta sẽ viết cùng một chức năng với 2 cách khác nhau: cách thứ 1 với Promises, và cách thứ 2 với Async / Await
// cách 1: 
            function getJSON() {

                // To make the function blocking we manually create a Promise.
                return new Promise( function(resolve) {
                    axios.get('https://tutorialzine.com/misc/files/example.json')
                        .then( function(json) {

                            // The data from the request is available in a .then block
                            // We return the result using resolve.
                            resolve(json);
                        });
                });
            }
// cách 2:
// Async/Await approach

            // The async keyword will automatically create a new Promise and return it.
            async function getJSONAsync() {

                // The await keyword saves us from having to write a .then() block.
                let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

                // The result of the GET request is available in the json variable.
                // We return it just like in a regular synchronous function.
                return json;
}