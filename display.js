//dữ liệu
//list thuốc tây
new Product("Ha", 32000, "./image/car1.png", "Tay")
let tay1 = new Product("New Viroto", 56000, "./image/tay1.jpg", "Tay")
let tay2 = new Product("New Viroto ", 10000, "./image/tay2.png", "Tay")
let tay3 = new Product("Kháng sinh", 100.000, "./image/tay3.jpg", "Tay")
let tay4 = new Product("Men vi sinh", 5000, "./image/tay4.jpg", "Tay")
let tay5 = new Product("Sot", 15000, "./image/tay5.jpeg", "Tay")
let tay6 = new Product("Bảo khí khang", 120000, "./image/tay6.png", "Tay")
let tay7 = new Product("Đại tràng ", 180000, "./image/tay7.jpg", "Tay")
let tay8 = new Product("Vương hoạt", 220000, "./image/tay8.png", "Tay")
let tay9 = new Product("JEX MAX", 90000, "./image/tay9.jpg", "Tay")
let tay10 = new Product("ANGELA GOL", 140000, "./image/tay10.jpg", "Tay")
let arrayTay = [[tay1, tay2, tay3, tay4, tay5], [tay6, tay7, tay8, tay9, tay10]];

// //list thuốc đông y
// new Product("SH 150i",71000000,"./image/xega1.png",  "Dong")
// let dong1 = new Product("SH 150i",71000000,"./image/xega1.png",  "Dong")
// let dong3 = new Product("AirBlade 125",41200000,"./image/xega3.png",  "Dong")
// let dong4 = new Product("Vision",30000000,"./image/xega4.png",  "Dong")
// let dong5 = new Product("Lead",38000000,"./image/xega5.png",  "Dong")
// let dong6 = new Product("PCX Hybrid",90000000,"./image/xega6.png",  "Dong")
// let arrayDong = [[dong1, dong2, dong3], [dong4, dong5, dong6]];


function showTay() {
    showElement(arrayTay)
}

//hàm tạo list
function showElement(array) {
    let content = "<table width='100%'  style='margin-left: 120px; height: 100%'>";
    for (let i = 0; i < array.length; i++) {
        content += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            content += "<td height='310px'>"
            content += "<img class='test'  alt='Lỗi' src=" + array[i][j].image + ">"
            content += "<h2>" + array[i][j].name + "</h2>"
            content += "<p>Giá: " + array[i][j].price + " VND</p>"
            if (!checkAdmin()) {
                content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
                content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
            }
            content += "</td>"
        }
        content += "<tr>"
    }
    content += "</table>"
    console.log(content)
    document.getElementById("displayElement").innerHTML = content
}

function showDong() {
    showElement(arrayDong)
}


// kiểm tra xem đã đăng nhập admin hay chưa?
function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='dangnhap.html'>Đăng nhập</a></div>"
        document.getElementById("dangnhap").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("dangnhap").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}




