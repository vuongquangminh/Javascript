// Dùng call Promise để xử lý các event bất đồng bộ thay vì dùng callback. 
// Dùng Callback nhiều lần trong 1 hàm sẽ dẫn đến callback hell khiến nó rất khó kiểm xoát và sửa lỗi nên người ta thiết kế ra Promise
// Dùng Promise chúng ta viết :
//              VD: Đây là cách thứ 1 khi dùng 'then' và 'catch'

                    var promise = new Promise(function(resolve, reject) { 
                    const a = 'Okay'; 
                    const b = 'Okay'
                    if(a === b) { 
                        resolve();              // Nếu nó đủ điều kiện lọt vào đây thì nó sẽ chạy xuống lệnh 'then'  (lệnh 'then' như kiểu nếu trả về kqua đúng)
                    } else { 
                        reject();               // Nêu nó đủ điều kiện lọt vào đây thì nó sẽ chạy lệnh "catch"       ( lệnh catch là để bắt lỗi và xử lý khi sai)
                    } 
                    }); 

                    promise. 
                        then(function () { 
                            console.log('Success.'); 
                        }). 
                        catch(function () { 
                            console.log('Failed.'); 
                        }); 


//                VD: Đây là cách thứ 2 khi dùng 'then' và truyền cho nó 2 tham số là 2 hàm. "Then nó nhận 2 giá trị 1 là đúng 2 là sai và chỉ chạy 1" thì:
//                       Hàm đầu tiên nó sẽ chạy nếu kết quả đúng
//                       Hàm thứ 2 nó sẽ chạy nếu kết quả sai