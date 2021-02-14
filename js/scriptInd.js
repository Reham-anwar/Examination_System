//setCookie
var date = new Date("2025/10/10");

function setCookie(cookieName, cookieValue, expiryDate) {
    var todaysDate = new Date();
    var d = expiryDate || todaysDate;

    document.cookie = cookieName + "=" + cookieValue + ";expires=" + d;
}
//  setCookie("salary","5000",new Date("2020/12/11"));
//  setCookie("age",25);

var myForm = document.getElementById("myform");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mail = document.getElementById("email");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("repass");

var spanfname = document.getElementById("spanfname");
var spanlname = document.getElementById("spanlname");
var spanemail = document.getElementById("spanemail");
var spanpass = document.getElementById("spanpass");
var spanrepass = document.getElementById("spanrepass");

var btn = document.getElementById("register");
//validation form
btn.addEventListener("click", function() {
    //validate fname
    if (fname.value == "") {
        spanfname.style.display = "inline";
        spanfname.textContent = "required field";
        fname.value = "";

    } else if (!isNaN(fname.value)) {
        spanfname.style.display = "inline";
        spanfname.textContent = "enter valid name";
        fname.value = "";

    } else {
        console.log(fname.value);
        spanfname.textContent = "";
        setCookie("fname=" + fname.value + ";expires=" + date + ";");

        //validate lname
        if (lname.value == "") {
            spanlname.style.display = "inline";
            spanlname.textContent = "required field";
            lname.value = "";
        } else if (!isNaN(lname.value)) {
            spanlname.style.display = "inline";
            spanlname.textContent = "enter valid name";
            lname.value = "";

        } else {
            console.log(lname.value);
            spanlname.textContent = "";
            setCookie("lname=" + lname.value + ";expires=" + date + ";");

            //validate email
            if (mail.value == "") {
                spanemail.style.display = "inline";
                spanemail.textContent = "required field";
                mail.value = "";

            } else if (!mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                spanemail.style.display = "inline";
                spanemail.textContent = "invalid email";
                mail.value = "";

            } else {
                console.log(mail.value);
                setCookie("mail=" + mail.value + ";expires=" + date + ";");
                spanemail.textContent = "";


                //valid password
                if (pass.value == "") {
                    spanpass.style.display = "inline";
                    spanpass.textContent = "required field";
                    pass.value = "";

                } else if (pass.value.length < 8) {
                    spanpass.style.display = "inline";
                    spanpass.textContent = "invalid password";
                    pass.value = "";

                } else {
                    console.log(pass.value);
                    spanpass.textContent = "";
                    setCookie("pass=" + pass.value + ";expires=" + date + ";");


                    //valid match password

                    if (pass.value !== pass2.value) {
                        spanrepass.style.display = "inline";
                        spanrepass.textContent = "not match";
                        pass2.value = "";

                    } else {
                        console.log(pass2.value);
                        spanrepass.textContent = "";
                        window.location.replace('signIn.html');

                    }
                }

            }

        }
    }
    //if validations ended and all its valid it well go to sign-in page

});