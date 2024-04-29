var firstname=document.getElementById("First-Name").value 
var lastname=document.getElementById("Last-Name").value
var email=document.getElementById("Email-Address").value
var password=document.getElementById("Password").value
var input=document.getElementById("First-Name")
var first=document.getElementById("first")
var last=document.getElementById("last")
var mail=document.getElementById("mail")
var pass=document.getElementById("pass")
function claim(){
//     if(firstname.length>1 && firstname.length<4 && firstname===password){
//         first.textContent="Username and password cannot be same"
//         first.style.color="red"
//         first.style.textAlign="end"
// }
    
    
    
    
    
    
     if(firstname.length<4){
        // input.style.border="2px red"
        first.textContent="First Name cannot be empty or lesser than 4"
        first.style.textAlign="end"
        first.style.color="red"
        last.textContent="Last Name cannot be empty"
        last.style.textAlign="end"
        last.style.color="red"
    } 
    else{
        input.style.border="2px hsl(248, 32%, 49%)"
    }
        if(password.length<6 || password.length>16){
        pass.textContent="Password cannot be empty"
        pass.style.color="red"
        pass.style.textAlign="end"
    }

    if(!email){
        mail.textContent="Looks like this is not an email"
        mail.style.color="red"
        mail.style.textAlign="end"
    }
    
}