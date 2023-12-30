 var email=document.querySelector(".email")
var password=document.querySelector(".password")
var btngo = document.querySelector(".btngo")
function validation() {
     if(email.value==""){
        document.querySelector("#resuult").innerHTML="Enter Your Email"
        return false
    }
    else if(password.value==""){
        document.querySelector("#resuult").innerHTML="Enter your password"
        return false
    }
    else if(password.value.length<=6){
        document.querySelector("#resuult").innerHTML="password must be digite 6"
        return false
    }
    else if(password.value==""){
        document.querySelector("#resuult").innerHTML="Enter confirm password"
        return false
    }
    else if(password.value.length>=7){
        window.location.href = "home.html";
        return false
    }


}  












// &start open AI=============================



/* const api ="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";
const inp= document.getElementById("inp")
const images =document.querySelector("images")
const getImage =async ()=>{
    const methods={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`

        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256*256"
            }
        )
    }
const res =await fetch("https://api.openai.com/v1/images/generations",methods)



const data =await res.json()

const listImages=data.data;

listImages.map(photo=>{
    const container = document.createElement("div")
    images.append(container)
    const img=document.createElement("img")
    container.append(img)
    img.src=photo.url
})
}

 */
