console.log("ehllo")


import {
  
    getStorage,
    storage,
    ref,
    uploadBytes,
    downloadRef
    
} from '../firebase.js'

console.log(getStorage)
console.log(ref)

const blogImg = document.getElementById("blogImg");
const blogtitle = document.getElementById("blogtitle");
const post = document.getElementById("post");
const textArea = document.getElementById("textArea");




post.addEventListener("click",  async () => {
    console.log("post")

    console.log(blogImg.files[0])
    console.log(blogtitle.value)
    console.log(textArea.value)


    const file = blogImg.files[0];
    if (file) {
        try {

            //  refrence 
                const storageRef = ref(storage, `images/${file.name}`);
            //  upload
            const uploadRef = await uploadBytes(storageRef,file)
            console.log(uploadRef)
            alert("upload ho gaya ")
            // download
            const downloadRef = await getDownloadURL(uploadRef.ref)
            console.log("Link ",downloadRef)
            alert("download karo")

            blogImg.src = downloadRef

        } catch (error) {
            console.log("Error :", error.message)
        }
    }
})




