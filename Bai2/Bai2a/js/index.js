function nhapTT() {
    var name = document.getElementById("YourName").value;
    var pass = document.getElementById("YourPWD").value;

    document.getElementById("showName").innerHTML = name;
    document.getElementById("showPWD").innerHTML = pass;

    localStorage.setItem("name", name);
    localStorage.setItem("pass", pass);
    let w=window.open("dangnhap.html");
}