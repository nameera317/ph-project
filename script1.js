 var userText = document.getElementById("user");
 userText.addEventListener("keyup" , onKeyUp);
 var userPass = document.getElementById("pass");
 userPass.addEventListener("keyup" , onPass);
 var btn = document.getElementById("button");
 btn.addEventListener("click" , onBtnClick);

  var uTxt;
  var pTxt;
 function onKeyUp(e){
    uTxt = e.target.value;
    console.log(txt);
 }
 function onPass(e){
    pTxt = e.target.value;
    console.log(pTxt);
 }

 function onBtnClick(){
    if(uTxt !== pTxt) {
        window.alert("Please enter valid credentials")
     }
 else {
    window.alert("Login succesfull");
    window.open("http://127.0.0.1:5500/Login%20Page/Order%20Listing%20Page/index2.html");
    localStorage.setItem('loginStaus', true);
    localStorage.getItem("loginStatus");

 }
 }