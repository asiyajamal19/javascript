console.log("yes")


import{
    // app,
    // db,
    // collection,
    // addDoc,
    // getDocs,
    // setDoc
    // ,doc
} from "./firebase.js"

if (!localStorage.userID) {
    window.location = "./login.html";
}
//  else {


//     const message = document.getElementById("message")
//     const cntName = document.getElementById("cntName")
//     const cntEmail = document.getElementById("cntEmail")
//     const cntSubject = document.getElementById("cntSubject")
//     const textArea = document.getElementById("textArea")

//     message.addEventListener("click", async () => {
//         // localStorage.removeItem("userId");
//         // window.location = './login.html' ;
// try {
    
//     const userObject = {
//         userName : cntName.value,
//          userEmail : cntEmail.value,
//          userSubject : cntSubject.value,
//          usertextArea : textArea.value,
//      }
//      console.log(userObject)

//      const collecter = collection(db, "users");
//      const responce = await getDocs(collecter,userObject);
//      console.log( responce ,"yes")
//      alert("yes your message ic succses fully send")

// } catch (error) {
//     console.log(error.message)
// }

//     })

// }

const logOut = document.getElementById('logOut');

logOut.addEventListener("click", () => {
    localStorage.removeItem("userID");
    window.location = './login.html' ;
})