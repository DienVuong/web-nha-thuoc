// function renderEdit(text) {
//     let data = ""
//     data += "<table id='table'>" +
//         "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
//         "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
//         "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
//         "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
//         "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
//         "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
//         "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
//         "<tr><td><label for='thuoc'>Loại thuốc</label></td>" +
//         "<td><select id='category'>" +
//         "<option></option>" +
//         "<option value='Tayy'>Tayy</option>" +
//         "<option value='Dongy'>Dongy</option>" +
//         "</select></td></tr>" +
//         "<tr><td></td><td>" +
//         "<button onclick='editForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
//         "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
//         "</table>"
//     document.getElementById("poster").innerHTML = data
// }
//
// function cancelEdit() {
//     document.getElementById("poster").innerHTML = ""
// }
//
// //edit khi click vào submit form
// function editForm() {
//     let name = document.getElementById("name").value
//     let price = document.getElementById("price").value
//     let image = document.getElementById("image").value
//     let thuoc = document.getElementById("thuoc").value
//     let i = localStorage.getItem("indexI")
//     let j = localStorage.getItem("indexJ")
//     switch (thuoc) {
//         case "TayY": {
//             arrayTayY[i][j] = new Product(name, price, image, thuoc)
//             showTayY()
//             break
//         }
//         case "DongY": {
//             arrayDongY[i][j] = new Product(name, price, image, thuoc)
//             break;
//         }
//     }
//     cancelEdit()
// }
//
// //edit khi click vào nút edit
// function editProduct(i, j, category) {
//     localStorage.setItem("indexI", i)
//     localStorage.setItem("indexJ", j)
//     switch (thuoc) {
//         case "Car": {
//             renderValueEdit(arrayTay[i][j])
//             break
//         }
//         case "Scooter": {
//             renderValueEdit(arrayDong[i][j])
//             break
//         }
//     }
// }
//
// function renderValueEdit(product) {
//     document.getElementById("name").value = product.getName()
//     document.getElementById("price").value = product.getPrice()
//     document.getElementById("image").value = product.getImage()
//     document.getElementById("thuoc").value = product.getCategory()
// }
//
