let hiddenlistflag = true;
function showHiddenList() {
    if(hiddenlistflag)
    {
        document.querySelector(".hidden-menu-content").style =
        "display:block ;"
        hiddenlistflag = false;
    }
    else{
        document.querySelector(".hidden-menu-content").style =
        "display:none ;"
        hiddenlistflag = true;
    }
}

function hideloginlist(){
    document.querySelector(".hidden-login").style.display = "none";
    document.querySelector(".nav-login").style = "background-color: white ; color:black;"
    document.querySelector(".nav-login-select").style = "background-color:white ; color:black ; outline:none; border:none;"
    document.querySelector(".nav-login").children[1].style = "background-color:white; ; color: black;"
}
function showloginlist() {
    document.querySelector(".hidden-login").style =
      "display:block ;";
      document.querySelector(".nav-login").style = "background-color: rgb(33, 98, 237) ; color: white;"
      document.querySelector(".nav-login-select").style = "background-color: rgb(33, 98, 237) ; color: white ; outline:none; border:none;"
      document.querySelector(".nav-login").children[1].style = "background-color: rgb(33, 98, 237) ; color: white;"
  }