///////////////////get cookie///////////
function getCookie(cookieName) {
    /* if (arguments.length==0)
     {
       throw("You should Enter Cookie Name");
     }*/
    var getCook = document.cookie; //get cookie
    var res = "not found";
    // console.log(getCook);
    //spilit cookie by ';' ->array
    var arr1 = getCook.split("; "); //["salar=5000","age=25"]    
    // console.log(arr1);
    //spilit by '='
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split("="); // [age,25];
        if (arr2[0] === cookieName) {
            res = arr2[1];
        }
    }
    return res;
}
////////////////////////////////////////////////////////////////////
var btnsign = document.getElementById("btnsign");
var mail2 = document.getElementById("mail2");
var pass2 = document.getElementById("pass2");
var spanmail = document.getElementById("spanmail");
var spanpass2 = document.getElementById("spanpass");

var getmail = getCookie("mail");
console.log(getmail);
var getpass = getCookie("pass");
console.log(getpass);

btnsign.addEventListener("click", function() {
    if (mail2.value !== getmail) {
        spanmail.style.display = "inline";
        spanmail.textContent = "Email does't much";
        mail2.value = "";
    } else {
        console.log(mail2.value);
        spanmail.textContent = "";

        if (pass2.value !== getpass) {
            spanpass2.style.display = "inline";
            spanpass2.textContent = "passwords don't much";
            pass2.value = "";
        } else {
            console.log(pass2.value);
            spanpass2.textContent = "";
            window.location.replace("exma.html");

        }

    }

});