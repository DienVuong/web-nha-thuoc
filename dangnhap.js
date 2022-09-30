const default_username = 'admin';
const default_password = '66666666';
function checkLogin(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username !=default_username || password != default_password){
        alert("Đăng nhập thất bại, mời đăng nhập lại!");
        return false
    } else if( username === default_username && password === default_password){
        localStorage.setItem("username", default_username);
        alert('Đăng nhập thành công!');
    }
}