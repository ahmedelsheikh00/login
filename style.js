 var btn=document.querySelector(".btn")
var popup=document.querySelector("#Popup")
var username=document.querySelector(".username")
var email=document.querySelector(".email")
var password=document.querySelector(".password")
var passwordcon=document.querySelector(".passwordcon")
var products=[] ;

// ^start validation

 function validation() {
    if(document.Formfill.Username.value==""){
        document.querySelector("#result").innerHTML="Enter Username"
       
        return false
    }
   
    else if(document.Formfill.Username.value.length<=6 ){
        document.querySelector("#result").innerHTML=" username atleast six letter "
        return false
    }
  
    
      else if(document.Formfill.Email.value==""){
        document.querySelector("#result").innerHTML="Enter Your Email"
        return false
    }
 
    else if(document.Formfill.Password.value==""){
        document.querySelector("#result").innerHTML="Enter your password"
        return false
    }


    else if(document.Formfill.Password.value.length<=6){
        document.querySelector("#result").innerHTML="password must be digite 6"
        return false
    }


    

    else if(document.Formfill.CPassword.value==""){
        document.querySelector("#result").innerHTML="Enter confirm password"
        return false
    }



    
    else if(document.Formfill.Password.value!==document.Formfill.CPassword.value){
        document.querySelector("#result").innerHTML="password does'nt matched"
        return false
    } 

    else if (document.Formfill.Password.value==document.Formfill.CPassword.value){
       
       
         btn.addEventListener("click" ,function(){
            Sucessfully()
            
            storaData ()
            
         }) 
        
//  popup.classList.add("open-slide")

        return false
    }
    


} 

// ^start storedata

 function  storaData () {

localStorage.dataa=JSON.stringify({
    name:username.value,
    email:email.value,
    pass:password.value,
    con:passwordcon.value,
})
 }



    /*product={
        name:username.value,
        email:email.value,
        pass:password.value,
        con:passwordcon.value,
    }
    // products.push(product)
    
    // JSON.stringify(products)
    localStorage.setItem("products", product)
    
    // console.log(
    //     localStorage.setItem("products", product)
    //     );

}
 */


// ^start show Sucessfully
 function Sucessfully() {
  
    Swal.fire({
        title: "Thank you",
        text: "You Were Registraation Sucessfully. Thanks!",
        icon: "OK"
      });
}  
// ^start clear
function clearForm() {

  username.value= ""
    email.value= ""
 password.value= ""
   passwordcon.value= ""
    
}





localStorage.name="ali"


 
/* function displayvalid(){
    result.classList.replace("d-none","d-flex")
} */



// btn.addEventListener("click" ,function(e){
//     displayvalid()
// JSON.stringify())
// })



