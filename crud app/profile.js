

console.log("user profile")

import {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    setDoc
    
    , doc
} from './firebase.js';
// import{
//     uCl
// } from './script.js'

const logOut = document.getElementById('logOut');
const name = document.getElementById('name');
const uname = document.getElementById('uname');
const lname = document.getElementById('lname');
const gender = document.getElementById('gender');
const religin = document.getElementById('religin');
const pNumber = document.getElementById('pNumber');
const userEmail = document.getElementById('userEmail');
const userproEmail = document.getElementById('userproEmail');
const resive = document.getElementById('resive');


// name.innerHTML = localStorage.getItem("user Name")

// uname.innerHTML = localStorage.getItem("user Name")

// lname.innerHTML = localStorage.getItem("user Last Name")

// gender.innerHTML = localStorage.getItem("user gender")

// religin.innerHTML = localStorage.getItem("user religin")

// pNumber.innerHTML = localStorage.getItem("user number")

// userEmail.innerHTML = localStorage.getItem("user email")
// userproEmail.innerHTML = localStorage.getItem("user email")



     



// console.log(localStorage.userId)


// // Function to get a specific user's data
// async function getUserData(uid) {
//     // Create a reference to the user's document in the "users" collection
//     const userDocRef = doc(db, "users", uid);

//     try {
//         // Get the document from Firestore
//         const userDoc = await getDoc(userDocRef);

//         // Check if the document exists and return the data
//         if (userDoc.exists()) {
//             console.log("User Data:", userDoc.data());
//             return userDoc.data();
//         } else {
//             console.log("No such document!");
//         }
//     } catch (error) {
//         console.error("Error getting document:", error);
//     }
// }

// Example usage
// getUserData();



// logOut.addEventListener("click", () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("user Name")
//     localStorage.removeItem("user Last Name")
//     localStorage.removeItem("user gender")
//     localStorage.removeItem("user religin")
//     localStorage.removeItem("user number")
//     localStorage.removeItem("user email")
//     // window.location = './login.html' ;

// })
// const myId = localStorage.userId

// const docRef = doc(db, "users", localStorage.userId);
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
// });

// const querySnapshot = await getDocs(uCl)



// const docRef = doc(db, "users", d);
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }


    const collectData = collection(db, "userInformation")
    const snapshot = await getDocs(collectData)
    console.log(snapshot)
    snapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data())
        if (doc.id === localStorage.userID) {
            alert("show")
            console.log(doc.data())
        }
    });


logOut.addEventListener("click", () => {
    localStorage.removeItem("userID");
    window.location = './login.html' ;
})

