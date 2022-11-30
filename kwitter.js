function addUser(){
    userName = document.getElementById("userName").value;

    localStorange.setItem("userName", userName);

    window.location = "kwitterRoom.html"
}
