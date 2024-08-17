

console.log("signup")

import {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc
    
    ,getAuth
    , auth
    , createUserWithEmailAndPassword
    , signInWithEmailAndPassword
} from './firebase.js'

if (localStorage.userID) {
    window.location = "./index.html"
} else {



    var name = document.getElementById("name");
    var lname = document.getElementById("lname");
    var gender = document.getElementById("gender");
    var religin = document.getElementById("religin");
    var pnumber = document.getElementById("pnumber");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submitbtn = document.getElementById("submitbtn");

    var userSpacialId;

    submitbtn.addEventListener('click', async () => {

        if (!name.value && !lname.value) {
            alert("enter valid information")
            return
        }
        if (!email.value) {
            alert("enter valid information")
            return
        }
        if (password.value < 8) {
            alert("password mostly 8 carecters")
            return
        }

        try {

            const data = {

                Email: email.value,

                name: name.value
                , lastname: lname.value
                , gender: gender.value
                , religin: religin.value
            }


            const collect = collection(db, "userInformation")
            const responceUser = await addDoc(collect, data)
            alert("your varifiqation is done")
            console.log("responceUser", responceUser)



            const response = await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );

            const uid = response.user.uid;
            localStorage.setItem("userID", uid)
            console.log("uid", uid)
            console.log("response", response)
            alert("sign up sucsses");

            name.value
            lname.value
            gender.value
            religin.value
            pnumber.value
            email.value
            password.value


            window.location = "./index.html"

        } catch (error) {
            alert("error", error.message)
        }
    })





}


