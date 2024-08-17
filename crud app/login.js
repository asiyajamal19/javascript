console.log("login")

import {
    auth
    ,signInWithEmailAndPassword
} from './firebase.js'




if(localStorage.userID){
 window.location = "./index.html"
}else{



var email = document.getElementById("email");
var password = document.getElementById("password");

const login = document.getElementById("login")
login.addEventListener("click", async () => {

    try {
        const res = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        
        console.log(res, "res");
        localStorage.setItem("userID", res.user.uid)
        alert("sign in succsess")
        window.location.replace("./index.html");

      } catch (error) {
        console.log("error", error.message);
      }
    
    
})

}